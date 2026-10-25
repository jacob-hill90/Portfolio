
/*
 * GitHub Pages configuration
 *
 * Repository site:
 * https://USERNAME.github.io/REPO/
 *
 * Custom domain:
 * https://yourdomain.com/
 *
 * For a custom domain, configure:
 * VITE_BASE_PATH=/
 * SITE_URL=https://yourdomain.com
 */

export function getBasePath() {
  const override = process.env.VITE_BASE_PATH;

  if (override) {
    const cleanPath = override.replace(/^\/+|\/+$/g, "");
    return cleanPath ? `/${cleanPath}/` : "/";
  }

  const githubRepo = process.env.GITHUB_REPOSITORY;

  if (githubRepo) {
    const [owner, repo] = githubRepo.split("/");

    if (owner && repo) {
      if (repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
        return "/";
      }

      return `/${repo}/`;
    }
  }

  return "/";
}

export function getSiteUrl() {
  const override = process.env.SITE_URL;

  if (override) {
    return override.replace(/\/+$/, "");
  }

  const githubRepo = process.env.GITHUB_REPOSITORY;

  if (githubRepo) {
    const [owner, repo] = githubRepo.split("/");

    if (owner && repo) {
      const basePath = getBasePath().replace(/\/$/, "");

      return `https://${owner.toLowerCase()}.github.io${basePath}`;
    }
  }

  return null;
}
