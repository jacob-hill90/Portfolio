import fs from 'node:fs';
import { projects } from '../src/data/projects.js';
const routes = ['/', '/about/', '/projects/', '/contact/', ...projects.map((p) => `/projects/${p.slug}/`)];
for (const route of routes) {
  const file = `dist${route}index.html`;
  if (!fs.existsSync(file)) throw Error(`Missing ${file}`);
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('id="root"') || !html.includes('og:title')) throw Error(`Missing HTML/metadata: ${route}`);
  console.log(`OK ${route}`);
}
