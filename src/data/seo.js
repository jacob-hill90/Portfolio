import { projects } from "./projects.js";

export const seoPages = [
  {
    path: "/",
    title: "Jake Hill | Software Developer in Ann Arbor, Michigan",
    description:
      "Jake Hill is a software developer and University of Michigan computer science student in Ann Arbor, Michigan. Explore web development, React, Python, C++, and software projects.",
  },
  {
    path: "/about/",
    title: "About Jake Hill | University of Michigan CS Student",
    description:
      "Learn about Jake Hill, a software developer studying computer science at the University of Michigan. Explore his background, technical experience, and journey into software engineering.",
  },
  {
    path: "/projects/",
    title: "Web & Software Development Projects | Jake Hill",
    description:
      "Explore website development and software engineering projects by Jake Hill, featuring React, JavaScript, Python, C++, and full-stack web applications.",
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}/`,
    title: `${project.title} | Projects | Jake Hill`,
    description: project.shortDescription,
  })),
  {
    path: "/contact/",
    title: "Contact Jake Hill | Ann Arbor Software Developer",
    description:
      "Connect with Jake Hill, a software developer in Ann Arbor, Michigan, and University of Michigan computer science student. Find GitHub, LinkedIn, and contact information.",
  },
];
