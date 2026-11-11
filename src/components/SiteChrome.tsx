"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AppLink } from "./AppLink";
import { BurgerIcon, EmailIcon, PhoneIcon, TopArrowIcon, WeChatIcon, WhatsAppIcon } from "./Icons";
import { NAV_ITEMS, SITE } from "@/data/site";
import { ensureScrollCraft, type ScrollCraftGlobal, type ScrollCraftInstance } from "@/lib/scrollcraft";

declare global {
  interface Window {
    ScrollCraft?: ScrollCraftGlobal;
  }
}

export function SiteChrome() {
  const pathname = usePathname() || "/";
  const [sheetOpen, setSheetOpen] = useState(false);
  const [wxOpen, setWxOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const sheetCloseRef = useRef<HTMLButtonElement | null>(null);
  const wxCloseRef = useRef<HTMLButtonElement | null>(null);
  const wxTriggerRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  const isNavActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
      return pathname === href;
    },
    [pathname]
  );

  // Scroll state (.scrolled nav blur + .dock__btn--top visibility)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      document.body.classList.toggle("scrolled", y > 32);
      setShowTop(y > 640);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body home class + reset drawer on navigation
  useLayoutEffect(() => {
    document.body.classList.toggle("home", pathname === "/");
  }, [pathname]);

  useEffect(() => {
    setSheetOpen(false);
    setWxOpen(false);
  }, [pathname]);

  // Body lock for mobile #sheet
  useEffect(() => {
    document.body.classList.toggle("nav-open", sheetOpen);
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    if (sheetOpen) {
      sheetCloseRef.current?.focus();
    }
    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  // Global [data-wx-open] delegation (covers both .dock and /contact page button)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest("[data-wx-open]") as HTMLElement | null;
      if (!trigger) return;
      e.preventDefault();
      wxTriggerRef.current = trigger;
      setWxOpen(true);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Focus management for WeChat dialog
  useEffect(() => {
    if (wxOpen) {
      wxCloseRef.current?.focus();
    } else if (wxTriggerRef.current) {
      const prev = wxTriggerRef.current;
      wxTriggerRef.current = null;
      prev.focus();
    }
  }, [wxOpen]);

  // Escape key closes sheet / modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (wxOpen) {
        setWxOpen(false);
        return;
      }
      if (sheetOpen) {
        setSheetOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [wxOpen, sheetOpen]);

  // Mount & cleanly destroy ScrollCraft + .rail observer + surveyor crosshair per route
  useEffect(() => {
    const sc = ensureScrollCraft();
    if (!sc) return;

    document.body.style.backgroundColor = "";
    if (progressRef.current) {
      progressRef.current.style.transform = "scaleX(0)";
    }

    const instance: ScrollCraftInstance = sc.mount(document.body);
    let ioRail: IntersectionObserver | null = null;
    let rafCross: number | null = null;
    let cleanupCrosshair: (() => void) | null = null;

    // Rail sequential arrive reveal on homepage
    const rail = document.querySelector(".rail");
    if (rail) {
      const railTarget = rail.closest("[data-sc-act]") || rail;
      ioRail = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              rail.classList.add("settled");
              ioRail?.disconnect();
            }
          });
        },
        { threshold: 0.08 }
      );
      ioRail.observe(railTarget);
    }

    // Signature surveyor crosshair on homepage
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ch = document.querySelector(".crosshair") as HTMLElement | null;
    if (fine && !reduce && ch) {
      let tx = window.innerWidth / 2;
      let ty = window.innerHeight / 2;
      let cx = tx;
      let cy = ty;
      const step = () => {
        cx += (tx - cx) * 0.16;
        cy += (ty - cy) * 0.16;
        ch.style.setProperty("--sx", `${cx.toFixed(1)}px`);
        ch.style.setProperty("--sy", `${cy.toFixed(1)}px`);
        const ro = ch.querySelector(".crosshair__readout");
        if (ro) {
          const easting = ((cx / Math.max(window.innerWidth, 1)) * 1000).toFixed(1);
          const northing = ((1 - cy / Math.max(window.innerHeight, 1)) * 1000).toFixed(1);
          ro.textContent = `E ${easting}\nN ${northing}\nRL +0.00`;
        }
        if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) {
          rafCross = requestAnimationFrame(step);
        } else {
          rafCross = null;
        }
      };
      const onPointerMove = (ev: PointerEvent) => {
        tx = ev.clientX;
        ty = ev.clientY;
        document.body.classList.add("cross-on");
        if (!rafCross) rafCross = requestAnimationFrame(step);
      };
      const onPointerLeave = () => {
        document.body.classList.remove("cross-on");
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
      cleanupCrosshair = () => {
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerleave", onPointerLeave);
        document.body.classList.remove("cross-on");
      };
    }

    return () => {
      if (rafCross) cancelAnimationFrame(rafCross);
      if (cleanupCrosshair) cleanupCrosshair();
      if (ioRail) ioRail.disconnect();
      instance.destroy();
      document.body.style.backgroundColor = "";
    };
  }, [pathname]);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>

      <div className="dock" role="complementary" aria-label="Contact shortcuts">
        <button
          className="dock__btn dock__btn--wx"
          type="button"
          data-wx-open
          aria-haspopup="dialog"
          aria-label="WeChat"
        >
          <WeChatIcon />
          <span className="dock__tip">WeChat</span>
        </button>
        <a
          className="dock__btn dock__btn--wa"
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
          <span className="dock__tip">WhatsApp {SITE.whatsappDisplay}</span>
        </a>
        <a className="dock__btn" href={SITE.emailHref} aria-label="Email">
          <EmailIcon />
          <span className="dock__tip">{SITE.email}</span>
        </a>
        <a className="dock__btn" href={SITE.phoneHref} aria-label="Call">
          <PhoneIcon />
          <span className="dock__tip">Tel {SITE.phone}</span>
        </a>
        <button
          className={`dock__btn dock__btn--top${showTop ? " show" : ""}`}
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <TopArrowIcon />
          <span className="dock__tip">Top</span>
        </button>
      </div>

      <div
        className={`modal${wxOpen ? " open" : ""}`}
        id="wx-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wx-title"
        aria-hidden={!wxOpen}
        inert={!wxOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setWxOpen(false);
        }}
      >
        <div className="modal__card">
          <h3 id="wx-title">WeChat</h3>
          <img
            src="/assets/wechat-qr.png"
            alt="WeChat QR linked to the M&M cell number"
            width={250}
            height={250}
          />
          <p>
            Our WeChat is linked to <b>{SITE.whatsappDisplay}</b>. Scan the code, or search the number
            in WeChat with &quot;Add by phone&quot;.
          </p>
          <p>
            Prefer email? <a href={SITE.emailHref}>{SITE.email}</a>
          </p>
          <button
            ref={wxCloseRef}
            className="btn btn--ghost modal__close"
            type="button"
            onClick={() => setWxOpen(false)}
          >
            Close
          </button>
        </div>
      </div>

      <a className="skip" href="#main">
        Skip to content
      </a>
      <span ref={progressRef} data-sc-progress aria-hidden="true" />

      <nav className="nav" aria-label="Main">
        <AppLink className="nav__logo" href="/" aria-label="M&M Engineering home">
          <img
            src="/assets/brand/mm-logo-lockup.svg"
            alt="M&M Engineering Consultancy logo"
            width={183}
            height={44}
          />
        </AppLink>
        <ul className="nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <AppLink
                href={item.href}
                aria-current={isNavActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </AppLink>
            </li>
          ))}
        </ul>
        <AppLink className="nav__cta" href="/contact">
          Start a project
        </AppLink>
        <button
          ref={burgerRef}
          className="nav__burger"
          type="button"
          aria-label="Open menu"
          aria-expanded={sheetOpen}
          aria-controls="sheet"
          onClick={() => setSheetOpen(true)}
        >
          <BurgerIcon />
        </button>
      </nav>

      <div
        className={`sheet${sheetOpen ? " open" : ""}`}
        id="sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!sheetOpen}
        inert={!sheetOpen}
      >
        <div className="sheet__head">
          <img
            src="/assets/brand/mm-logo-lockup.svg"
            alt="M&M Engineering Consultancy logo"
            width={183}
            height={44}
          />
          <button
            ref={sheetCloseRef}
            className="sheet__close"
            type="button"
            aria-label="Close menu"
            onClick={() => {
              setSheetOpen(false);
              burgerRef.current?.focus();
            }}
          >
            &times;
          </button>
        </div>
        <nav>
          {NAV_ITEMS.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              aria-current={isNavActive(item.href) ? "page" : undefined}
              onClick={() => setSheetOpen(false)}
            >
              {item.sheetLabel}
            </AppLink>
          ))}
          <AppLink
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={() => setSheetOpen(false)}
          >
            Contact
          </AppLink>
        </nav>
        <div className="sheet__foot">
          <a className="btn btn--wa" href={SITE.whatsappHref} target="_blank" rel="noopener">
            <WhatsAppIcon /> WhatsApp {SITE.whatsappDisplay}
          </a>
          <a className="btn" href={SITE.emailHref}>
            <EmailIcon /> {SITE.email}
          </a>
        </div>
      </div>
    </>
  );
}
