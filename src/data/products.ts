export interface Product {
  id: string;          // array index as string – used as URL param
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  brand: string;
}

const raw = [
  {
    title: 'אקנה ביו',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_אקנה-ביו.jpg',
    description: 'תכשיר ברמה גבוהה ביותר אשר מטפל בפרק זמן קצר מאוד בפצעים. מטפל באקנה ומשאיר את העור חלק ללא פצעונים. פעילות המוצר בעור היא אנטי בקטריאלית. המוצר לא ניתן לשימוש לנשים בתקופת הריון / הנקה',
    ingredients: [
      'EPILOBIUM ANGUSTIFOLIUM FLOWER/LEAF/STEM EXTRACT – אנטי חיידקי',
      'PSORALEA CORYLIFOLIA ALEURITES MOLUCCANA – אנטי חיידקי',
      'HIPPOPHAE RHAMNOIDES FRUIT – מניעה התפתחות פצעונים',
      'BRASSICA NAPUS – טיפול בפצעים'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'אקנה טריפל ג׳ל',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_טירפל-גל.jpg',
    description: 'תכשיר בעל מרקם ג\'לי ולא שומני המטפל בפצעים וממתן יצור סבום יתר. מתאים לאקנה עם פצעונים ואקנה קומודוגני.',
    ingredients: [
      'SALIX NIGRA (WILLOW) BARK EXTRACT',
      'SEBACIC ACID',
      'DIPOTASSIUM GLYCYRRHIZATE',
      'ADIPIC ACID',
      'GLYCOLIC ACID'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'אקנה ריפייר ליקוויד',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/Acn.E-Repair-Liquid-4642-scaled.jpg',
    description: 'מיועד לאקנה קומודוגני. מחדש בעדינות את העור, פותח נקבוביות, מטפל בקומודונים ושומן תת עורי. לא לשימוש בהריון/הנקה.',
    ingredients: [
      'ADIPIC ACID',
      'SEBACIC ACID',
      'RETINYL TALLATE'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'אקנה סופר ליקוויד',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/Acn.E-Super-Liquid-4648-913x1024.jpg',
    description: 'תכשיר חזק לטיפול באקנה וציסטות. מייבש פצעים במהירות ומונע הופעת חדשים.',
    ingredients: [
      'SEBACIC ACID',
      'SALIX ALBA (WILLOW) EXTRACT',
      'LACTIC ACID'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'סופר ליקוויד פורטה לגוף',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_אקנה-סופר-ליקוויד-פורטה.jpg',
    description: 'מיועד לעור הגוף בלבד. מחדש עור, פותח נקבוביות, מטפל בנודולות ומייבש פצעים.',
    ingredients: [
      'ADIPIC ACID',
      'SEBACIC ACID',
      'RETINYL TALLATE'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'טונר לטיפול בעור שמן',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_טונר.jpg',
    description: 'נוזל חומצי לניקוי שומניות יתר, חיטוי וייבוש פצעונים.',
    ingredients: [
      'SALIX NIGRA EXT',
      'SESAMUM INDICUM EXT',
      'CIMICIFUGA EXT',
      'SALICYLIC ACID'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'מסכה לעור בעייתי',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_מסכה-לעור-בעייתי.jpg',
    description: 'מסכה עם פעולה משולשת: ניקוי, איזון וריפוי.',
    ingredients: [
      'ZINC OXYDE',
      'MULBERRY EXT',
      'MORUS EXT',
      'ALOE EXT',
      'CYCLODEXTRIN'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'לחות אולטרה לעור שמן',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/%D7%9C%D7%97%D7%95%D7%AA-%D7%A7%D7%9C%D7%99%D7%A8.png',
    description: 'קרם לחות לעור שמן, מעניק לחות ומאזן שומן.',
    ingredients: [
      'Glycerin',
      'Alternifolia Leaf',
      'Dimethicone',
      'Squalene',
      'Aloe Arborescens'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'קצף ניקוי עמוק לעור בעייתי',
    category: 'אקנה ועור בעייתי',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/foam.png',
    description: 'קצף ניקוי יסודי שלא פוגע בלחות הטבעית של העור.',
    ingredients: [],
    brand: 'Dermalosophy'
  },
  {
    title: 'CLEAR SOFT SPF 50 M PREVENT',
    category: 'בלוק 50 SPF שקוף עם מדכא מלנין',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/11/resize_קליר-סופא-הגנה-אריזה.jpg',
    description: 'קרם הגנה SPF50 עם עיכוב מלנין והגנה מפני אור כחול.',
    ingredients: [
      'Isohexadecane',
      'Octocrylene',
      'Ethylhexyl Salicylate',
      'Aloe Barbadensis',
      'Silica'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'Block 50 Moisturizer SPF',
    category: 'הגנה מהשמש',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/11/resize_קליר-סופא-הגנה-אריזה.jpg',
    description: 'קרם לחות עם SPF50 להגנה מפני השמש.',
    ingredients: [
      'Homosalate',
      'Diethylamino Hydroxybenzoyl',
      'Methoxycinnamate'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'Block SPF 50 Demi Make Up',
    category: 'הגנה מהשמש',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/Demi-Make-Up-Moisturizing-and-Protection-SPF-50-4637-1-763x1024.jpg',
    description: 'קרם הגנה עם גוון עדין המתאים את עצמו לעור.',
    ingredients: [
      'Water',
      'Citric Acid',
      'Diethylamino'
    ],
    brand: 'Dermalosophy'
  },
  {
    title: 'Deep Moist SPF 25',
    category: 'הגנה מהשמש',
    imageUrl: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/resize_הגנה-25.jpg',
    description: 'קרם לחות עם SPF25 לעור שמן עד רגיל.',
    ingredients: [
      'Water',
      'Isohexadecane',
      'Carbonate'
    ],
    brand: 'Dermalosophy'
  }
];

export const products: Product[] = raw.map((p, i) => ({ ...p, id: String(i) }));

export const findProduct = (id: string) => products.find(p => p.id === id);
