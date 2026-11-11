import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmailIcon, PhoneIcon, WeChatIcon, WhatsAppIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | M&M Engineering",
  description:
    "Contact M&M Engineering & Consultancy CC in Kleine Kuppe and Windhoek North via WhatsApp, WeChat, email or telephone.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact | M&M Engineering",
    description:
      "Contact M&M Engineering & Consultancy CC in Kleine Kuppe and Windhoek North via WhatsApp, WeChat, email or telephone.",
    type: "website",
    url: `${SITE.url}/contact`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="windhoek"
            alt="Tower crane over a building under construction against a blue sky"
            width={1600}
            height={1200}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Contact</p>
          <h1 className="sc-display sc-display--xl">
            Let&apos;s talk about what needs to be built.
          </h1>
          <p className="sc-body lede">
            24/7 availability from our Windhoek head office and operations desk across Namibia and
            Southern Africa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Channels</h2>
            <div className="channel-list">
              <a
                className="channel channel--wa"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                <span>
                  <b>WhatsApp</b>
                  <span>{SITE.whatsappDisplay}</span>
                </span>
              </a>
              <button
                className="channel channel--wx"
                type="button"
                data-wx-open
                style={{ textAlign: "left", cursor: "pointer" }}
              >
                <WeChatIcon />
                <span>
                  <b>WeChat</b>
                  <span>Linked to {SITE.whatsappDisplay}, scan or add by phone</span>
                </span>
              </button>
              <a className="channel" href={SITE.emailHref}>
                <EmailIcon />
                <span>
                  <b>Email</b>
                  <span>{SITE.email}</span>
                </span>
              </a>
              <a className="channel" href={SITE.phoneHref}>
                <PhoneIcon />
                <span>
                  <b>Telephone</b>
                  <span>{SITE.phone}</span>
                </span>
              </a>
            </div>

            <h2 className="sc-display sc-display--md" style={{ marginTop: "var(--sc-7)" }}>
              Windhoek Offices
            </h2>
            <div className="offices-grid">
              <div className="office-card">
                <h3>Head Office (Kleine Kuppe)</h3>
                <p>
                  Erf 454, Rietfontein Street
                  <br />
                  Kleine Kuppe, Windhoek
                  <br />
                  {SITE.postalAddress}
                </p>
              </div>
              <div className="office-card">
                <h3>Physical Office (Windhoek North)</h3>
                <p>
                  23 John Simms Street
                  <br />
                  Windhoek North, Windhoek
                  <br />
                  Reg. {SITE.reg} &middot; Tax {SITE.taxId}
                </p>
              </div>
            </div>

            <div className="map-frame" style={{ marginTop: "var(--sc-4)" }}>
              <iframe
                title="Map of Windhoek, Namibia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=17.0400%2C-22.6150%2C17.1300%2C-22.5150&amp;layer=mapnik"
                loading="lazy"
              />
            </div>
            <p className="cap">
              Windhoek, Khomas Region, Namibia. Serving all 9+ Namibian regions and SADC corridors.
            </p>
          </div>

          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Send a brief</h2>
            <p className="sc-body">
              Fill this in and your email client will open with the message ready to send to{" "}
              <strong>{SITE.email}</strong>.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
