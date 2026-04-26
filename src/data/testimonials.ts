export interface Testimonial {
  id: string;
  stars: number;
  title: string;
  text: string;
  name: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    stars: 5,
    title: 'חוויה מקצועית ונעימה',
    text: 'נועם הייתה קשובה, מדויקת ועדינה. הרגשתי שאני בידיים טובות והתוצאה הייתה טבעית וזוהרת.',
    name: 'מעיין'
  },
  {
    id: 't2',
    stars: 5,
    title: 'ליווי אישי באמת',
    text: 'מעבר לטיפול עצמו, קיבלתי הסבר מקיף, המלצות לבית ויחס חם. ההבדל בעור היה מורגש כבר אחרי הטיפול הראשון.',
    name: 'תמר'
  },
  {
    id: 't3',
    stars: 5,
    title: 'מקצועיות ברמה גבוהה',
    text: 'הגעתי עם בעיות אקנה ולאחר תהליך מסודר העור שלי נראה אחרת לגמרי. נועם היא מטפלת מצוינת.',
    name: 'שירה'
  },
  {
    id: 't4',
    stars: 5,
    title: 'תוצאה טבעית ויפה',
    text: 'הרגשתי שיש לה הבנה אמיתית של העור שלי. כל שלב הוסבר לי, וזה גרם לי להיות בטוחה לאורך כל התהליך.',
    name: 'נועה'
  },
  {
    id: 't5',
    stars: 5,
    title: 'חוויה מפנקת',
    text: 'הקליניקה מהממת, האווירה רגועה, והטיפול עצמו מדויק ומעודן. אני כבר קבעתי את הפעם הבאה.',
    name: 'דנה'
  }
];

export const beforeAfterCategories = [
  {
    id: 'acne',
    title: 'טיפול פנים לאקנה',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    id: 'antiage',
    title: 'טיפול פנים אנטי אייג\'ינג',
    images: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    id: 'firming',
    title: 'טיפול מיצוק והידוק העור',
    images: [
      'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    id: 'couperose',
    title: 'הסרת נימי דם (קופרוז)',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];
