import './PixoraMark.css';

/**
 * Four independent quarter-circle "petals", each colored after one
 * service line. Reused across the site as loader, divider, and hero
 * centerpiece so the logo's shape becomes the site's structural language.
 */
export default function PixoraMark({ size = 64, animated = false, className = '' }) {
  return (
    <svg
      className={`pixora-mark ${animated ? 'is-animated' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Pixora"
    >
      <path className="petal petal-cyan" d="M50 50 L50 4 A46 46 0 0 0 4 50 Z" />
      <path className="petal petal-teal" d="M50 50 L96 50 A46 46 0 0 0 50 4 Z" />
      <path className="petal petal-pale" d="M50 50 L4 50 A46 46 0 0 0 50 96 Z" />
      <path className="petal petal-blue" d="M50 50 L50 96 A46 46 0 0 0 96 50 Z" />
    </svg>
  );
}
