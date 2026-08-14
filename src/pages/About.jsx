import { Target, Eye, Handshake, Sparkles } from 'lucide-react';
import PixoraMark from '../components/PixoraMark';
import './About.css';

const TEAM = [
  { name: 'Miguel Santos', role: 'Web & Mobile Development Lead', petal: 'cyan' },
  { name: 'Andrea Reyes', role: 'Mobile Apps Developer', petal: 'teal' },
  { name: 'Josh Villanueva', role: 'Social Media Strategist', petal: 'blue' },
  { name: 'Camille Torres', role: 'Graphic Designer', petal: 'pale' },
];

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Our mission',
    text: 'Give small and growing brands the same level of digital execution that larger companies pay agencies premiums for.',
  },
  {
    icon: Eye,
    title: 'Our approach',
    text: 'One team across development, marketing, and design, so every deliverable reinforces the same brand instead of competing with it.',
  },
  {
    icon: Handshake,
    title: 'How we work with you',
    text: 'Weekly check-ins, one point of contact, and no disappearing after launch — support continues as your product grows.',
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="eyebrow">About WebSync Digital Solutions</span>
            <h1>A small studio built around four disciplines that belong together.</h1>
            <p>
              WebSync Digital Solutions started from a simple observation: most small businesses end up hiring a
              web developer, a separate app developer, a social media freelancer, and a graphic
              designer — and the results rarely look like they come from the same brand. We
              built WebSync Digital Solutions to close that gap, with one team handling all four.
            </p>
          </div>
          <div className="about-hero-mark" aria-hidden="true">
            <PixoraMark size={200} animated />
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="principles-grid">
            {PRINCIPLES.map((p) => (
              <div className="principle-card" key={p.title}>
                <div className="principle-icon">
                  <p.icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">The team</span>
            <h2>Small enough to know your project by name.</h2>
            <p>Every project runs through the same four people — no rotating freelancers.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div className={`team-card petal-${member.petal}`} key={member.name}>
                <div className="team-avatar">
                  <Sparkles size={22} strokeWidth={1.5} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
