import { brands } from '../../data/brands';
import './BrandLogosCarousel.css';

export default function BrandLogosCarousel() {
  const loop = [...brands, ...brands];
  return (
    <section className="brand-carousel">
      <div className="container">
        <div className="bc-track-wrap">
          <div className="bc-track" aria-label="המותגים שאיתם אנחנו עובדים">
            {loop.map((b, i) => (
              <div className="bc-item" key={`${b.id}-${i}`}>
                <img src={b.logo} alt={b.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
