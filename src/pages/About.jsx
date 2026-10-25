import { Link } from 'react-router-dom';

const journey = [
  {
    when: '2024 – Present',
    title: 'University of Michigan',
    role: 'Computer Science Student',
    detail: 'Continuing to explore software engineering and computer science through coursework and independent projects.',
  },
  {
    when: '2022 – 2023',
    title: 'RoboTire',
    role: 'Frontend Developer',
    detail: 'Professional frontend development experience building web interfaces.',
  },
  {
    when: '2022',
    title: 'Code Platoon',
    role: 'Full Stack Engineering Student',
    detail: 'Focused study of web development and the foundations of full-stack engineering.',
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow eyebrow-accent">01 / ABOUT</p>
        <h1>Curiosity is part<br />of the <em>process.</em></h1>
        <p className="page-lead">I'm Jake — a software developer interested in how things work, how people use them, and how to build them better.</p>
      </section>
      <section className="shell about-content">
        <div className="about-story">
          <h2>More than just code<span className="period">.</span></h2>
          <p>My work has covered React interfaces, full-stack applications with Python and Django, and personal experiments with C++. I like the challenge of connecting the details — clean interfaces, sensible architecture, and software that's satisfying to use.</p>
          <p>I use side projects to explore new ideas and keep learning. The projects here are a selected snapshot of that work rather than a complete archive.</p>
          <h3>Tools I've worked with</h3>
          <div className="tags tags-large">
            {['JavaScript', 'React', 'Python', 'Django', 'C++', 'HTML & CSS', 'Git', 'Vite'].map((tool) => <span key={tool}>{tool}</span>)}
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
      <section className="shell inline-cta"><p>Want to see how I put these skills to work?</p><Link className="underlined-link" to="/projects/">Explore my projects ↗</Link></section>
    </>
  );
}
