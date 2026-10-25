import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getBasePath } from './site.config.mjs';

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
});
