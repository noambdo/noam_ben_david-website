import { useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { products } from '../../data/products';
import { images } from '../../data/images';
import './Products.css';

const PER_PAGE = 20; // 4 columns × 5 rows

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') ?? '';
  const page = Math.max(1, Number(searchParams.get('page') ?? '1'));

  // Scroll to top and reset page whenever the category filter changes.
  const prevCategory = useRef(category);
  useEffect(() => {
    if (prevCategory.current !== category) {
      prevCategory.current = category;
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [category]);

  const filtered = useMemo(
    () => (category ? products.filter(p => p.category === category) : products),
    [category],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const slice = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const goToPage = (p: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (p === 1) next.delete('page');
      else next.set('page', String(p));
      return next;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            title={category || 'כל המוצרים'}
            text="כל המוצרים נבחרו בקפידה ומתאימים לשימוש יומיומי בשילוב עם הטיפול בקליניקה."
          />

          <div className="products-grid">
            {slice.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Pagination current={safePage} total={totalPages} onChange={goToPage} />
        </div>
      </section>
    </main>
  );
}
