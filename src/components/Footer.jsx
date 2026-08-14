import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Camera, Share2 } from 'lucide-react';
import logo from '../assets/logo.png';
import PixoraMark from './PixoraMark';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-brand-row">
            <img src={logo} alt="Pixora Logo" width="36" height="36" />
            <span>WebSync Digital Solutions</span>
          </div>
          <p>
            Web and mobile development, and social media marketing —
            under one roof, built around your growth.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="WebSync Digital Solutions on Facebook"><Globe size={18} /></a>
            <a href="#" aria-label="WebSync Digital Solutions on Instagram"><Camera size={18} /></a>
            <a href="#" aria-label="WebSync Digital Solutions on LinkedIn"><Share2 size={18} /></a>
          </div>
        </div>

        {/* Company Column */}
        <div className="footer-col">
          <h3>Company</h3>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h3>Services</h3>
          <NavLink to="/services#web-development">Web Development</NavLink>
          <NavLink to="/services#mobile-development">Mobile Development</NavLink>
          <NavLink to="/services#social-media-marketing">Social Media Marketing</NavLink>

        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3>Get in touch</h3>
          <a href="mailto:abegail.ramiro.101@gmail.com">
            <Mail size={16} /> <span>websyncdigitalsolutions@gmail.com</span>
          </a>
          <a href="tel:+639171234567">
            <Phone size={16} /> <span>+63 976 629 4511</span>
          </a>
          <span className="footer-address">
            <MapPin size={16} /> <span>Pangasinan, Philippines</span>
          </span>
        </div>

      </div>

      {/* Bottom Legal / Branding row */}
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <span>© {year} WebSync Digital Solutions. All rights reserved.</span>
          <PixoraMark size={22} />
        </div>
      </div>
    </footer>
  );
}