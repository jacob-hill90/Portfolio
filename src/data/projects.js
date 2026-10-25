// Edit this file to add, remove, or reorder projects.
// Every published project gets its own SEO-friendly /projects/slug/ page.
// The static page builder picks up new entries automatically.
export const projects = [
  {
    slug: 'fishtories',
    title: 'FishTories',
    category: 'Full-stack web application',
    year: '01',
    shortDescription:
      'An application for anglers, built around catch logging, user accounts, maps, and weather features.',
    description:
      'FishTories is a full-stack fishing application designed around the moments worth remembering after a day on the water. The project combines a React frontend with a Django API, user authentication, and plans for map-based catch tracking and weather features.',
    technologies: ['React', 'Django', 'Python', 'JavaScript'],
    highlights: [
      'React frontend connected to a Django REST API',
      'JWT-based registration, login, and protected routes',
      'Work in progress: location-aware catches and weather tools',
    ],
    links: [], // Add { label: 'Source code', href: 'https://github.com/...' } when ready.
    visual: 'water',
    featured: true,
  },
  {
    slug: 'joejoes-tailgate',
    title: "Joe Joe's Tailgate",
    category: 'Community website',
    year: '02',
    shortDescription:
      'A React-powered home for a recurring tailgate community, with an emphasis on making its content easy to browse.',
    description:
      "Joe Joe's Tailgate is a React website built for a tailgate community. It provides a place to organize and explore site content while keeping deployment lightweight using Vite and GitHub Pages.",
    technologies: ['React', 'Vite', 'GitHub Pages'],
    highlights: [
      'Designed and maintained as a static React website',
      'Hosted through a GitHub Pages deployment workflow',
      'Organized to make ongoing content updates straightforward',
    ],
    links: [], // Add a live link or repository when you're ready to publish them.
    visual: 'tailgate',
    featured: true,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

/*
To publish another project, add another object with a unique `slug`.
You could add the C++ Walker project here when you're ready to feature it.
Keep descriptions accurate: replace anything that no longer reflects the project.
*/
