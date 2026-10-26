
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mzeeepyy");

  return (
    <>
      <section className="page-hero shell contact-hero">
        <p className="eyebrow eyebrow-accent">03 / CONTACT</p>
        <h1>
          Let's start a<br />
          <em>conversation.</em>
        </h1>
        <p className="page-lead">
          Have a project in mind, or want to connect about
          software development? You can contact me here.
        </p>
      </section>

      <section className="shell contact-form-section">
        <p className="eyebrow eyebrow-accent">SEND A MESSAGE</p>

        {state.succeeded ? (
          <p className="form-success" role="status">
            Thanks for reaching out! Your message has been sent.
            I'll get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                autoComplete="name"
                required
              />
              <ValidationError
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                autoComplete="email"
                required
              />
              <ValidationError
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
                required
              />
              <ValidationError
                field="message"
                errors={state.errors}
              />
            </div>

            <ValidationError errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message ↗"}
            </button>
          </form>
        )}
      </section>

      <section className="shell contact-options">
        <a
          href="https://github.com/jacob-hill90"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option"
        >
          <span>
            <small>CODE & PROJECTS</small>
            <strong>GitHub</strong>
          </span>
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jacob-hill90/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option"
        >
          <span>
            <small>PROFESSIONAL NETWORK</small>
            <strong>LinkedIn</strong>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <p className="shell contact-note">
        Feel free to reach out — I'm always happy to hear about
        interesting ideas and projects.
      </p>
    </>
  );
}
