interface ResponsivePictureProps {
  slug: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  has2400?: boolean;
}

export function ResponsivePicture({
  slug,
  alt,
  width,
  height,
  sizes,
  priority = false,
  has2400 = false,
}: ResponsivePictureProps) {
  const webpSrcSet = has2400
    ? `/assets/${slug}-480.webp 480w, /assets/${slug}-960.webp 960w, /assets/${slug}-1600.webp 1600w, /assets/${slug}-2400.webp 2400w`
    : `/assets/${slug}-480.webp 480w, /assets/${slug}-960.webp 960w, /assets/${slug}-1600.webp 1600w`;

  const jpgSrcSet = has2400
    ? `/assets/${slug}-480.jpg 480w, /assets/${slug}-960.jpg 960w, /assets/${slug}-1600.jpg 1600w, /assets/${slug}-2400.jpg 2400w`
    : `/assets/${slug}-480.jpg 480w, /assets/${slug}-960.jpg 960w, /assets/${slug}-1600.jpg 1600w`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={`/assets/${slug}-960.jpg`}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
      />
    </picture>
  );
}
