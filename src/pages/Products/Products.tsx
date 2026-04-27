import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { products } from '../../data/products';
import { images } from '../../data/images';
import './Products.css';

export default function Products() {
  return (
    <main className="page products">
      <Hero
        image={images.heroTreatment}
        thin
        title="המוצרים שלנו"
        subtitle="מוצרי טיפוח מקצועיים בהתאמה אישית – איכות שמרגישים על העור."
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="קולקציה"
            title="כל המוצרים"
            text="כל המוצרים נבחרו בקפידה ומתאימים לשימוש יומיומי בשילוב עם הטיפול בקליניקה."
          />
          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
