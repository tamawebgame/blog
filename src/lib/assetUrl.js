export function assetUrl(relativePath) {
  if (!relativePath) return import.meta.env.BASE_URL || '/';
  if (
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://')
  ) {
    return relativePath;
  }
  const base = import.meta.env.BASE_URL || '/';
  const normalized = relativePath.replace(/^\/+/, '');
  return `${base}${normalized}`.replace(/([^:]\/)\/+/g, '$1');
}
