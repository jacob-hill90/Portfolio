export const projects = [
  {
    slug: "fishtories",
    title: "Fishtories",
    category: "Full-stack web application",
    year: "01",

    shortDescription:
      "A full-stack fishing application where anglers can log catches, share fishing experiences, explore interactive maps, and check local weather forecasts.",

    description:
      "Fishtories is a full-stack fishing application built with React, Vite, Django REST Framework, and PostgreSQL. Designed to help anglers document and share their fishing adventures, the application features secure user authentication, personalized profiles, catch logging with photo uploads, and interactive private and community fishing maps. Users can browse a searchable fish species database, explore catches shared by other anglers, and view real-time weather conditions and forecasts based on their location. The application is containerized with Docker and deployed using Render, Neon PostgreSQL, and Cloudflare R2 for private image storage.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "MapLibre",
      "Open-Meteo",
      "Docker",
      "Cloudflare R2",
      "Render",
    ],

    highlights: [
      "Developed a full-stack React application connected to a Django REST API",
      "Implemented secure session-based authentication, registration, and protected user profiles",
      "Built a fishing journal with catch creation, editing, deletion, and personalized statistics",
      "Integrated interactive fishing maps with private and publicly shared catch locations",
      "Implemented catch photo uploads and profile pictures using private Cloudflare R2 storage",
      "Created a searchable fish species database with reference images and autocomplete",
      "Integrated location-based current weather conditions and multi-day forecasts using Open-Meteo",
      "Deployed a containerized production application using Docker, Render, and Neon PostgreSQL",
    ],

    links: [
      {
        label: "Visit Live Website",
        href: "https://fishtories.com/",
      },
      {
        label: "View GitHub Repository",
        href: "https://github.com/jacob-hill90/fishtories_v3",
      },
    ],

    visual: "water",
    featured: true,
  },

  {
    slug: "joejoes-tailgate",
    title: "Joe Joe's Tailgate",
    category: "Community website",
    year: "02",

    shortDescription:
      "A React-powered website built for a recurring tailgate community, providing an easy way to explore and stay connected with community content.",

    description:
      "Joe Joe's Tailgate is a community-focused website developed using React and Vite. The application provides a centralized place for members of a recurring tailgate community to explore content and stay connected. Built with a lightweight frontend architecture, the website is designed to be easy to maintain, update, and deploy through GitHub Pages.",

    technologies: ["React", "Vite", "JavaScript", "CSS", "GitHub Pages"],

    highlights: [
      "Developed a responsive community website using React and Vite",
      "Created a lightweight frontend architecture for efficient browsing and content management",
      "Implemented a static deployment workflow using GitHub Pages",
      "Designed the project for straightforward maintenance and future content updates",
    ],

    links: [
      {
        label: "Visit Live Website",
        href: "https://joejoestg.com/",
      },

      {
        label: "View GitHub Repository",
        href: "https://github.com/jacob-hill90/joejoes4",
      },
    ],

    visual: "tailgate",
    featured: true,
  },
];

// retrieve a project using its unique slug.
export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
