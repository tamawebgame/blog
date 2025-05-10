import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/vite
export default defineConfig({
  plugins: [react()],
  base: '/blog/',
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'move-json',
          buildEnd() {
            const srcPath = path.resolve(__dirname, 'assets/json/posts.json');
            const destPath = path.resolve(__dirname, 'public/posts.json');
            fs.copyFileSync(srcPath, destPath);
          },
        },
      ],
    },
  },
})
