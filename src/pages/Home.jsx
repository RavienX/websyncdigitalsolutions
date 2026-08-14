import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  PenSquare,
  Hammer,
  TrendingUp,
  Users,
  MessageCircle,
  Layers,
} from 'lucide-react';
import PixoraMark from '../components/PixoraMark';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import './Home.css';

const STATS = [
  { value: '50+', label: 'Projects delivered' },
  { value: '3', label: 'Core services' },
  { value: '12', label: 'Specialized branches' },
  { value: '24h', label: 'Average response time' },
];

const PROCESS = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    text: 'We start with your goals, audience, and current online presence before proposing anything.',
  },
  {
    icon: PenSquare,
    step: '02',
    title: 'Design',
    text: 'Wireframes, brand direction, and content plans reviewed with you before development starts.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Build',
    text: 'Development, campaign setup, and design production run in weekly cycles with visible progress.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Grow',
    text: 'Launch, then ongoing support, reporting, and iteration based on how people actually use it.',
  },
];

const VALUES = [
  {
    icon: Layers,
    title: 'One team, every channel',
    text: 'Your site, app, socials, and visuals come from the same team — so nothing looks or feels disconnected.',
  },
  {
    icon: MessageCircle,
    title: 'Clear, direct communication',
    text: 'You get a single point of contact, weekly updates, and no jargon you have to decode.',
  },
  {
    icon: Users,
    title: 'Built around your business',
    text: 'No templates dressed up as strategy — every recommendation is tied to your goals and budget.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Digital growth studio</span>
            <h1>
              We build the <span className="text-gradient">platforms, apps, and campaigns</span> your
              brand needs to grow.
            </h1>
            <p className="hero-lede">
              WebSync Digital Solutions covers web development, mobile development, and social media marketing —
              graphic design included — each broken into focused branches so you always work with
              a specialist, not a generalist.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-ghost">
                See our work
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-glow" />
            <PixoraMark size={280} animated />
          </div>
        </div>

        <div className="container">
          <ul className="stats-row">
            {STATS.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Three core services. Twelve specialized branches.</h2>
            <p>
              Each service breaks down into focused branches — so whether you need a full system
              or just a landing page, you're working with someone who does exactly that.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>A process built for visibility, not surprises.</h2>
            <p>Four stages, the same order every time, so you always know what's next.</p>
          </div>
          <div className="process-grid">
            {PROCESS.map((p) => (
              <div className="process-card" key={p.step}>
                <span className="process-step">{p.step}</span>
                <div className="process-icon">
                  <p.icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why WebSync Digital Solutions</span>
            <h2>What working with us actually looks like.</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">
                  <v.icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-band">
          <div>
            <h2>Ready to bring your brand online, properly?</h2>
            <p>Tell us where you're stuck — we'll tell you what it takes to fix it.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Start a project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
