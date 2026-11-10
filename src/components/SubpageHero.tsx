import { Picture } from "./Picture";

interface SubpageHeroProps {
  kicker: string;
  title: string;
  lead: string;
  photoSlug: string;
  photoAlt: string;
  children?: React.ReactNode;
}

export function SubpageHero({
  kicker,
  title,
  lead,
  photoSlug,
  photoAlt,
  children,
}: SubpageHeroProps) {
  return (
    <section className="subhero">
      <div className="wrap subhero__grid">
        <div className="subhero__copy" data-enter="">
          <p className="hero__kicker">
            <span className="dot" aria-hidden="true" />
            <span>{kicker}</span>
          </p>
          <h1>{title}</h1>
          <p className="t-lead">{lead}</p>
          {children}
        </div>
        <div className="subhero__media">
          <Picture
            bucket="photos"
            slug={photoSlug}
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            alt={photoAlt}
          />
        </div>
      </div>
    </section>
  );
}
