import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Web Development',
  'Mobile Development',
  'Social Media Marketing',
  'Graphic Design',
  'Not sure yet',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h1>Tell us about your project.</h1>
          <p>
            Fill out the form and we'll get back to you within a business day with next steps —
            or reach us directly using the details below.
          </p>

          <div className="contact-info-list">
            <a href="mailto:ramiro.abegail.101@gmail.com" className="contact-info-item">
              <Mail size={18} />
              <div>
                <span>Email</span>
                <strong>ramiro.abegail.101@gmail.com</strong>
              </div>
            </a>
            <a href="tel:+639171234567" className="contact-info-item">
              <Phone size={18} />
              <div>
                <span>Phone</span>
                <strong>+63 976 629 4511</strong>
              </div>
            </a>
            <div className="contact-info-item">
              <MapPin size={18} />
              <div>
                <span>Location</span>
                <strong>Pangasinan, Philippines</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <CheckCircle2 size={36} />
              <h2>Message sent.</h2>
              <p>Thanks for reaching out — we'll reply within one business day.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Juan Dela Cruz" required />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="juan@company.com" required />
              </div>

              <div className="form-row">
                <label htmlFor="service">Service you're interested in</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you're building and your timeline."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Send message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
