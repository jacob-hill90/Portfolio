import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link className={`project-visual visual-${project.visual}`} to={`/projects/${project.slug}/`}
        aria-label={`Read about ${project.title}`}>
        <span className="project-visual-label">{project.category}</span>
        <span className="project-visual-glyph" aria-hidden="true">{project.visual === 'water' ? '◈' : '↗'}</span>
        <span className="project-visual-index">{project.year} / SELECTED WORK</span>
      </Link>
      <div className="project-details">
        <div className="eyebrow">{project.category}</div>
        <h3><Link to={`/projects/${project.slug}/`}>{project.title}</Link></h3>
        <p>{project.shortDescription}</p>
        <div className="project-bottom">
          <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <Link className="arrow-link" to={`/projects/${project.slug}/`} aria-label={`View ${project.title} project details`}>↗</Link>
        </div>
      </div>
    </article>
  );
}
