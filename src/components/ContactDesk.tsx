"use client";

import { Fragment, useEffect, useRef, useState, type FormEvent } from "react";
import { COMPANY } from "@/data/company";
import { Picture } from "./Picture";

const SERVICES_OPTIONS = [
  "General enquiry",
  "Electrical engineering & HV/LV",
  "Energy services (Solar / Hydrogen)",
  "Telecommunications & IT",
  "Civil, roads & construction",
  "Mechanical, HVAC & mining",
  "Railway infrastructure",
  "Engineering consultancy & project management",
  "Tender pre-qualification & OHS compliance",
];

export function ContactDesk() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES_OPTIONS[0]);
  const [brief, setBrief] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; brief?: string }>({});
  const [status, setStatus] = useState("");
  const [wxOpen, setWxOpen] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const briefRef = useRef<HTMLTextAreaElement>(null);
  const wxTriggerRef = useRef<HTMLButtonElement>(null);
  const wxCloseRef = useRef<HTMLButtonElement>(null);
  const wxWasOpen = useRef(false);

  useEffect(() => {
    if (wxOpen) {
      wxWasOpen.current = true;
      const frame = requestAnimationFrame(() => wxCloseRef.current?.focus());
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setWxOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => {
        cancelAnimationFrame(frame);
        document.removeEventListener("keydown", onKey);
      };
    } else if (wxWasOpen.current) {
      wxWasOpen.current = false;
      wxTriggerRef.current?.focus();
    }
  }, [wxOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; email?: string; brief?: string } = {};
    if (!name.trim()) nextErrors.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address so we can reply.";
    }
    if (!brief.trim()) nextErrors.brief = "Summarise the scope, location or tender deadline.";

    setErrors(nextErrors);
    const errCount = Object.keys(nextErrors).length;
    if (errCount > 0) {
      setStatus(errCount === 1 ? "1 field to check above." : `${errCount} fields to check above.`);
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.brief) briefRef.current?.focus();
      return;
    }

    const subject = encodeURIComponent(`[Website Enquiry] ${service} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\nDiscipline: ${service}\n\nBrief:\n${brief}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setStatus(
      `Your email app has opened a draft addressed to ${COMPANY.email}. You can also call ${COMPANY.phone} or WhatsApp ${COMPANY.whatsapp}.`
    );
  };

  return (
    <>
      <div className="grid">
        <div className="span-6 stack-5">
          <h2>Send an engineering or tender brief</h2>
          <p>
            Fill in the details below and your mail app opens pre-addressed to{" "}
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>, or open Direct desk in the bar to call,
            message on WhatsApp, or scan our WeChat QR.
          </p>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <label className="field">
              <span>Name</span>
              <input
                ref={nameRef}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="e.g. Petrus Shikongo…"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "err-name" : undefined}
                required
              />
              {errors.name && (
                <span id="err-name" className="field__error">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="field">
              <span>Company or institution</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="e.g. Oshakati Town Council…"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                ref={emailRef}
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                placeholder="name@organisation.com.na…"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "err-email" : undefined}
                required
              />
              {errors.email && (
                <span id="err-email" className="field__error">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="field">
              <span>Phone (optional)</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+264 61 000 000…"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <label className="field field--full">
              <span>What discipline do you need?</span>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="field field--full">
              <span>Project brief</span>
              <textarea
                ref={briefRef}
                name="brief"
                value={brief}
                onChange={(e) => {
                  setBrief(e.target.value);
                  if (errors.brief) setErrors((prev) => ({ ...prev, brief: undefined }));
                }}
                aria-invalid={errors.brief ? "true" : undefined}
                aria-describedby={errors.brief ? "err-brief" : undefined}
                placeholder="Outline site town, scope, approximate timeline or tender reference…"
                required
              />
              {errors.brief && (
                <span id="err-brief" className="field__error">
                  {errors.brief}
                </span>
              )}
            </label>

            <div className="btn-row">
              <button className="btn btn--primary" type="submit">
                Compose email to Windhoek desk
              </button>
              <a
                className="btn btn--secondary"
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {COMPANY.whatsapp}
              </a>
            </div>

            {status && (
              <p className="form__status" role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="span-5 start-8 stack-4">
          <div className="card">
            <h3>Direct contact channels</h3>
            <ul className="rows">
              <li>
                <span className="rows__name">Telephone</span>
                <span className="rows__value">
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </span>
              </li>
              <li>
                <span className="rows__name">WhatsApp</span>
                <span className="rows__value">
                  <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer">
                    {COMPANY.whatsapp}
                  </a>
                </span>
              </li>
              <li>
                <span className="rows__name">Email</span>
                <span className="rows__value">
                  <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                </span>
              </li>
              <li>
                <span className="rows__name">WeChat</span>
                <span className="rows__value">
                  <button
                    ref={wxTriggerRef}
                    type="button"
                    className="btn btn--secondary btn--sm"
                    onClick={() => setWxOpen(true)}
                  >
                    Show WeChat QR
                  </button>
                </span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Windhoek offices &amp; hours</h3>
            <p>
              <strong>{COMPANY.headOffice.label}</strong>
              <br />
              {COMPANY.headOffice.street}, {COMPANY.headOffice.district}
              <br />
              {COMPANY.headOffice.postal}
            </p>
            <p>
              <strong>{COMPANY.operationsOffice.label}</strong>
              <br />
              {COMPANY.operationsOffice.street}, {COMPANY.operationsOffice.district}
            </p>
            <dl className="hours" data-tz="Africa/Windhoek" style={{ marginTop: "var(--s-2)" }}>
              {COMPANY.officeHours.map((h) => (
                <Fragment key={h.days}>
                  <dt data-days={h.dataDays}>{h.days}</dt>
                  <dd>{h.time}</dd>
                </Fragment>
              ))}
            </dl>
            <p className="t-small">
              <a
                className="link"
                href="https://www.openstreetmap.org/search?query=Kleine%20Kuppe%20Windhoek%20Namibia"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Kleine Kuppe &amp; Windhoek on map
              </a>
            </p>
          </div>
        </div>
      </div>

      {wxOpen && (
        <div
          className="wx-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wx-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setWxOpen(false);
          }}
        >
          <div className="wx-dialog__card">
            <h3 id="wx-title">WeChat</h3>
            <Picture
              bucket="misc"
              slug="wechat-qr"
              sizes="250px"
              alt="WeChat QR linked to M&M Engineering +264 81 3275 403"
            />
            <p className="t-small">
              Linked to <strong>{COMPANY.whatsapp}</strong>. Scan the QR code or search the phone
              number in WeChat using Add by phone.
            </p>
            <button
              ref={wxCloseRef}
              type="button"
              className="btn btn--primary"
              onClick={() => setWxOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
