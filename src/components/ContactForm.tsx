"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "./Icons";
import { SITE } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = name.trim();
    const emailVal = email.trim();
    const orgVal = company.trim();
    const phoneVal = phone.trim();
    const msgVal = message.trim();

    if (!nameVal || !emailVal || !emailVal.includes("@")) {
      setError(true);
      setDone(false);
      return;
    }
    setError(false);

    const subject = `Website enquiry: ${service || "General"} - ${orgVal || nameVal}`;
    const bodyLines = [
      `Name: ${nameVal}`,
      `Company / Employer: ${orgVal || "N/A"}`,
      `Email: ${emailVal}`,
      phoneVal ? `Phone: ${phoneVal}` : null,
      `Service: ${service}`,
      "",
      msgVal,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    setDone(true);
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
  };

  return (
    <form className="form" id="contact-form" data-contact-form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="service">What do you need?</label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>General enquiry</option>
          <option>Electrical engineering &amp; HV/LV</option>
          <option>Energy services (Solar / Hydrogen)</option>
          <option>Telecommunications &amp; IT</option>
          <option>Civil, roads &amp; construction</option>
          <option>Mechanical, HVAC &amp; mining</option>
          <option>Railway infrastructure</option>
          <option>Engineering consultancy &amp; project management</option>
          <option>Tender pre-qualification &amp; OHS compliance</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">The brief</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Where is the site, what is the scope, and when does it need to move?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="btn btn--accent" type="submit">
        Compose email <ArrowRightIcon />
      </button>
      <p className={`form__error${error ? " is-visible" : ""}`} role="alert">
        Please enter your name and a valid email address before opening your email client.
      </p>
      <p className="form__note">
        No site-tracker bloat — clicking Compose opens your mail app pre-filled with your brief.
      </p>
      <p className="form__done" hidden={!done}>
        Your email client should be open now. If not, write to{" "}
        <a href={SITE.emailHref}>{SITE.email}</a> directly.
      </p>
    </form>
  );
}
