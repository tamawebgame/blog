import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { getAuthorById } from './authors.js';

const postsDir = path.join(process.cwd(), 'src', 'posts');

/** @param {unknown} value */
function normalizeTags(value) {
  if (value == null) return ['Game Updates'];
  const list = Array.isArray(value) ? value : [value];
  const tags = list.map((tag) => String(tag).trim()).filter(Boolean);
  return tags.length ? tags : ['Game Updates'];
}

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
  const authorId = data.author ?? 'samandev';
  const author = getAuthorById(authorId);
  const tags = normalizeTags(data.tags);

  return {
    title: data.title,
    sub,
    slug,
    coverImage: data.coverImage,
    description: data.description,
    tags,
    authorId,
    author,
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
