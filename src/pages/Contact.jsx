export default function Contact() {
  return (
    <>
      <section className="page-hero shell contact-hero">
        <p className="eyebrow eyebrow-accent">03 / CONTACT</p>
        <h1>Let's start a<br /><em>conversation.</em></h1>
        <p className="page-lead">Have a project in mind, or want to connect about software development? You can find me here.</p>
      </section>
      <section className="shell contact-options">
        <a href="https://github.com/jacob-hill90" target="_blank" rel="noopener noreferrer" className="contact-option">
          <span><small>CODE & PROJECTS</small><strong>GitHub</strong></span><span aria-hidden="true">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/jacob-hill90/" target="_blank" rel="noopener noreferrer" className="contact-option">
          <span><small>PROFESSIONAL NETWORK</small><strong>LinkedIn</strong></span><span aria-hidden="true">↗</span>
        </a>
      </section>
      <p className="shell contact-note">Feel free to reach out — I'm always happy to hear about interesting ideas and projects.</p>
    </>
  );
}
