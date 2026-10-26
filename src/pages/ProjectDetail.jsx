import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project)
    return (
      <section className="shell page-hero">
        <h1>Project not found.</h1>
        <Link to="/projects/">Back to projects →</Link>
      </section>
    );

  return (
    <>
      <section className="project-detail-hero shell">
        <Link className="back-link" to="/projects/">
          ← All projects
        </Link>
        <p className="eyebrow eyebrow-accent">{project.category}</p>
        <h1>
          {project.title}
          <span className="period">.</span>
        </h1>
        <p className="page-lead">{project.shortDescription}</p>
        <div className="tags tags-large">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
      <section
        className={`detail-art visual-${project.visual}`}
        aria-label={`${project.title} project visual`}
      >
        <div className="shell detail-art-inner">
          <span aria-hidden="true">
            {project.visual === "water" ? "◈" : "↗"}
          </span>
          <small>
            {project.title.toUpperCase()} / PROJECT {project.year}
          </small>
        </div>
      </section>
      <section className="shell detail-body">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>
            Behind the project<span className="period">.</span>
          </h2>
        </div>
        <div className="detail-prose">
          <p>{project.description}</p>
          <h3>Notable parts</h3>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className="detail-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className="button button-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
          <Link className="underlined-link" to="/projects/">
            ← Back to all projects
          </Link>
        </div>
      </section>
    </>
  );
}
