import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-accent">
            <span className="status-dot" aria-hidden="true" /> HELLO, I'M JAKE
          </p>
          <h1>
            Building software
            <br />
            that <em>works</em>
            <span className="period">.</span>
          </h1>
          <p className="hero-description">
            I'm a software developer who truly enjoys exploring all sides of
            programming. From building modern full-stack web applications and
            experimenting with low level C++ to tinkering with BASIC on my Apple
            II.
          </p>
          <div className="hero-actions">
            <Link to="/projects/" className="button button-dark">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/about/" className="button button-text">
              A little about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-grid" />

          <div className="art-window">
            <div className="art-window-top">
              <span />
              <span />
              <span />
              <strong>~/projects</strong>
            </div>

            <div className="art-code">
              <span className="code-comment">// make something useful</span>

              <span>
                <b>struct</b> Developer {"{"}
              </span>

              <span>
                {" "}
                std::string name{"{"}
                <i>"Jake"</i>
                {"}"};
              </span>
              <span>
                {" "}
                bool curious{"{"}
                <b>true</b>
                {"}"};
              </span>

              <span className="code-spacer"> </span>

              <span>
                {" "}
                std::string mindset{"{"}
                <i>"always learning"</i>
                {"}"};
              </span>
              <span>
                {" "}
                std::string mission{"{"}
                <i>"build things that matter"</i>
                {"}"};
              </span>

              <span className="code-spacer"> </span>

              <span>
                {" "}
                <b>bool</b> isFinished() const {"{"}
              </span>
              <span>
                {" "}
                <b>return</b> <b>false</b>;
              </span>
              <span> {"}"}</span>

              <span>{"}"};</span>
              <span className="code-cursor">▮</span>
            </div>
          </div>

          <span className="hero-art-orbit orbit-1" />
          <span className="hero-art-orbit orbit-2" />
        </div>
      </section>

      <section className="work-section" aria-labelledby="featured-heading">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
              <h2 id="featured-heading">
                Projects<span className="period">:</span>
              </h2>
            </div>
            <Link to="/projects/" className="underlined-link">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="project-grid">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
          </div>
        </div>
      </section>

      <section className="closing-cta shell">
        <div>
          <p className="eyebrow">WHAT'S NEXT?</p>
          <h2>
            Curious by <em>nature.</em>
            <br />
          </h2>
        </div>
        <Link to="/contact/" className="button button-dark">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
