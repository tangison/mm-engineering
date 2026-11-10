import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { SubpageHero } from "@/components/SubpageHero";
import { ContactDesk } from "@/components/ContactDesk";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact M&M Engineering & Consultancy CC in Kleine Kuppe and Windhoek North, Windhoek. Telephone +264 61 234 349, WhatsApp +264 81 3275 403, info@mmengineeringcc.com.",
};

export default function ContactPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker="Windhoek Offices · 24/7 Support"
          title="Let us discuss your project scope"
          lead="Available from our Kleine Kuppe head office and Windhoek North operations desk across Namibia and Southern Africa."
          photoSlug="office"
          photoAlt="M&M Engineering project planning and dispatch desk in Windhoek"
        >
          <p className="t-small muted">
            Registration {COMPANY.registration} · Tax ID {COMPANY.taxId}
          </p>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap">
            <ContactDesk />
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
