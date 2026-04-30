import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TreatmentCard from '../../components/TreatmentCard/TreatmentCard';
import BrandLogosCarousel from '../../components/BrandLogosCarousel/BrandLogosCarousel';
import AnimatedContactSection from '../../components/AnimatedContactSection/AnimatedContactSection';
import { treatments } from '../../data/treatments';
import { testimonials } from '../../data/testimonials';
import { images } from '../../data/images';
import './Home.css';

export default function Home() {
  const featured = ['classic-facial', 'hydration-facial', 'anti-aging-facial', 'microneedling']
    .map(s => treatments.find(t => t.slug === s)!)
    .filter(Boolean);

  const t = testimonials[0];

  return (
    <main className="page home">
      <Hero
        image={images.heroHome}
        title={"עור בריא.\nטיפול מדויק.\nתוצאה טבעית."}
        subtitle="טיפולי פנים בהתאמה אישית עם ליווי מקצועי ונעים."
        cta={<Link to="/contact" className="btn">לקביעת שיחה</Link>}
        align="start"
      />

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="הקליניקה של נועם"
            title="טיפולי קוסמטיקה בהתאמה אישית"
            text="כל טיפול מתחיל באבחון מדויק של העור, בהקשבה לצרכים שלך ובבחירה בשיטה שמתאימה בדיוק למצב העור והמטרה שלך."
          />
          <div className="home-treatments-grid">
            {featured.map(t => <TreatmentCard key={t.slug} treatment={t} />)}
          </div>
        </div>
      </section>

      <BrandLogosCarousel />

      <section className="section home-questionnaire">
        <div className="container hq-grid">
          <div className="hq-text reveal">
            <span className="eyebrow">התאמה אישית</span>
            <h2>שאלון התאמה אישית</h2>
            <span className="divider its-divider" />
            <p className="muted">
              עני על כמה שאלות קצרות וקבלי כיוון ראשוני לטיפול שמתאים לעור שלך.
            </p>
            <Link to="/questionnaire" className="btn">התחילי את השאלון</Link>
          </div>
          <div className="hq-image reveal">
            <img src={images.questionnaire} alt="שאלון התאמה אישית" />
          </div>
        </div>
      </section>

      <section className="section section-soft text-center home-testimonial">
        <div className="container reveal">
          <div className="ht-stars" aria-label={`${t.stars} כוכבים`}>
            {Array.from({ length: t.stars }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <h3 className="ht-title">{t.title}</h3>
          <p className="ht-text">"{t.text}"</p>
          <p className="ht-name">— {t.name}</p>
          <Link to="/testimonials" className="btn btn-outline">להמלצות נוספות</Link>
        </div>
      </section>

      <AnimatedContactSection storageKey="noam-home-contact" />
    </main>
  );
}
