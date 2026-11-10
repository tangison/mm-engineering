"use client";

import { useEffect, useId, useRef, useState } from "react";
import { COMPANY } from "@/data/company";
import { Picture } from "./Picture";

interface ContactWidgetProps {
  variant?: "header" | "bar";
}

export function ContactWidget({ variant = "bar" }: ContactWidgetProps) {
  const [open, setOpen] = useState(false);
  const [wxOpen, setWxOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wxCloseRef = useRef<HTMLButtonElement>(null);
  const trayId = useId();
  const wxTitleId = useId();

  useEffect(() => {
    if (variant !== "bar") return;
    const el = navRef.current;
    if (!el) return;
    const ensureActive = () => {
      if (el.inert) el.inert = false;
      if (el.dataset.bar !== "always") el.dataset.bar = "always";
    };
    ensureActive();
    const mo = new MutationObserver(ensureActive);
    mo.observe(el, { attributes: true, attributeFilter: ["inert", "data-bar"] });
    return () => mo.disconnect();
  }, [variant]);

  useEffect(() => {
    if (!open && !wxOpen) return;

    if (wxOpen) {
      wxCloseRef.current?.focus();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (wxOpen) {
          setWxOpen(false);
          triggerRef.current?.focus();
        } else if (open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const box = variant === "bar" ? navRef.current : divRef.current;
      if (open && box && !box.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, wxOpen, variant]);

  const closeWechat = () => {
    setWxOpen(false);
    triggerRef.current?.focus();
  };

  const closeTray = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const tray = open ? (
    <div
      id={trayId}
      className={variant === "header" ? "cwidget__tray cwidget__tray--down" : "cwidget__tray"}
      role="region"
      aria-label="Direct contact channels"
    >
      <div className="cwidget__head">
        <span>Direct desk · Windhoek</span>
        <button
          type="button"
          className="cwidget__close"
          onClick={closeTray}
          aria-label="Collapse contact menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="cwidget__items">
        <a className="cwidget__item" href={COMPANY.phoneHref} onClick={() => setOpen(false)}>
          <span className="cwidget__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className="cwidget__text">
            <strong>Call</strong>
            <span>{COMPANY.phone}</span>
          </span>
        </a>

        <a
          className="cwidget__item"
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <span className="cwidget__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </span>
          <span className="cwidget__text">
            <strong>WhatsApp</strong>
            <span>{COMPANY.whatsapp}</span>
          </span>
        </a>

        <a className="cwidget__item" href={COMPANY.emailHref} onClick={() => setOpen(false)}>
          <span className="cwidget__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <span className="cwidget__text">
            <strong>Email</strong>
            <span>{COMPANY.email}</span>
          </span>
        </a>

        <button
          type="button"
          className="cwidget__item"
          onClick={() => {
            setOpen(false);
            setWxOpen(true);
          }}
        >
          <span className="cwidget__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 14C5.9 14 3 11.5 3 8.5S5.9 3 9.5 3 16 5.5 16 8.5c0 .9-.3 1.7-.7 2.4" />
              <path d="M6 13.5 4.5 16l2.8-.9" />
              <ellipse cx="15.5" cy="14.5" rx="5.5" ry="4.5" />
              <path d="m18.5 18 1.5 2-2.5-.6" />
            </svg>
          </span>
          <span className="cwidget__text">
            <strong>WeChat</strong>
            <span>QR · {COMPANY.whatsapp}</span>
          </span>
        </button>
      </div>
    </div>
  ) : null;

  const modal = wxOpen ? (
    <div
      className="wx-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby={wxTitleId}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeWechat();
      }}
    >
      <div className="wx-dialog__card">
        <h3 id={wxTitleId}>WeChat</h3>
        <Picture
          bucket="misc"
          slug="wechat-qr"
          sizes="250px"
          alt="WeChat QR code linked to M&M Engineering +264 81 3275 403"
        />
        <p className="t-small">
          Linked to <strong>{COMPANY.whatsapp}</strong>. Scan the QR code or search the phone
          number in WeChat using Add by phone.
        </p>
        <button
          ref={wxCloseRef}
          type="button"
          className="btn btn--primary"
          onClick={closeWechat}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

  if (variant === "header") {
    return (
      <>
        <div className="cwidget-header" ref={divRef}>
          <button
            ref={triggerRef}
            type="button"
            className="btn btn--secondary cwidget__desktop-btn"
            aria-expanded={open}
            aria-controls={trayId}
            aria-label={open ? "Close direct contact channels" : "Direct desk: Call, WhatsApp, Email, WeChat"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Direct desk</span>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d={open ? "M2.5 7.5 6 4l3.5 3.5" : "M2.5 4.5 6 8l3.5-3.5"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {tray}
        </div>
        {modal}
      </>
    );
  }

  return (
    <>
      <nav
        className="actionbar cwidget"
        data-bar="always"
        aria-label="Direct contact"
        ref={navRef}
        data-open={open ? "true" : "false"}
      >
        {tray}
        <div className="wrap cwidget__bar">
          <button
            ref={triggerRef}
            type="button"
            className="cwidget__fab"
            aria-expanded={open}
            aria-controls={trayId}
            aria-label={open ? "Close contact channels" : "Contact channels: Call, WhatsApp, Email, WeChat"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="cwidget__fab-start">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="cwidget__fab-label">Call · WhatsApp · Email · WeChat</span>
            </span>
            <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d={open ? "M2.5 4.5 6 8l3.5-3.5" : "M2.5 7.5 6 4l3.5 3.5"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      {modal}
    </>
  );
}
