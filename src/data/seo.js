import { projects } from './projects.js';

export const seoPages = [
  {
    path: '/',
    title: 'Jake Hill | Software Developer',
    description: 'Jake Hill is a software developer working with React, Python, and C++. Explore selected projects, experience, and ways to connect.',
  },
  {
    path: '/about/',
    title: 'About | Jake Hill',
    description: 'Learn about Jake Hill, his software development background, education, and technical interests.',
  },
  {
    path: '/projects/',
    title: 'Projects | Jake Hill',
    description: 'Explore selected software development projects from Jake Hill, including full-stack web applications and React websites.',
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}/`,
    title: `${project.title} | Projects | Jake Hill`,
    description: project.shortDescription,
  })),
  {
    path: '/contact/',
    title: 'Contact | Jake Hill',
    description: 'Find Jake Hill on GitHub and LinkedIn to connect about software development and projects.',
  },
];