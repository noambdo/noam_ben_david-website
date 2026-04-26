export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80';
const PLACEHOLDER_2 = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
const PLACEHOLDER_3 = 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=800&q=80';

const baseProducts: Omit<Product, 'id'>[] = [
  { name: '24 Moist & Glow Serum', category: 'סרום לחות', image: PLACEHOLDER },
  { name: 'Vitamin C Brightening', category: 'סרום הבהרה', image: PLACEHOLDER_2 },
  { name: 'Hyaluronic Hydra Cream', category: 'קרם לחות', image: PLACEHOLDER_3 },
  { name: 'Retinol Night Renewal', category: 'טיפול לילה', image: PLACEHOLDER },
  { name: 'Gentle Cleansing Foam', category: 'סבון פנים', image: PLACEHOLDER_2 },
  { name: 'Calming Toner', category: 'טונר', image: PLACEHOLDER_3 },
  { name: 'Anti-Aging Eye Cream', category: 'קרם עיניים', image: PLACEHOLDER },
  { name: 'SPF 50 Daily Shield', category: 'הגנה מהשמש', image: PLACEHOLDER_2 },
  { name: 'Niacinamide 10%', category: 'סרום מאזן', image: PLACEHOLDER_3 },
  { name: 'AHA Exfoliating Peel', category: 'פילינג', image: PLACEHOLDER },
  { name: 'Soothing Recovery Mask', category: 'מסכה', image: PLACEHOLDER_2 },
  { name: 'Collagen Boost Serum', category: 'סרום אנטי אייג\'ינג', image: PLACEHOLDER_3 },
  { name: 'Pore Refining Toner', category: 'טונר ממקד', image: PLACEHOLDER },
  { name: 'Deep Repair Cream', category: 'קרם לילה', image: PLACEHOLDER_2 },
  { name: 'Hydra Glow Mist', category: 'מיסט פנים', image: PLACEHOLDER_3 },
  { name: 'Acne Spot Treatment', category: 'טיפול ממוקד', image: PLACEHOLDER },
  { name: 'Brightening Mask', category: 'מסכת הבהרה', image: PLACEHOLDER_2 },
  { name: 'Lip Renewal Balm', category: 'טיפוח שפתיים', image: PLACEHOLDER_3 },
  { name: 'Antioxidant Booster', category: 'סרום נוגד חמצון', image: PLACEHOLDER },
  { name: 'Firming Neck Cream', category: 'מיצוק', image: PLACEHOLDER_2 },
  { name: 'Micellar Cleansing Water', category: 'מסיר איפור', image: PLACEHOLDER_3 },
  { name: 'Peptide Eye Serum', category: 'סרום עיניים', image: PLACEHOLDER },
  { name: 'Sensitive Skin Cream', category: 'עור רגיש', image: PLACEHOLDER_2 },
  { name: 'Dermal Repair Complex', category: 'תיקון עור', image: PLACEHOLDER_3 },
  { name: 'Glow Drops', category: 'טיפות זוהר', image: PLACEHOLDER },
  { name: 'Charcoal Detox Mask', category: 'מסכת ניקוי', image: PLACEHOLDER_2 },
  { name: 'Hydra Eye Patches', category: 'מדבקות עיניים', image: PLACEHOLDER_3 },
  { name: 'Anti-Redness Serum', category: 'סרום להרגעת אדמומיות', image: PLACEHOLDER },
  { name: 'Daily Moisturizer', category: 'קרם יום', image: PLACEHOLDER_2 },
  { name: 'Vitamin E Body Oil', category: 'שמן גוף', image: PLACEHOLDER_3 },
  { name: 'Renewal Body Lotion', category: 'תחליב גוף', image: PLACEHOLDER },
  { name: 'Lash & Brow Serum', category: 'סרום לריסים', image: PLACEHOLDER_2 },
  { name: 'Lifting Sheet Mask', category: 'מסכת הרמה', image: PLACEHOLDER_3 },
  { name: 'Pure Hyaluronic 2%', category: 'סרום היאלורוני', image: PLACEHOLDER },
  { name: 'Bakuchiol Booster', category: 'אלטרנטיבת רטינול', image: PLACEHOLDER_2 },
  { name: 'Caffeine Eye Roll-On', category: 'טיפול עיניים', image: PLACEHOLDER_3 },
  { name: 'Body Exfoliant', category: 'פילינג גוף', image: PLACEHOLDER },
  { name: 'Multi Vitamin Cream', category: 'קרם רב ויטמיני', image: PLACEHOLDER_2 },
  { name: 'Pigmentation Corrector', category: 'תיקון פיגמנטציה', image: PLACEHOLDER_3 },
  { name: 'Soft Glow Primer', category: 'פריימר זוהר', image: PLACEHOLDER }
];

export const products: Product[] = baseProducts.map((p, i) => ({
  ...p,
  id: `prd-${i + 1}`
}));
