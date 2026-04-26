import type { Product } from '../../data/products';
import './ProductCard.css';

interface Props { product: Product; }

export default function ProductCard({ product }: Props) {
  return (
    <article className="product-card reveal">
      <div className="pc-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="pc-info">
        <span className="pc-category">{product.category}</span>
        <h4 className="pc-name">{product.name}</h4>
      </div>
    </article>
  );
}
