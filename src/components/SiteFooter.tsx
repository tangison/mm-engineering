import { AppLink as Link } from "./AppLink";
import { COMPANY } from "@/data/company";
import { Picture } from "./Picture";

export function SiteFooter({ showClosingBand = true }: { showClosingBand?: boolean }) {
  const columns = (
    <>
      <div className="grid">
        <div className="span-5">
          <p className="footer__lede">
            Registered Namibian civil, electrical and consulting engineering practice.
          </p>
          <p className="t-small muted" style={{ marginTop: "var(--s-4)" }}>
            {COMPANY.headOffice.street}, {COMPANY.headOffice.district}
            <br />
            {COMPANY.operationsOffice.street}, {COMPANY.operationsOffice.district}
            <br />
            Tel {COMPANY.phone} · WhatsApp {COMPANY.whatsapp}
            <br />
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
          </p>
        </div>

        <div className="footer__col span-2 start-7">
          <h3>Engineering</h3>
          <ul>
            <li>
              <Link href="/services">13 Services &amp; Plant</Link>
            </li>
            <li>
              <Link href="/consultancy">Consultancy Firm</Link>
            </li>
            <li>
              <Link href="/projects">25 Contracts</Link>
            </li>
            <li>
              <Link href="/safety-policy">Safety Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col span-2">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About M&amp;M</Link>
            </li>
            <li>
              <Link href="/clients">16 Client Partners</Link>
            </li>
            <li>
              <Link href="/profile">2026 Profile Web</Link>
            </li>
            <li>
              <Link href="/blog">Site Journal</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col span-2">
          <h3>Tender Desk</h3>
          <ul>
            <li>
              <Link href="/contact">Contact Windhoek</Link>
            </li>
            <li>
              <a href={COMPANY.profilePdfHref} download>
                Profile PDF ({COMPANY.profilePdfSize})
              </a>
            </li>
            <li>
              <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp Office
              </a>
            </li>
            <li>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__legal">
        <span>
          &copy; 2026 {COMPANY.name} · Reg. {COMPANY.registration}
        </span>
        <div className="btn-row" style={{ gap: "var(--s-5)" }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={COMPANY.credit.href} target="_blank" rel="noopener noreferrer">
            {COMPANY.credit.label}
          </a>
        </div>
      </div>
    </>
  );

  if (!showClosingBand) {
    return (
      <footer className="footer">
        <div className="wrap">{columns}</div>
      </footer>
    );
  }

  return (
    <footer className="footer closing">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2>Start a Namibia engineering tender brief</h2>
              <p>
                Head office in {COMPANY.headOffice.district} and operations in{" "}
                {COMPANY.operationsOffice.district}. Open Monday to Friday, 08:00 to 17:00 CAT, with
                24/7 dispatch for active contracts.
              </p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">
                Request a quote
              </Link>
              <a className="btn btn--secondary" href={COMPANY.profilePdfHref} download>
                Download profile ({COMPANY.profilePdfSize} PDF)
              </a>
            </div>
          </div>
          <div className="close__media">
            <Picture
              bucket="photos"
              slug="office"
              minWidth={480}
              sizes="(min-width: 1024px) 92vw, 100vw"
              alt="M&M Engineering Windhoek engineering planning desk"
            />
          </div>
        </div>

        <div className="closing__links">{columns}</div>
      </div>
    </footer>
  );
}
