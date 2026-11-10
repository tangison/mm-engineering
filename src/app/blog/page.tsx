import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { BLOG_ARTICLES } from "@/data/blog";
import { SubpageHero } from "@/components/SubpageHero";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Practical engineering writing on electrical instrumentation, EPIC procurement, consulting engineering and construction ethics across Namibia.",
};

export default function BlogIndexPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker="Journal · Windhoek"
          title="Notes from the site office"
          lead="Practical writing on how M&M Engineering builds, procures, tests and consults in Namibia."
          photoSlug="consult"
          photoAlt="Engineers coordinating drawings and project milestones in Windhoek"
        />

        <section className="section ground-surface">
          <div className="wrap">
            <div className="grid">
              {BLOG_ARTICLES.map((post) => (
                <Link key={post.slug} className="tile span-6" href={`/blog/${post.slug}`}>
                  <div className="tile__media tile--wide">
                    <Picture
                      bucket="photos"
                      slug={post.photo}
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      alt={post.alt}
                    />
                  </div>
                  <div className="tile__head">
                    <h3>{post.title}</h3>
                    <span className="tile__price">{post.readTime}</span>
                  </div>
                  <p className="tile__facts">{post.topic}</p>
                  <p>{post.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
