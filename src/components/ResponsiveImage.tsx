import { asset } from '../lib/assets';
import { MEDIA_MOBILE, MEDIA_TABLET } from '../lib/breakpoints';

export type ImageSources = {
  /** Paths relative to /assets */
  desktop: string;
  tablet?: string;
  mobile?: string;
};

type ResponsiveImageProps = ImageSources & {
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
};

/**
 * <picture> that swaps between the desktop, tablet and mobile exports.
 * Sources are listed smallest breakpoint first so the first match wins.
 */
export function ResponsiveImage({
  desktop,
  tablet,
  mobile,
  alt,
  width,
  height,
  className = 'cover-image',
  eager = false,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      {mobile && <source media={MEDIA_MOBILE} srcSet={asset(mobile)} />}
      {tablet && <source media={MEDIA_TABLET} srcSet={asset(tablet)} />}
      <img
        src={asset(desktop)}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
