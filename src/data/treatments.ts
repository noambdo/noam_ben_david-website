export type TreatmentCategory = 'facial' | 'tech' | 'special';

export interface Treatment {
  slug: string;
  title: string;
  category: TreatmentCategory;
  shortDescription: string;
  fullDescription: string[];
  heroImage: string;
  relatedTreatmentSlugs: string[];
}

const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1800&q=80';
const PLACEHOLDER_HERO_2 = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=80';
const PLACEHOLDER_HERO_3 = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1800&q=80';

export const treatments: Treatment[] = [
  {
    slug: 'classic-facial',
    title: 'טיפול פנים קלאסי לניקוי עמוק וחידוש העור',
    category: 'facial',
    shortDescription: 'ניקוי עמוק, פילינג עדין וחידוש זוהר טבעי לעור.',
    fullDescription: [
      'טיפול פנים קלאסי הוא הבסיס לכל שגרת טיפוח נכונה. הטיפול מתחיל באבחון יסודי של מצב העור, ניקוי עדין, פילינג בהתאמה אישית, ניקוי קומדונים מקצועי ולסיום מסכה ייעודית שמרגיעה ומחזירה זוהר.',
      'המטרה היא לאזן את העור, לפתוח נקבוביות סתומות ולהשאיר אותך עם תחושה של עור נקי, רענן וטבעי. אני בוחרת בכל שלב את החומרים שמתאימים בדיוק לעור שלך, כך שהתוצאה תהיה עדינה אבל אפקטיבית.'
    ],
    heroImage: PLACEHOLDER_HERO,
    relatedTreatmentSlugs: ['hydration-facial', 'anti-aging-facial', 'acne-facial']
  },
  {
    slug: 'hydration-facial',
    title: 'טיפול החדרת לחויות',
    category: 'facial',
    shortDescription: 'טיפול עומק שמחזיר לעור לחות, רכות וזוהר בריא.',
    fullDescription: [
      'טיפול החדרת לחויות מיועד לעור יבש, עייף או כזה שאיבד את המראה הזוהר שלו. אני משלבת סרומים עתירי חומצה היאלורונית וטכניקות החדרה עדינות שמסייעות ללחות לחדור עמוק לרבדי העור.',
      'התוצאה היא עור גמיש, מלא, רגוע ובעל מראה צעיר וטבעי, ללא תחושה של "עומס" על העור.'
    ],
    heroImage: PLACEHOLDER_HERO_2,
    relatedTreatmentSlugs: ['classic-facial', 'skin-booster', 'anti-aging-facial']
  },
  {
    slug: 'pregnancy-facial',
    title: 'טיפול פנים להריוניות',
    category: 'facial',
    shortDescription: 'טיפול עדין ובטוח המותאם לשינויים של תקופת ההריון.',
    fullDescription: [
      'בתקופת ההריון העור עובר שינויים הורמונליים שמשפיעים על הלחות, הרגישות ולעיתים גם על הפיגמנטציה. הטיפול בנוי מחומרים בטוחים ועדינים בלבד, ללא חומרים פעילים שאינם מומלצים בהריון.',
      'מדובר בטיפול שמשלב הרגעה, איזון ולחות עמוקה, עם דגש על חוויה רגועה ונעימה במיוחד.'
    ],
    heroImage: PLACEHOLDER_HERO_3,
    relatedTreatmentSlugs: ['hydration-facial', 'classic-facial']
  },
  {
    slug: 'anti-aging-facial',
    title: 'טיפול פנים אנטי אייג\'ינג',
    category: 'facial',
    shortDescription: 'טיפול ממוקד למניעת סימני זמן ושיפור מרקם העור.',
    fullDescription: [
      'טיפול אנטי אייג\'ינג משלב חומרים פעילים שמעודדים יצור קולגן, מחדדים את מרקם העור ומפחיתים מראה של קווים דקים. כל פרוטוקול מותאם לסוג העור, הגיל והצרכים האישיים שלך.',
      'בסיום הטיפול העור נראה מוצק יותר, חלק יותר ובעל מראה צעיר ובריא.'
    ],
    heroImage: PLACEHOLDER_HERO,
    relatedTreatmentSlugs: ['microneedling', 'exosomes', 'firming']
  },
  {
    slug: 'acne-facial',
    title: 'טיפול פנים לאקנה',
    category: 'facial',
    shortDescription: 'טיפול ממוקד באקנה פעיל, איזון העור והרגעת דלקות.',
    fullDescription: [
      'אקנה הוא לא רק עניין של הופעת פצעונים, אלא של איזון כולל של העור. הטיפול שלי משלב פילינג עדין, ניקוי מקצועי ושימוש בחומרים פעילים שמטרתם להרגיע, לאזן ולהפחית הופעת פצעונים חדשים.',
      'במקביל אבנה איתך שגרת טיפוח ביתית שתעזור לשמור על תוצאות לאורך זמן.'
    ],
    heroImage: PLACEHOLDER_HERO_2,
    relatedTreatmentSlugs: ['back-acne', 'classic-facial', 'microneedling']
  },
  {
    slug: 'couperose',
    title: 'הסרת נימי דם (קופרוז)',
    category: 'tech',
    shortDescription: 'טיפול מדויק להפחתת נימי דם זעירים ואדמומיות.',
    fullDescription: [
      'נימי דם זעירים על הפנים יכולים להופיע מסיבות שונות כגון רגישות, חשיפה לשמש או נטייה גנטית. בעזרת טכנולוגיה מדויקת ניתן לטפל בנימים אלו בצורה ממוקדת ועדינה, ללא פגיעה בעור הסובב.',
      'הטיפול מתאים לעור רגיש ומאפשר שיפור הדרגתי במראה הכללי של העור.'
    ],
    heroImage: PLACEHOLDER_HERO_3,
    relatedTreatmentSlugs: ['firming', 'skin-booster', 'classic-facial']
  },
  {
    slug: 'tattoo-removal',
    title: 'הסרת קעקועים',
    category: 'special',
    shortDescription: 'הסרה מקצועית והדרגתית של קעקועים קוסמטיים ורגילים.',
    fullDescription: [
      'הסרת קעקועים היא תהליך הדרגתי שדורש דיוק וסבלנות. אני אבנה איתך תוכנית טיפולים מותאמת לסוג הקעקוע, הצבע והעומק שלו, ואלווה אותך לאורך כל הדרך.',
      'בסיום כל מפגש תקבלי הוראות ברורות לטיפוח העור עד למפגש הבא.'
    ],
    heroImage: PLACEHOLDER_HERO,
    relatedTreatmentSlugs: ['skin-tags', 'couperose']
  },
  {
    slug: 'skin-tags',
    title: 'הסרת סרחי עור',
    category: 'special',
    shortDescription: 'הסרה עדינה ומדויקת של סרחי עור בפנים ובגוף.',
    fullDescription: [
      'סרחי עור הם גידולים שפירים קטנים שמופיעים לעיתים בצוואר, בפנים או בגוף. הטיפול מתבצע בשיטה עדינה ומדויקת תוך שמירה מירבית על העור הסובב.',
      'התוצאה היא עור חלק יותר ונקי יותר, עם החלמה מהירה.'
    ],
    heroImage: PLACEHOLDER_HERO_2,
    relatedTreatmentSlugs: ['tattoo-removal', 'couperose']
  },
  {
    slug: 'microneedling',
    title: 'מיקרונידלינג',
    category: 'tech',
    shortDescription: 'חידוש העור באמצעות גירוי קולגן מבוקר ומדויק.',
    fullDescription: [
      'מיקרונידלינג הוא טיפול שמעודד את העור לייצר קולגן ואלסטין באמצעות גירוי מבוקר. הטיפול מסייע בטיפול בצלקות אקנה, נקבוביות מורחבות וקווים דקים, תוך שיפור משמעותי במרקם העור.',
      'מדובר באחד הטיפולים האפקטיביים ביותר לחידוש עור טבעי וארוך טווח.'
    ],
    heroImage: PLACEHOLDER_HERO_3,
    relatedTreatmentSlugs: ['exosomes', 'skin-booster', 'anti-aging-facial']
  },
  {
    slug: 'exosomes',
    title: 'אקסוזומים',
    category: 'tech',
    shortDescription: 'טיפול חדשני שמעודד התחדשות תאית עמוקה.',
    fullDescription: [
      'אקסוזומים הם נשאי תקשורת תאית המעודדים את העור להתחדש מבפנים. בשילוב עם מיקרונידלינג או כטיפול עצמאי, התוצאות כוללות שיפור במראה הכללי, חיוניות ואיכות העור.',
      'מתאים במיוחד למי שמחפשת תוצאה טבעית ומשמעותית ללא התערבות פולשנית.'
    ],
    heroImage: PLACEHOLDER_HERO,
    relatedTreatmentSlugs: ['microneedling', 'skin-booster', 'firming']
  },
  {
    slug: 'skin-booster',
    title: 'סקין בוסטר',
    category: 'tech',
    shortDescription: 'הזרקות עדינות של חומצה היאלורונית להחזרת זוהר ולחות.',
    fullDescription: [
      'סקין בוסטר הוא טיפול עדין שמעניק לעור לחות, גמישות וזוהר טבעי. בשונה מטיפולים נפחיים, המטרה כאן היא לשפר את איכות העור עצמו.',
      'הטיפול מתאים למי שמחפשת מראה טבעי, רענן ובריא.'
    ],
    heroImage: PLACEHOLDER_HERO_2,
    relatedTreatmentSlugs: ['hydration-facial', 'microneedling', 'anti-aging-facial']
  },
  {
    slug: 'back-acne',
    title: 'טיפול לאקנה בגב',
    category: 'special',
    shortDescription: 'טיפול ממוקד לאקנה והופעת פצעונים באזור הגב.',
    fullDescription: [
      'אקנה בגב מצריך גישה אחרת מאקנה בפנים. הטיפול משלב ניקוי מקצועי, פילינגים ייעודיים והכוונה לטיפוח ביתי שמתאים לאזור.',
      'המטרה היא להפחית פצעונים פעילים, להרגיע דלקות ולמנוע צלקות.'
    ],
    heroImage: PLACEHOLDER_HERO_3,
    relatedTreatmentSlugs: ['acne-facial', 'classic-facial']
  },
  {
    slug: 'bridal',
    title: 'טיפול בכלה',
    category: 'special',
    shortDescription: 'תוכנית טיפולים מותאמת אישית לקראת היום הגדול.',
    fullDescription: [
      'טיפול הכלה הוא תהליך, לא מפגש בודד. אני אבנה איתך תוכנית טיפולים שתתחיל מספר חודשים לפני האירוע, על מנת להגיע ליום החתונה עם עור בריא, זוהר ויציב.',
      'הטיפולים יותאמו לסוג העור, למצב הנוכחי ולמטרות שלך.'
    ],
    heroImage: PLACEHOLDER_HERO,
    relatedTreatmentSlugs: ['hydration-facial', 'anti-aging-facial', 'classic-facial']
  },
  {
    slug: 'firming',
    title: 'טיפול מיצוק והידוק העור',
    category: 'tech',
    shortDescription: 'שיפור מוצקות העור וחיזוק קווי המתאר.',
    fullDescription: [
      'טיפולי מיצוק עובדים על שכבות עומק של העור, מעודדים יצור קולגן ומחזקים את גמישות העור. בשילוב נכון של טכנולוגיות, ניתן לקבל מראה מוצק יותר וחד יותר, באופן הדרגתי וטבעי.',
      'הטיפול מתאים גם כתחזוקה למי שמעוניינת לשמר את מראה העור הצעיר לאורך זמן.'
    ],
    heroImage: PLACEHOLDER_HERO_2,
    relatedTreatmentSlugs: ['microneedling', 'exosomes', 'anti-aging-facial']
  }
];

export const treatmentColumns = {
  facial: {
    title: 'טיפולי פנים',
    slugs: ['classic-facial', 'hydration-facial', 'pregnancy-facial', 'anti-aging-facial', 'acne-facial']
  },
  tech: {
    title: 'טכנולוגיות מתקדמות',
    slugs: ['microneedling', 'exosomes', 'skin-booster', 'firming', 'couperose']
  },
  special: {
    title: 'טיפולים ייעודיים',
    slugs: ['back-acne', 'bridal', 'tattoo-removal', 'skin-tags']
  }
};

export const findTreatment = (slug: string) =>
  treatments.find(t => t.slug === slug);
