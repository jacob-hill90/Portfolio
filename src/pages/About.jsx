import { Link } from "react-router-dom";

const journey = [
  {
    when: "2024 – Present",
    title: "University of Michigan",
    role: "Computer Science Student",
    detail:
      "Continuing to explore software engineering and computer science through coursework and independent projects.",
  },
  {
    when: "2022 – 2023",
    title: "RoboTire",
    role: "Frontend Developer",
    detail:
      "Professional frontend development experience building web interfaces.",
  },
  {
    when: "2022",
    title: "Code Platoon",
    role: "Full Stack Engineering Student",
    detail:
      "Focused study of web development and the foundations of full-stack engineering.",
  },
  {
    when: "2011 – 2016",
    title: "United States Marine Corps",
    role: "Infantryman FAST & I MEF G-3",
    detail:
      "Served in high responsibility environments where teamwork, adaptability, and decision making were essential. Developed an attention to detail and problem solving mindset that continues to shape my approach to software engineering.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow eyebrow-accent">01 / ABOUT</p>
        <h1>
          Curiosity is part
          <br />
          of the <em>process.</em>
        </h1>
        <p className="page-lead">
          I'm Jake. A software developer interested in how things work and how
          to build them better.
        </p>
      </section>
      <section className="shell about-content">
        <div className="about-story">
          <h2>
            More than just programming<span className="period">.</span>
          </h2>
          <p>
            My work has covered React interfaces, full-stack applications with
            Python and Django, and projects using C++. I like the challenge of
            connecting the details; clean interfaces, practical architecture,
            and software that's satisfying to use.
          </p>
          <p>
            I use side projects to explore new ideas and keep learning. One of
            the things I love most about computer science is that the more I
            learn, the more I realize how much I have yet to discover.
          </p>
          <h3>Tools I've worked with</h3>
          <div className="tags tags-large">
            {[
              // Programming Languages
              "JavaScript",
              "Python",
              "C++",
              "HTML & CSS",
              "SQL",

              // Frontend Development
              "React",
              "Vite",
              "Tailwind CSS",

              // Backend Development
              "Django",
              "Django REST Framework",
              "Flask",
              "Node.js",
              "REST APIs",

              // Databases
              "PostgreSQL",
              "SQLite",

              // Development Tools
              "Git",
              "GitHub",
              "Gitlab",
              "VS Code",
              "Visual Studio",
              "CMake",
              "Xcode",
              "AWS",

              // Operating Systems
              "macOS",
              "Windows",
              "Linux",

              // CAD & Manufacturing
              "Fusion 360",
              "SOLIDWORKS",
              "3D Modeling",
              "CAD Design",
              "3D Printing",

              // Hardware & Other
              "Raspberry Pi",
              "Arduino"
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="journey-panel">
          <p className="eyebrow">THE JOURNEY SO FAR</p>
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item" key={item.title}>
                <small>{item.when}</small>
                <h3>{item.title}</h3>
                <strong>{item.role}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell inline-cta">
        <p>Want to see how I put these skills to work?</p>
        <Link className="underlined-link" to="/projects/">
          Explore my projects ↗
        </Link>
      </section>
    </>
  );
}
