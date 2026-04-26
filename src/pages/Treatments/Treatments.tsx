import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TreatmentCard from '../../components/TreatmentCard/TreatmentCard';
import AnimatedContactSection from '../../components/AnimatedContactSection/AnimatedContactSection';
import { treatments, treatmentColumns } from '../../data/treatments';
import { images } from '../../data/images';
import './Treatments.css';

export default function Treatments() {
  return (
    <main className="page treatments-index">
      <Hero
        image={images.heroTreatment}
        thin
        title="הטיפולים בקליניקה"
        subtitle="מגוון טיפולים מתקדמים בהתאמה אישית, עם דגש על תוצאה טבעית ובריאה."
      />

      {(['facial', 'tech', 'special'] as const).map(key => {
        const col = treatmentColumns[key];
        const list = col.slugs.map(s => treatments.find(t => t.slug === s)!).filter(Boolean);
        return (
          <section key={key} className={`section ${key === 'tech' ? 'section-soft' : ''}`}>
            <div className="container">
              <SectionTitle title={col.title} />
              <div className="treatments-grid">
                {list.map(t => <TreatmentCard key={t.slug} treatment={t} />)}
              </div>
            </div>
          </section>
        );
      })}

      <AnimatedContactSection storageKey="noam-treatments-contact" />
    </main>
  );
}
