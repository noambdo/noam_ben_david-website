import rawData from './products.json';

export interface Product {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  brand: string;
}

type RawProduct = Omit<Product, 'id'>;

/**
 * All products — source of truth is products.json.
 * An 'id' (string index) is injected here so the rest of the app
 * can use it as a URL param without touching the JSON structure.
 */
export const products: Product[] = (rawData as RawProduct[]).map((p, i) => ({
  ...p,
  id: String(i),
}));

/** Unique ordered list of product categories, derived from products.json */
export const categories: string[] = [...new Set(products.map(p => p.category))];

export const findProduct = (id: string) => products.find(p => p.id === id);
