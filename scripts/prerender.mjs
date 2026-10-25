import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getBasePath, getSiteUrl } from '../site.config.mjs';

const distDir = path.resolve('dist');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const base = getBasePath();
const siteUrl = getSiteUrl();

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function absoluteUrl(localPath) {
  return siteUrl ? `${siteUrl}${localPath === '/' ? '/' : localPath}` : null;
}

const vite = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const { seoPages } = await vite.ssrLoadModule('/src/data/seo.js');

  for (const page of seoPages) {
    const routeLocation = `${base === '/' ? '' : base.slice(0, -1)}${page.path}`;
    const appHtml = renderToString(
      React.createElement(MemoryRouter, { basename: base, initialEntries: [routeLocation] }, React.createElement(App))
    );

    // Swap Vite's default head for independent SEO metadata on each generated URL.
    const canonical = absoluteUrl(page.path);
    const title = escapeHtml(page.title);
    const description = escapeHtml(page.description);
    const metadata = [
      `<title>${title}</title>`,
      `<meta name="description" content="${description}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="Jake Hill Portfolio" />',
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      '<meta name="twitter:card" content="summary" />',
      ...(canonical ? [`<link rel="canonical" href="${escapeHtml(canonical)}" />`, `<meta property="og:url" content="${escapeHtml(canonical)}" />`] : []),
    ].join('\n    ');
    let html = template
      .replace(/<title>[^<]*<\/title>/, '')
      .replace(/<meta name="description"[^>]*\/>/, '')
      .replace('</head>', `    ${metadata}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    if (page.path === '/') {
      const identity = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jake Hill',
        jobTitle: 'Software Developer',
        url: canonical ?? undefined,
        sameAs: ['https://github.com/jacob-hill90', 'https://www.linkedin.com/in/jacob-hill90/'],
      };
      html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(identity).replace(/</g, '\\u003c')}</script>\n  </head>`);
    }

    const outputDir = path.join(distDir, page.path.replace(/^\//, ''));
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, 'index.html'), html);
    console.log(`Generated ${page.path}`);
  }

  if (siteUrl) {
    const routes = seoPages.map((p) => `  <url><loc>${escapeHtml(absoluteUrl(p.path))}</loc></url>`).join('\n');
    await writeFile(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes}\n</urlset>\n`);
    await writeFile(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
    console.log(`Generated sitemap.xml for ${siteUrl}`);
  } else {
    console.log('No SITE_URL configured: skipped canonical URLs and sitemap.xml. GitHub Actions will infer the Pages URL.');
  }
} finally {
  await vite.close();
}
