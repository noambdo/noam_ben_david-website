import { useParams, Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import TreatmentLinks from '../../components/TreatmentLinks/TreatmentLinks';
import AnimatedContactSection from '../../components/AnimatedContactSection/AnimatedContactSection';
import { findTreatment } from '../../data/treatments';
import './TreatmentDetail.css';

export default function TreatmentDetail() {
  const { slug = '' } = useParams();
  const treatment = findTreatment(slug);

  if (!treatment) {
    return (
      <main className="page td-missing">
        <div className="container">
          <h1>טיפול לא נמצא</h1>
          <p>הטיפול שביקשת אינו קיים או הוסר.</p>
          <Link to="/treatments" className="btn">לכל הטיפולים</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page treatment-detail">
      <Hero
        image={treatment.heroImage}
        thin
        title={treatment.title}
      />

      <section className="section">
        <div className="container td-content reveal">
          <span className="divider its-divider" />
          {treatment.fullDescription.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <TreatmentLinks slugs={treatment.relatedTreatmentSlugs} />

      <AnimatedContactSection storageKey={`noam-${treatment.slug}-contact`} />
    </main>
  );
}
