import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link to="/" className="footer-brand">Jake Hill<span className="brand-punct">.</span></Link>
          <p>Creating software with attention to detail.</p>
        </div>
        <div className="footer-side">
          <div className="footer-links">
            <a href="https://github.com/jacob-hill90" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/jacob-hill90/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          <small>© {new Date().getFullYear()} Jake Hill</small>
        </div>
      </div>
    </footer>
  );
}
