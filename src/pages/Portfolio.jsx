import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const FILTERS = ['All', 'Web', 'Mobile', 'SMM', 'Design'];

const PROJECTS = [
  {
    title: 'Cebu Home Rentals',
    category: 'Web',
    petal: 'cyan',
    summary: 'Booking platform with real-time availability and owner dashboard.',
    tags: ['React', 'Firebase', 'Payments'],
  },
  {
    title: 'Manila Bites Delivery',
    category: 'Mobile',
    petal: 'teal',
    summary: 'Cross-platform food ordering app for a 12-branch restaurant chain.',
    tags: ['React Native', 'Push notifications'],
  },
  {
    title: 'Toowoomba Cleaning Co.',
    category: 'SMM',
    petal: 'blue',
    summary: '100-day content calendar and paid campaign for an Australian home service brand.',
    tags: ['Content strategy', 'Meta Ads'],
  },
  {
    title: 'Coastal Coffee Co.',
    category: 'Design',
    petal: 'pale',
    summary: 'Full brand identity and packaging system for a specialty coffee roaster.',
    tags: ['Branding', 'Packaging'],
  },
  {
    title: 'Agency 3J Suite',
    category: 'Web',
    petal: 'cyan',
    summary: 'Admin dashboard for a domestic helper placement agency, built for 3 user roles.',
    tags: ['React', 'Firestore', 'Access control'],
  },
  {
    title: 'HK Retail Loyalty App',
    category: 'Mobile',
    petal: 'teal',
    summary: 'Points and rewards app connected to in-store POS for a Hong Kong retailer.',
    tags: ['iOS', 'Android', 'POS integration'],
  },
  {
    title: 'Frozen Foods PH Launch',
    category: 'SMM',
    petal: 'blue',
    summary: 'Product launch campaign across Facebook and TikTok for a halal food brand.',
    tags: ['Launch campaign', 'Short-form video'],
  },
  {
    title: 'Eternal Goodbye Memorial',
    category: 'Design',
    petal: 'pale',
    summary: 'Visual identity and public memorial page templates for a digital memorial platform.',
    tags: ['UI design', 'Print collateral'],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <section className="portfolio-hero">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Portfolio</span>
            <h1>Work we've shipped for clients across PH, HK, and AU.</h1>
            <p>A sample of recent projects across web, mobile, marketing, and design.</p>
          </div>

          <div className="portfolio-filters" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={`filter-pill ${active === f ? 'is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map((p) => (
              <article className={`project-card petal-${p.petal}`} key={p.title}>
                <div className="project-card-top">
                  <span className="pill">{p.category}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
