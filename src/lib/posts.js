import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'src', 'posts');

/** @param {string | undefined} label */
export function parsePublishDate(label) {
  if (!label) return 0;
  const normalized = String(label).replace(/(\d+)(st|nd|rd|th)/gi, '$1');
  const ts = Date.parse(normalized);
  return Number.isNaN(ts) ? 0 : ts;
}

/** @param {string} filePath */
function parsePostFile(filePath) {
  const filename = path.basename(filePath, '.md');
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const sub = data.sub ?? data.date ?? '';
  const slug = data.slug ?? filename;

  return {
    title: data.title,
    sub,
    slug,
    coverImage: data.coverImage,
    description: data.description,
    publishTime: parsePublishDate(sub),
    content: content.trim(),
  };
}

function listPostFiles() {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(postsDir, f));
}

export function getAllPostsMeta() {
  const posts = listPostFiles().map(parsePostFile);
  posts.sort((a, b) => b.publishTime - a.publishTime);
  return posts.map(({ title, sub, slug, coverImage, description }) => ({
    title,
    sub,
    slug,
    coverImage,
    description,
  }));
}

/** @param {string | undefined} slug */
export function getPostBySlug(slug) {
  if (!slug) return null;
  for (const filePath of listPostFiles()) {
    const post = parsePostFile(filePath);
    if (post.slug === slug) return post;
  }
  return null;
}
