"use client";

import { usePathname } from "next/navigation";
import { AppLink } from "./AppLink";
import { SITE } from "@/data/site";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;

  return (
    <footer className="foot">
      <div className="foot__grid">
        <div className="foot__brand">
          <img
            src="/assets/brand/mm-logo-lockup-on-dark.svg"
            alt="M&M Engineering Consultancy logo"
            width={150}
            height={36}
            loading="lazy"
          />
          <p>
            A contracting, construction, civil engineering and management company, fully registered
            in Namibia and Southern Africa (Reg. {SITE.reg}).
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <AppLink href="/about">About us</AppLink>
            </li>
            <li>
              <AppLink href="/projects">Projects (25)</AppLink>
            </li>
            <li>
              <AppLink href="/clients">Clients &amp; Partners</AppLink>
            </li>
            <li>
              <AppLink href="/safety-policy">Safety &amp; OHS Policy</AppLink>
            </li>
            <li>
              <AppLink href="/profile">Company Profile &amp; Manual</AppLink>
            </li>
            <li>
              <AppLink href="/blog">Journal</AppLink>
            </li>
            <li>
              <AppLink href="/contact">Contact</AppLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li>
              <AppLink href="/services">13 Service Disciplines</AppLink>
            </li>
            <li>
              <AppLink href="/services#equipment">Plant &amp; 10 kV Testing Fleet</AppLink>
            </li>
            <li>
              <AppLink href="/consultancy">Engineering Consultancy</AppLink>
            </li>
            <li>
              <a href={SITE.pdfHref} download>
                Download Profile ({SITE.pdfSizeLabel})
              </a>
            </li>
          </ul>
        </div>
        <div className="foot__contact">
          <h3>Windhoek Offices</h3>
          <p>
            <strong>Head Office:</strong> {SITE.headOfficeShort}
          </p>
          <p>
            <strong>Physical Office:</strong> {SITE.physicalOffice}
          </p>
          <p>
            <strong>Postal:</strong> {SITE.postalAddress}
          </p>
          <p>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener">
              WhatsApp {SITE.whatsappDisplay}
            </a>{" "}
            &middot; <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
          <p>
            <a href={SITE.emailHref}>{SITE.email}</a>
          </p>
        </div>
      </div>
      <div className="foot__legal">
        <p>
          &copy; 2013&ndash;<span data-year>2026</span> {SITE.name}. All rights reserved. Reg.{" "}
          {SITE.reg} &middot; Tax ID {SITE.taxId}.
        </p>
        <p className="credit">
          Website by{" "}
          <a href="https://studio.tangison.com" target="_blank" rel="noopener">
            studio.tangison.com
          </a>{" "}
          &middot; <AppLink href="/safety-policy">Safety Policy</AppLink> &middot;{" "}
          <AppLink href="/privacy">Privacy</AppLink> &middot; <AppLink href="/terms">Terms</AppLink>
        </p>
      </div>
    </footer>
  );
}
