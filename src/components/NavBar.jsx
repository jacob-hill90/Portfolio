import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/about/', text: 'About' },
  { to: '/projects/', text: 'Projects' },
  { to: '/contact/', text: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onNavigate = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
          <Link
            to="/"
            className="wordmark"
            aria-label="Jake Hill, home"
            onClick={onNavigate}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.png`}
              alt=""
              className="brand-avatar"
              width="42"
              height="42"
            />

            <span>
              JAKE HILL<span className="brand-punct"></span>
            </span>
          </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={`navigation ${open ? 'is-open' : ''}`}>
          {links.map(({ to, text }) => (
            <NavLink key={to} to={to} onClick={onNavigate}
              className={({ isActive }) => `nav-link ${isActive || location.pathname.startsWith(to) ? 'active' : ''}`}>
              {text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
