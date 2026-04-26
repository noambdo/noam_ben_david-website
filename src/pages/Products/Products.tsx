import { useEffect, useMemo, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import { products } from '../../data/products';
import { images } from '../../data/images';
import './Products.css';

const PER_PAGE = 20;

export default function Products() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PER_PAGE);

  const visible = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return products.slice(start, start + PER_PAGE);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const onChange = (n: number) => {
    if (n >= 1 && n <= totalPages) setPage(n);
  };

  return (
    <main className="page products">
      <Hero
        image={images.heroTreatment}
        thin
        title="המוצרים שאנחנו אוהבים"
        subtitle="מוצרי טיפוח מקצועיים ומדויקים, בשילוב עם הטיפול שלך בקליניקה."
      />

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {visible.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <Pagination current={page} total={totalPages} onChange={onChange} />
        </div>
      </section>
    </main>
  );
}
