import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import './ProductCard.css';

interface Props { product: Product; }

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card reveal"
      aria-label={`${product.title} – פרטים נוספים`}
    >
      <div className="pc-image-wrap">
        <img src={product.imageUrl} alt={product.title} loading="lazy" />
        <div className="pc-overlay" aria-hidden="true">
          <span>פרטים נוספים</span>
        </div>
      </div>

      <div className="pc-info">
        <span className="pc-category">{product.category}</span>
        <h4 className="pc-name">{product.title}</h4>
        <span className="pc-brand">{product.brand}</span>
      </div>
    </Link>
  );
}
