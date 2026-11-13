/**
 * Every image in /assets is resolved through Vite so it is fingerprinted and
 * served from the correct base path (e.g. GitHub Pages' /<repo>/ prefix).
 * Paths are written relative to /assets, e.g. `home/desktop/create-and-share.jpg`.
 */
const files = import.meta.glob<string>('../../assets/**/*.{jpg,png,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function asset(path: string): string {
  const url = files[`../../assets/${path}`];
  if (!url) {
    throw new Error(`Missing asset: assets/${path}`);
  }
  return url;
}
