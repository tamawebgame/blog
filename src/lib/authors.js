import fs from 'node:fs';
import path from 'node:path';

const authorsDir = path.join(process.cwd(), 'src', 'authors');

/** @param {string | undefined} id */
export function getAuthorById(id) {
  if (!id) return null;
  const filePath = path.join(authorsDir, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
