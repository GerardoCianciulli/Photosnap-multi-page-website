import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// GitHub Pages serves the site from https://<user>.github.io/<repo>/,
// so every asset URL is prefixed with the repository ("environment") path.
const base = process.env.BASE_PATH ?? '/Photosnap-multi-page-website/';

const root = import.meta.dirname;

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        stories: resolve(root, 'stories.html'),
        features: resolve(root, 'features.html'),
        pricing: resolve(root, 'pricing.html'),
      },
    },
  },
});
