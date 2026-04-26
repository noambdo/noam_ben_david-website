import { useState } from 'react';
import './TestimonialsCarousel.css';

interface Props {
  title: string;
  images: string[];
  id?: string;
}

export default function TestimonialsCarousel({ title, images, id }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = (n: number) => setIndex((n + total) % total);

  return (
    <section className="ba-carousel reveal" id={id}>
      <h3 className="ba-title">{title}</h3>
      <div className="ba-frame">
        <button
          className="ba-arrow ba-arrow-prev"
          onClick={() => go(index - 1)}
          aria-label="הקודם"
        >‹</button>

        <div className="ba-track" style={{ transform: `translateX(${index * 100}%)` }}>
          {images.map((src, i) => (
            <div className="ba-slide" key={i}>
              <img src={src} alt={`${title} - לפני ואחרי ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className="ba-arrow ba-arrow-next"
          onClick={() => go(index + 1)}
          aria-label="הבא"
        >›</button>
      </div>

      <div className="ba-dots" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            className={`ba-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`עבור לתמונה ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
