import { getAllPostsMeta } from '../../src/lib/posts.js';

export async function onBeforePrerenderStart() {
  const posts = getAllPostsMeta();
  return posts.map((p) => `/${p.slug}`);
}
