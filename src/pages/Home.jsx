import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-accent"><span className="status-dot" aria-hidden="true" /> HELLO, I'M JAKE</p>
          <h1>Building software<br />that <em>works</em> for people<span className="period">.</span></h1>
          <p className="hero-description">I'm a software developer who enjoys bringing ideas to life — from full-stack web applications to low-level experiments in C++.</p>
          <div className="hero-actions">
            <Link to="/projects/" className="button button-dark">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link to="/about/" className="button button-text">A little about me <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-grid" />
          <div className="art-window">
            <div className="art-window-top"><span /><span /><span /><strong>~/projects</strong></div>
            <div className="art-code">
              <span className="code-comment">// make something useful</span>
              <span><b>const</b> developer = {'{'}</span>
              <span>  name: <i>"Jake Hill"</i>,</span>
              <span>  curious: <b>true</b>,</span>
              <span>  building: <i>"always"</i></span>
              <span>{'}'};</span>
              <span className="code-cursor">▮</span>
            </div>
          </div>
          <span className="hero-art-orbit orbit-1" /><span className="hero-art-orbit orbit-2" />
        </div>
      </section>

      <section className="work-section" aria-labelledby="featured-heading">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
              <h2 id="featured-heading">Selected projects<span className="period">.</span></h2>
            </div>
            <Link to="/projects/" className="underlined-link">All projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            {projects.filter((project) => project.featured).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta shell">
        <div>
          <p className="eyebrow">WHAT'S NEXT?</p>
          <h2>Curious by nature.<br />Always <em>building.</em></h2>
        </div>
        <Link to="/contact/" className="button button-dark">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
