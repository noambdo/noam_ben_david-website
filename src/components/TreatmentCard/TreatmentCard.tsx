import { Link } from 'react-router-dom';
import type { Treatment } from '../../data/treatments';
import './TreatmentCard.css';

interface Props {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: Props) {
  return (
    <Link to={`/treatments/${treatment.slug}`} className="treatment-card reveal" aria-label={treatment.title}>
      <div className="tc-image">
        <img src={treatment.heroImage} alt={treatment.title} loading="lazy" />
      </div>
      <div className="tc-content">
        <h3>{treatment.title}</h3>
        <p className="muted">{treatment.shortDescription}</p>
        <span className="tc-link">לקריאה נוספת ←</span>
      </div>
    </Link>
  );
}
