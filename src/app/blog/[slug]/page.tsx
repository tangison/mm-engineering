import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { notFound } from "next/navigation";
import { BLOG_ARTICLES } from "@/data/blog";
import { COMPANY } from "@/data/company";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((p) => p.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((p) => p.slug === slug);
  if (!article) notFound();

  const related = BLOG_ARTICLES.filter((p) => p.slug !== article.slug);

  return (
    <>
      <main id="main" className="page-flow">
        <section className="subhero">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="hero__kicker">
                <span className="dot" aria-hidden="true" />
                <span>
                  {article.topic} · {article.readTime}
                </span>
              </p>
              <h1>{article.title}</h1>
              <p className="t-small muted">By {COMPANY.shortName} · Windhoek, Namibia</p>
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap grid">
            <article className="span-8">
              <div className="article-media">
                <Picture
                  bucket="photos"
                  slug={article.photo}
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  alt={article.alt}
                />
              </div>

              <div className="article-body">
                <p className="t-lead">{article.lead}</p>
                {article.sections.map((sec) => (
                  <section key={sec.heading}>
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs?.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                    {sec.bullets && (
                      <ul>
                        {sec.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>

            <aside className="span-4 stack-5">
              <div className="card">
                <h3>Tender or project enquiry</h3>
                <p>
                  Speak directly with our Windhoek engineering desk or open the 2026 Company Profile
                  and OHS Policy Manual.
                </p>
                <div className="btn-row" style={{ marginTop: "var(--s-2)" }}>
                  <Link className="btn btn--primary btn--sm" href="/contact">
                    Request a quote
                  </Link>
                  <a className="btn btn--secondary btn--sm" href={COMPANY.profilePdfHref} download>
                    Download PDF ({COMPANY.profilePdfSize})
                  </a>
                </div>
              </div>

              <div className="stack-3">
                <h3>More from the site office</h3>
                <ul className="rows">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link className="rows__name" href={`/blog/${r.slug}`}>
                        {r.title}
                      </Link>
                      <span className="rows__value">{r.readTime}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
