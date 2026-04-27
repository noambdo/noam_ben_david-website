import { brands } from '../../data/brands';
import './BrandLogosCarousel.css';

export default function BrandLogosCarousel() {
  // Duplicate once → animate -50% → perfect seamless loop, zero gap
  const loop = [...brands, ...brands];

  return (
    <section className="brand-carousel" aria-label="מותגים שאיתם אנחנו עובדים">
      <div className="bc-track-wrap">
        <ul className="bc-track" role="list">
          {loop.map((brand, i) => (
            <li className="bc-item" key={`${brand.id}-${i}`}>
              <div className="bc-logo-box">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
