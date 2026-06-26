// src/lib/posts.js

import fm from "front-matter";

const markdownFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export async function getAllPosts() {
  const posts = await Promise.all(
    Object.entries(markdownFiles).map(async ([path, resolver]) => {
      const raw = await resolver();

      const { attributes, body } = fm(raw);

      const slug = path.split("/").pop().replace(".md", "");

      return {
        slug,
        content: body,
        ...attributes,
      };
    })
  );

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export async function getPostBySlug(slug) {
  const path = `../posts/${slug}.md`;

  const resolver = markdownFiles[path];

  if (!resolver) return null;

  const raw = await resolver();

  const { attributes, body } = fm(raw);

  return {
    slug,
    content: body,
    ...attributes,
  };
}
