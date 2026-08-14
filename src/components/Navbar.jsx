import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-row">
        <NavLink to="/" className="navbar-brand" aria-label="Pixora home">
          <img src={logo} alt="" width="34" height="34" />
          <span>WebSync Digital Solutions</span>
        </NavLink>

        <div className="navbar-right">
          <nav className="navbar-links" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <NavLink to="/contact" className="btn btn-primary btn-sm navbar-cta">
              Start a project
            </NavLink>
            <button
              className="navbar-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for the mobile sidebar */}
      <div
        className={`navbar-overlay ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`navbar-mobile ${open ? 'is-open' : ''}`}>
        <div className="navbar-mobile-header">
          <NavLink to="/" className="navbar-brand" aria-label="Pixora home">
            <img src={logo} alt="" width="30" height="30" />
            <span>WebSync Digital Solutions</span>
          </NavLink>
          <button
            className="navbar-toggle"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn btn-primary navbar-mobile-cta">
          Start a project
        </NavLink>
      </div>
    </header>
  );
}