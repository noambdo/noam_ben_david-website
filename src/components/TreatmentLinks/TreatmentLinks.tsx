import { Link } from 'react-router-dom';
import { findTreatment } from '../../data/treatments';
import { images } from '../../data/images';
import './TreatmentLinks.css';

interface Props {
  slugs: string[];
  title?: string;
}

export default function TreatmentLinks({ slugs, title = 'טיפולים נוספים' }: Props) {
  return (
    <section className="treatment-links section section-soft">
      <div className="container">
        <h2 className="tl-title reveal">{title}</h2>
        <span className="divider" />
        <div className="tl-grid">
          {slugs.map(slug => {
            const t = findTreatment(slug);
            if (!t) return null;
            return (
              <Link key={slug} to={`/treatments/${slug}`} className="tl-item reveal">
                <img src={images.logo} alt="" className="tl-watermark" aria-hidden="true" />
                <span>{t.title}</span>
                <span className="tl-arrow">←</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
