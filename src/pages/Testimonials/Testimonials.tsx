import Hero from '../../components/Hero/Hero';
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { beforeAfterCategories, testimonials } from '../../data/testimonials';
import { images } from '../../data/images';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <main className="page testimonials">
      <Hero
        image={images.heroTestimonials}
        thin
        title="סיפורי הצלחה"
        subtitle="כשהעור משתפר, גם הביטחון העצמי משתנה. הנה כמה סיפורים מהקליניקה."
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="לפני ואחרי" text="התוצאות שלפניכן הן לאחר תהליך מסודר ומותאם אישית."  />
          {beforeAfterCategories.map(cat => (
            <TestimonialsCarousel
              key={cat.id}
              id={cat.id}
              title={cat.title}
              images={cat.images}
            />
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle title="ממליצים עלינו" />
          <div className="testimonial-grid">
            {testimonials.map(t => (
              <div className="testimonial-card reveal" key={t.id}>
                <div className="ht-stars" aria-label={`${t.stars} כוכבים`}>
                  {Array.from({ length: t.stars }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <h4>{t.title}</h4>
                <p>"{t.text}"</p>
                <span className="t-name">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
