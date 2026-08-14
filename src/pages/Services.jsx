import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Megaphone,
  LayoutDashboard,
  CreditCard,
  MousePointerClick,
  Heart,
  RefreshCw,
  Boxes,
  Truck,
  PenTool,
  Calendar,
  Target,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { services } from '../data/services';
import './Services.css';

const PARENT_ICONS = { Code2, Smartphone, Megaphone };
const BRANCH_ICONS = {
  LayoutDashboard,
  CreditCard,
  MousePointerClick,
  Heart,
  Smartphone,
  RefreshCw,
  Boxes,
  Truck,
  PenTool,
  Calendar,
  Target,
  MessageCircle,
};

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Services</span>
            <h1>Three core services. Twelve specialized branches.</h1>
            <p>
              Web, mobile, and social media marketing — each one broken down into focused
              branches, so you're always working with someone who specializes in exactly what
              you need.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, i) => {
        const ParentIcon = PARENT_ICONS[service.icon];
        return (
          <section
            key={service.id}
            id={service.id}
            className={`service-detail petal-${service.petal} ${i % 2 === 1 ? 'is-reversed' : ''}`}
          >
            <div className="container service-detail-grid">
              <div className="service-detail-visual" aria-hidden="true">
                <div className="service-detail-icon">
                  <ParentIcon size={40} strokeWidth={1.5} />
                </div>
              </div>

              <div className="service-detail-copy">
                <span className="pill">{`0${i + 1} — ${service.title}`}</span>
                <h2>{service.tagline}</h2>
                <p>{service.description}</p>
                <Link to="/contact" className="btn btn-ghost btn-sm">
                  Ask about this service <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="container">
              <div className="branch-grid">
                {service.branches.map((branch) => {
                  const BranchIcon = BRANCH_ICONS[branch.icon];
                  const petal = branch.petal || service.petal;
                  return (
                    <div
                      key={branch.id}
                      id={branch.id}
                      className={`branch-card petal-${petal}`}
                    >
                      <div className="branch-card-icon">
                        <BranchIcon size={20} strokeWidth={1.75} />
                      </div>
                      <h3>{branch.title}</h3>
                      <p>{branch.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="services-cta">
        <div className="container cta-band">
          <div>
            <h2>Not sure which branch you need?</h2>
            <p>Send us what you have now — we'll tell you where to start.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Talk to the team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
