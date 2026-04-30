import { Link, useParams } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';
import { findProduct } from '../../data/products';
import { images } from '../../data/images';
import './ProductDetail.css';

const WHY_ITEMS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Glowing face */}
        <path d="M18 28c-6 0-9-4.5-9-10S12.5 8 18 8s9 4 9 10c0 5.5-3 10-9 10z" />
        <circle cx="14" cy="17" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="22" cy="17" r="1.2" fill="currentColor" stroke="none" />
        <path d="M14.5 22.5c.8 1.2 2 1.8 3.5 1.8s2.7-.6 3.5-1.8" />
        <path d="M28.5 7.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
        <path d="M5.5 10.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" />
      </svg>
    ),
    text: 'אבחון מקצועי והתאמה אישית',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Heart / personal care */}
        <path d="M18 28l-1.2-1.1C9 19.5 6.5 17 6.5 13.2a6 6 0 0 1 6-6 6 6 0 0 1 5.5 3.5 6 6 0 0 1 5.5-3.5 6 6 0 0 1 6 6c0 3.8-2.5 6.3-10.3 13.7z" />
      </svg>
    ),
    text: 'ליווי אישי לאורך כל התהליך',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Serum drop */}
        <path d="M18 6L9 19a9 9 0 0 0 18 0z" />
        <path d="M22 24a4.5 4.5 0 0 1-4 3.5" />
      </svg>
    ),
    text: 'מוצרים איכותיים בלבד',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Leaf / natural */}
        <path d="M9 27C9 15 21 8 29 8c0 12-8 20-20 19z" />
        <path d="M9 27c2-3 7-9 13-14" />
      </svg>
    ),
    text: 'רכיבים פעילים ואפקטיביים',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield + check */}
        <path d="M18 5L6 9v9c0 8 5.5 13 12 15.5C24.5 31 30 26 30 18V9z" />
        <path d="M13 18l4 4 7-8" />
      </svg>
    ),
    text: 'שירות אמין ומשלוח מהיר',
  },
];

export default function ProductDetail() {
  const { id = '' } = useParams();
  const product = findProduct(id);

  if (!product) {
    return (
      <main className="page pd-missing">
        <div className="container">
          <h1>המוצר לא נמצא</h1>
          <p>המוצר שביקשת אינו קיים או הוסר.</p>
          <Link to="/products" className="btn">חזרה לכל המוצרים</Link>
        </div>
      </main>
    );
  }

  const whatsappText = encodeURIComponent(
    `היי, הגעתי דרך האתר ואני מעוניינת ב${product.title}`
  );
  const whatsappUrl = `https://wa.me/972505541001?text=${whatsappText}`;

  return (
    <main className="page product-detail">
      {/* Thin hero — image only, no title */}
      <Hero image={images.heroTreatment} thin />

      {/* Product main section */}
      <section className="section pd-main">
        <div className="container pd-grid">

          {/* Right: large product image */}
          <div className="pd-image-col reveal">
            <div className="pd-image-wrap">
              <img src={product.imageUrl} alt={product.title} />
            </div>
          </div>

          {/* Left: info */}
          <div className="pd-info-col reveal">
            <span className="eyebrow">{product.brand}</span>
            <h1 className="pd-title">{product.title}</h1>
            <span className="divider" style={{ margin: '18px 0', width: 48 }} />

            {/* Buttons */}
            <div className="pd-buttons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn pd-btn-order"
                aria-label={`הזמן את ${product.title} בוואטסאפ`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 3.5A10 10 0 0 0 4.2 16.5L3 21l4.6-1.2A10 10 0 1 0 20 3.5z"/>
                </svg>
                להזמנת התכשיר לחצו כאן
              </a>
              <span className="pd-btn-stock" aria-label="המוצר במלאי">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="5"/></svg>
                במלאי
              </span>
            </div>

            {/* Description */}
            <div className="pd-desc">
              <p>{product.description}</p>
            </div>

            {/* Meta */}
            <dl className="pd-meta">
              <div className="pd-meta-row">
                <dt>קטגוריה</dt>
                <dd>{product.category}</dd>
              </div>
              <div className="pd-meta-row">
                <dt>מותג</dt>
                <dd>{product.brand}</dd>
              </div>
            </dl>

            {/* Ingredients */}
            {product.ingredients.length > 0 && (
              <div className="pd-ingredients">
                <h3>רכיבים פעילים</h3>
                <ul>
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="section section-soft pd-why">
        <div className="container">
          <h2 className="pd-why-title reveal">למה לקנות אצלנו?</h2>
          <div className="pd-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div className="pd-why-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="pd-why-icon">{item.icon}</div>
                <span className="pd-why-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead / contact */}
      <section className="section pd-lead">
        <div className="container pd-lead-inner">
          <div className="pd-lead-text reveal">
            <h2>עדיין מתלבטים?</h2>
            <p className="muted">
              לפרטים נוספים והתייעצות אישית ללא עלות השאירו פרטים ונחזור אליכם בהקדם
            </p>
          </div>
          <div className="pd-lead-form reveal">
            <ContactForm storageKey={`noam-product-${product.id}-lead`} compact />
          </div>
        </div>
      </section>
    </main>
  );
}
