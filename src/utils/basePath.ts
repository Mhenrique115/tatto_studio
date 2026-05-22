export function withBase(path = '/') {
  const base = '/tatto_studio';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
