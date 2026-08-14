import { Code2, Smartphone, Megaphone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ICONS = { Code2, Smartphone, Megaphone };

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon];

  return (
    <Link to={`/services#${service.id}`} className={`service-card petal-${service.petal}`}>
      <div className="service-card-top">
        <div className="service-card-icon">
          <Icon size={26} strokeWidth={1.75} />
        </div>
        <span className="service-card-count">{service.branches.length} branches</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.tagline}</p>
      <ul className="service-card-branches">
        {service.branches.slice(0, 3).map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
        {service.branches.length > 3 && <li>+{service.branches.length - 3} more</li>}
      </ul>
      <span className="service-card-link">
        See all branches <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
