import { render } from 'vike/abort';
import { getPostBySlug } from '../../src/lib/posts.js';

export function data(pageContext) {
  const slug = pageContext.routeParams.slug;
  const post = getPostBySlug(slug);
  if (!post) {
    throw render(404);
  }
  return { post };
}
