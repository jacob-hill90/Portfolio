import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow eyebrow-accent">02 / SELECTED WORK</p>
        <h1>A few things<br />I've <em>built.</em></h1>
        <p className="page-lead">A focused collection of projects that reflect what I've been learning, experimenting with, and working on.</p>
      </section>
      <section className="work-section work-section-page">
        <div className="shell">
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
          <p className="projects-footnote">This is a growing collection(currently a work in progress).</p>
        </div>
      </section>
    </>
  );
}
