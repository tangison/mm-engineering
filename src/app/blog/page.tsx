import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { BLOG_ARTICLES } from "@/data/blog";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Journal | M&M Engineering",
  description: "Practical engineering, procurement, safety and consulting articles written in Windhoek.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Journal | M&M Engineering",
    description:
      "Practical engineering, procurement, safety and consulting articles written in Windhoek.",
    type: "website",
    url: `${SITE.url}/blog`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "48svh" }}>
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="macro-hat"
            alt="White hard hat and spirit level on a construction plan"
            width={1152}
            height={864}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Journal</p>
          <h1 className="sc-display sc-display--xl">Notes from the site office.</h1>
          <p className="sc-body lede">
            Practical writing on how M&amp;M Engineering builds, procures, tests and consults in
            Namibia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="feature-grid" data-sc-in data-sc-stagger="80">
            {BLOG_ARTICLES.map((post) => (
              <AppLink
                key={post.slug}
                className={`tile tile--media ${post.tileClass}`}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ResponsivePicture
                  slug={post.heroSlug}
                  alt={post.heroAlt}
                  width={post.heroWidth}
                  height={post.heroHeight}
                  sizes="(min-width: 860px) 50vw, 100vw"
                />
                <div className="tile__body">
                  <p className="idx">
                    {post.category} &middot; {post.readTime}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.cardSummary}</p>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
