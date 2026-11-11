import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon } from "@/components/Icons";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found | M&M Engineering",
  description: "The page you requested could not be found on mmengineeringcc.com.",
  alternates: { canonical: `${SITE.url}/404` },
};

export default function NotFound() {
  return (
    <div className="nf">
      <div className="sc-stack" data-sc-in data-sc-stagger="70" style={{ alignItems: "center" }}>
        <p className="code">404</p>
        <h1 className="sc-display sc-display--md">Off the set-out line.</h1>
        <p className="sc-body">This page does not exist. The rest of the site does.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <AppLink className="btn btn--accent" href="/">
            Back to the homepage <ArrowRightIcon />
          </AppLink>
          <AppLink className="btn btn--ghost" href="/projects">
            View 25 projects
          </AppLink>
        </div>
      </div>
    </div>
  );
}
