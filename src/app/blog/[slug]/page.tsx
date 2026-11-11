import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLink } from "@/components/AppLink";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { BLOG_ARTICLES, getBlogArticle } from "@/data/blog";
import { SITE } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_ARTICLES.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogArticle(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      type: "website",
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: SITE.ogImage }],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogArticle(slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero" style={{ minHeight: "52svh" }}>
        <div className="page-hero__bg">
          <ResponsivePicture
            slug={post.heroSlug}
            alt={post.heroAlt}
            width={post.heroWidth}
            height={post.heroHeight}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">{post.category}</p>
          <h1 className="sc-display sc-display--lg" style={{ maxWidth: "24ch" }}>
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap article" data-sc-in data-sc-stagger="50">
          <p className="article__meta">
            <span>By {SITE.shortName}</span>
            <span>Windhoek, Namibia</span>
            <span>{post.readTime}</span>
          </p>

          <p>{post.lead}</p>

          {post.sections.map((sec, idx) => {
            if (sec.type === "h2") return <h2 key={idx}>{sec.text}</h2>;
            if (sec.type === "p") return <p key={idx}>{sec.text}</p>;
            return (
              <ul key={idx}>
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          })}

          <div className="article-note" style={{ marginTop: "var(--sc-7)" }}>
            <p style={{ margin: 0 }}>
              Working on an upcoming tender or capital build?{" "}
              <a href={SITE.whatsappHref} target="_blank" rel="noopener">
                <strong>WhatsApp the office</strong>
              </a>
              , write to{" "}
              <a href={SITE.emailHref}>
                <strong>{SITE.email}</strong>
              </a>{" "}
              or{" "}
              <a href={SITE.pdfHref} download>
                <strong>download our 2026 Company Profile (PDF)</strong>
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        className="section--tight section"
        style={{ background: "var(--sc-surface)", borderTop: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap sc-stack" data-sc-in>
          <h2 className="sc-display sc-display--md">Keep reading</h2>
          <p className="sc-body">
            <AppLink href="/blog" style={{ color: "var(--mm-red-text)", fontWeight: 600 }}>
              All journal entries
            </AppLink>
          </p>
        </div>
      </section>
    </>
  );
}
