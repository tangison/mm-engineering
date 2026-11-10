import { IMAGE_MANIFEST, type ImageAsset } from "@/data/imageManifest";

type Bucket = "photos" | "projects" | "clients" | "misc";

interface PictureProps {
  bucket: Bucket;
  slug: string;
  alt: string;
  sizes?: string;
  minWidth?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  decorative?: boolean;
  style?: React.CSSProperties;
  "data-peek-for"?: string;
  hidden?: boolean;
}

export function Picture({
  bucket,
  slug,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  minWidth = 0,
  className,
  imgClassName,
  priority = false,
  decorative = false,
  style,
  "data-peek-for": peekFor,
  hidden,
}: PictureProps) {
  const group = IMAGE_MANIFEST[bucket] as unknown as Record<string, ImageAsset>;
  const asset = group[slug];
  if (!asset) return null;

  const filteredWidths = asset.widths.filter((w) => w >= minWidth);
  const widths = filteredWidths.length > 0 ? filteredWidths : asset.widths;
  const hasResponsive = widths.length > 0;
  const singleWidth = widths.length === 1;
  const fallbackWidth = hasResponsive ? widths[Math.min(1, widths.length - 1)] : null;
  const fallbackSrc = hasResponsive
    ? `${asset.base}-${fallbackWidth}.${asset.ext}`
    : `${asset.base}.${asset.ext}`;

  const avifSet = !hasResponsive
    ? undefined
    : singleWidth
      ? `${asset.base}-${widths[0]}.avif`
      : widths.map((w) => `${asset.base}-${w}.avif ${w}w`).join(", ");
  const webpSet = !hasResponsive
    ? `${asset.base}.webp`
    : singleWidth
      ? `${asset.base}-${widths[0]}.webp`
      : widths.map((w) => `${asset.base}-${w}.webp ${w}w`).join(", ");
  const fallbackSet = !hasResponsive || singleWidth
    ? undefined
    : widths.map((w) => `${asset.base}-${w}.${asset.ext} ${w}w`).join(", ");

  const effectiveSizes = !hasResponsive || singleWidth ? undefined : sizes;

  return (
    <picture className={className} data-peek-for={peekFor} hidden={hidden}>
      {avifSet && <source type="image/avif" srcSet={avifSet} sizes={effectiveSizes} />}
      <source type="image/webp" srcSet={webpSet} sizes={effectiveSizes} />
      <img
        src={fallbackSrc}
        srcSet={fallbackSet}
        sizes={fallbackSet ? effectiveSizes : undefined}
        alt={decorative ? "" : alt}
        aria-hidden={decorative ? true : undefined}
        width={asset.width}
        height={asset.height}
        className={imgClassName}
        style={style}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}
