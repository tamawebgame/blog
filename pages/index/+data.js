import { getAllPostsMeta } from '../../src/lib/posts.js';

export function data() {
  return { posts: getAllPostsMeta() };
}
