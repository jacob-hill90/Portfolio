# Jake Hill – Portfolio Refresh

A React + Vite portfolio adapted from your original site, with **static HTML prerendering** for every page, SEO metadata, and GitHub Pages deployment via GitHub Actions.

## What's changed

- Real, directly addressable pages: `/`, `/about/`, `/projects/`, `/contact/`, and `/projects/<slug>/`.
- Individual project writeups, generated from `src/data/projects.js`.
- Only FishTories and Joe Joe's Tailgate are shown by default; remove or add either in the data file.
- Removed the résumé download and PDF import entirely.
- Replaced the former `/send` contact form (which required a backend) with working social links.
- Removed missing image imports; decorative visuals are generated with CSS so the source package runs without the image assets that weren't part of the upload.
- SEO-ready page titles, meta descriptions, Open Graph tags, canonical URLs, JSON-LD `Person` data, and generated sitemap.
- GitHub Pages workflow that builds and publishes `dist` when you push to `main`.

## Requirements

- Node.js 20+ (22 recommended)
- npm

## Running locally

```bash
npm install
npm run dev
```

Open the address Vite prints, normally `http://localhost:5173`.

## Production build and preview

```bash
npm run build
npm run check:routes
npm run preview
```

**Important:** `npm run build` produces a normal Vite build *and* renders each route into `dist/<route>/index.html`. This solves the deep-link 404 problem on GitHub Pages and gives search engines actual HTML content to crawl. In development, Vite handles navigation as usual.

If you want to locally test the final site with the same repo path as GitHub Pages, run:

```bash
VITE_BASE_PATH=/your-repo-name/ SITE_URL=https://yourname.github.io/your-repo-name npm run build
VITE_BASE_PATH=/your-repo-name/ npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository for the portfolio. Copy this project's contents into it, including `.github/workflows/deploy.yml`. Running `npm install` locally will also generate a `package-lock.json`, which you can commit for reproducible installs.
2. Commit and push to the `main` branch.
3. On GitHub, visit **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow builds on each push to `main`, tests the output, and deploys the `dist` directory.
5. Your URL will usually be `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

### How the base URL is handled

`site.config.mjs` automatically determines the correct base path from `GITHUB_REPOSITORY` in GitHub Actions:

- Repository named `YOUR_USERNAME.github.io` → `/`.
- Other repository (example `portfolio`) → `/portfolio/`.
- If your site uses a custom domain, set **Settings → Secrets and variables → Actions → Variables**:
  - `VITE_BASE_PATH` = `/`
  - `SITE_URL` = `https://www.your-domain.com` (no trailing slash)

The `SITE_URL` variable can also explicitly override the canonical public URL in any deployment. A `CNAME` DNS configuration is still required to use a custom domain with GitHub Pages; setting these variables alone does not attach a domain.

### SEO notes

When running in GitHub Actions, the script derives the site's public URL from the repository, or uses your `SITE_URL` override. It generates:

- a distinct, pre-rendered `index.html` with `<title>`, meta description, Open Graph tags, and canonical URL for each route;
- `dist/sitemap.xml`;
- `dist/robots.txt`.

For best results, connect the published site to Google Search Console and submit your sitemap URL after deployment. A project hosted at `/REPOSITORY/` has some SEO limitations compared with a root-domain site. The `robots.txt` file in a repo subdirectory is *not* the domain-root robots policy; sitemap submission remains useful.

## Adding or removing a project

Edit `src/data/projects.js`. Each project object specifies its unique slug, title, description, technologies, highlights, and any live/demo links.

- To remove an outdated project, delete its object from the array.
- To add a project, copy one object, assign a new `slug`, and update its contents.
- The card and detail route are generated automatically, and the next build creates a new real HTML page and sitemap entry.
- `featured: true` controls whether the project is displayed on the homepage.

The first two projects are a **draft selection** based on your uploaded homepage. Their descriptions should be edited to match the work you want to represent.

## Updating your details

- Home intro: `src/pages/Home.jsx`
- About/experience: `src/pages/About.jsx`
- Contact links: `src/pages/Contact.jsx` and `src/components/Footer.jsx`
- SEO titles and descriptions: `src/data/seo.js`
- Design: `src/styles.css`
- Routes: `src/App.jsx`
- Branding/favicon: `public/favicon.svg`

The site uses Google Fonts for presentation, falling back to system fonts if they cannot load. No external form service or backend is required.

## Adding a new top-level page

1. Create a page component in `src/pages/`.
2. Register it in `src/App.jsx`.
3. Add its path and metadata to `src/data/seo.js` so the build writes its HTML and includes it in the sitemap.
4. Add a navigation link if desired.

## Deployment troubleshooting

- **Install fails in GitHub Actions:** check Node/npm errors in the Actions log. Run `npm install` locally, then commit a `package-lock.json` to lock dependency versions.
- **Blank deployed page or missing CSS/JS:** check your repository name and calculated Vite `base`. Set `VITE_BASE_PATH` if your actual hosting path differs.
- **Direct project URLs show 404:** confirm `npm run build` ran all the way through prerendering, and `dist/projects/<slug>/index.html` exists.
- **Deploy action doesn't run:** check the branch is named `main` and Pages has **GitHub Actions** selected.
- **Changing canonical domain:** update `SITE_URL` and redeploy.
