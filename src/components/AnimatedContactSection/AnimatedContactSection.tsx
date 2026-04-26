import { useEffect, useRef } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { images } from '../../data/images';
import './AnimatedContactSection.css';

interface Props {
  image?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  storageKey?: string;
}

export default function AnimatedContactSection({
  image = images.contactBg,
  eyebrow = 'יצירת קשר',
  title = 'נשמח לשמוע ממך',
  text = 'השאירי פרטים ואחזור אלייך בהקדם עם התאמה אישית לעור ולמטרות שלך.',
  storageKey
}: Props) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let ticking = false;

    const update = () => {
      const rect = layer.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (above viewport) → 0 (center) → +1 (below)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height) * 2;
      const x = Math.max(-1, Math.min(1, progress)) * 40;
      layer.style.transform = `translate3d(${x}px, 0, 0) scale(1.08)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="animated-contact">
      <div className="ac-bg" aria-hidden="true">
        <div className="ac-bg-layer" ref={layerRef} style={{ backgroundImage: `url(${image})` }} />
        <div className="ac-bg-overlay" />
      </div>

      <div className="container ac-grid">
        <div className="ac-text reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          <span className="divider its-divider" />
          {text && <p className="muted">{text}</p>}
        </div>
        <div className="ac-form-wrap reveal">
          <ContactForm storageKey={storageKey} />
        </div>
      </div>
    </section>
  );
}
