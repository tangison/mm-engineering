import { AppLink as Link } from "@/components/AppLink";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <main id="main" className="page-flow">
        <section className="subhero">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="hero__kicker">
                <span className="dot" aria-hidden="true" />
                <span>404 · Page Not Found</span>
              </p>
              <h1>That route could not be found</h1>
              <p className="t-lead">
                The page you requested may have moved. Browse our engineering services, 25 verified
                contracts, or return to the Windhoek front desk.
              </p>
              <div className="btn-row" style={{ marginTop: "var(--s-4)" }}>
                <Link className="btn btn--primary" href="/">
                  Return home
                </Link>
                <Link className="btn btn--secondary" href="/projects">
                  View 25 projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
