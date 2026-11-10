"use client";

import { AppLink as Link } from "./AppLink";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/data/company";
import { ContactWidget } from "./ContactWidget";

const isCurrent = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <Link className="nav__logo" href="/" aria-label="M&M Engineering home">
          <img
            src="/assets/brand/mm-logo-lockup.svg"
            alt="M&M Engineering & Consultancy"
            width={142}
            height={34}
            className="nav__logo-img"
          />
        </Link>

        <ul className="nav__links">
          <li className="nav__item">
            <Link
              className="nav__link"
              href="/services"
              aria-current={
                isCurrent(pathname, "/services") ||
                isCurrent(pathname, "/consultancy") ||
                isCurrent(pathname, "/about") ||
                isCurrent(pathname, "/safety-policy")
                  ? "page"
                  : undefined
              }
            >
              Services
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-4">
                  <p className="t-label">Engineering &amp; Works</p>
                  <Link href="/services">
                    Contracting &amp; 13 Disciplines
                    <span>Electrical HV/LV, civil works, telecoms, solar &amp; plant fleet</span>
                  </Link>
                  <Link href="/consultancy">
                    Consultancy Practice
                    <span>Independent design review, EIAs, HAZOP &amp; tender supervision</span>
                  </Link>
                </div>
                <div className="menu-col span-4">
                  <p className="t-label">Practice &amp; Compliance</p>
                  <Link href="/about">
                    About M&amp;M Engineering
                    <span>Established 2013 in Windhoek · Reg. {COMPANY.registration}</span>
                  </Link>
                  <Link href="/safety-policy">
                    Health &amp; Safety Policy
                    <span>Labour Act 2007 &amp; GN 156 of 1992 site governance</span>
                  </Link>
                </div>
                <div className="span-4">
                  <Link className="menu-card" href="/profile">
                    <div className="panel" style={{ overflow: "hidden", padding: 0 }}>
                      <img
                        src="/assets/opt/photos/office-480.webp"
                        alt="Engineering project desk in Windhoek"
                        width={480}
                        height={320}
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <strong>2026 Company Profile ({COMPANY.profilePdfSize} PDF)</strong>
                      <p className="t-small muted">15-page profile, equipment fleet &amp; tender pre-qualification</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              href="/projects"
              aria-current={isCurrent(pathname, "/projects") ? "page" : undefined}
            >
              Projects
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              href="/clients"
              aria-current={isCurrent(pathname, "/clients") ? "page" : undefined}
            >
              Clients
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              href="/profile"
              aria-current={isCurrent(pathname, "/profile") ? "page" : undefined}
            >
              Profile
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              href="/blog"
              aria-current={isCurrent(pathname, "/blog") ? "page" : undefined}
            >
              Journal
            </Link>
          </li>
        </ul>

        <div className="nav__actions">
          <ContactWidget variant="header" />
          <Link className="btn btn--primary" href="/contact">
            Request a quote
          </Link>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M2 5h14M2 13h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
