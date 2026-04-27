import { brands } from '../../data/brands';
import './BrandLogosCarousel.css';

export default function BrandLogosCarousel() {
  // Triple the list so the seamless loop never shows a gap at any viewport width
  const loop = [...brands, ...brands, ...brands];

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
