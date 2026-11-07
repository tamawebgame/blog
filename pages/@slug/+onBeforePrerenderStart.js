import { getAllPostsMeta } from '../../src/lib/posts.js';

export async function onBeforePrerenderStart() {
  const posts = getAllPostsMeta();
  // Paths are relative to `base` (/blog/ on GitHub Pages); do not prefix base again.
  return posts.map((p) => `/${p.slug}`);
}
