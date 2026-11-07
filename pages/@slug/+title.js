export default function title(pageContext) {
  return pageContext.data?.post
    ? `${pageContext.data.post.title} | Tamaweb Blog`
    : 'Tamaweb | Blog';
}
