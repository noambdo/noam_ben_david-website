import { Link, useParams } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';
import { findProduct } from '../../data/products';
import { images } from '../../data/images';
import './ProductDetail.css';

const WHY_ITEMS = [
  { icon: '✓', text: 'אבחון מקצועי והתאמה אישית' },
  { icon: '✓', text: 'ליווי אישי לאורך כל התהליך' },
  { icon: '✓', text: 'מוצרים איכותיים בלבד' },
  { icon: '✓', text: 'משלוח מהיר לכל הארץ' },
  { icon: '✓', text: 'שירות אישי ואמין' },
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
      {/* Thin hero */}
      <Hero
        image={images.heroTreatment}
        thin
        title={product.title}
        eyebrow={product.category}
      />

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
              <div className="pd-why-item reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="pd-why-icon">{item.icon}</span>
                <span>{item.text}</span>
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
