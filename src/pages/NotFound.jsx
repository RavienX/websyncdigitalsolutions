import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PixoraMark from '../components/PixoraMark';

export default function NotFound() {
  return (
    <section style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <PixoraMark size={80} />
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--text)' }}>Page not found.</h1>
        <p style={{ maxWidth: 420 }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
