import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import { images } from '../../data/images';

export default function About() {
  return (
    <main className="page about">
      <Hero
        image={images.heroAbout}
        eyebrow="הכירי אותי"
        title="אודות נועם בן דוד"
        subtitle="קוסמטיקאית ומטפלת פנים, עם דגש על התאמה אישית, מקצועיות ויחס חם."
      />

      <ImageTextSection
        image={images.noamPortrait}
        imageAlt="נועם בן דוד"
        eyebrow="הסיפור שלי"
        title="המסע שלי"
      >
        <p>
          האהבה שלי לעולם טיפוח העור התחילה ממקום מאוד אישי, מהרצון להבין איך אפשר לגרום לעור להיראות בריא, רגוע וזוהר באמת, בלי הבטחות מוגזמות ובלי פתרונות "קסם".
        </p>
        <p>
          אני קוסמטיקאית ומטפלת פנים, והגישה שלי מבוססת על דבר אחד פשוט: התאמה אישית. אין שני סוגי עור זהים ואין טיפול אחד שמתאים לכולן. לכן כל תהליך מתחיל באבחון מדויק והבנה של הצרכים, המצב הנוכחי והמטרות שלך.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={images.noamProduct}
        imageAlt="מקצועיות וידע"
        eyebrow="הכשרה"
        title="מקצועיות, ידע והתפתחות"
        reverse
      >
        <p>
          את ההכשרה המקצועית שלי קיבלתי אצל חווה זינגבויים, שם למדתי לעומק את יסודות טיפולי הפנים ואת החשיבות של עבודה מדויקת ומבוססת ידע.
        </p>
        <p>
          מאז אני ממשיכה ללמוד ולהתפתח, משתלמת בקורסים מקצועיים ומתעדכנת בשיטות וטכנולוגיות חדשות כדי לתת לך את הטיפול הכי נכון, מדויק ובטוח לעור שלך.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={images.clinicRoom}
        imageAlt="חדר הטיפולים"
        eyebrow="הגישה שלי"
        title="טיפול שהוא מעבר לעור"
      >
        <p>
          עור הפנים שלנו מושפע מהרבה דברים כמו לחץ, תזונה, שינה והורמונים. לכן מבחינתי טיפול טוב לא נגמר רק בקליניקה. אני שמה דגש גם על הכוונה להמשך בבית עם המלצות מותאמות אישית שיעזרו לשמור על התוצאות לאורך זמן.
        </p>
        <p>
          אני לא מאמינה בטיפולים מיותרים או בגישה של לנסות הכל. כשמטפלים נכון, רואים תוצאות.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={images.noamPortrait}
        imageAlt="ליווי מקצועי"
        eyebrow="חוויית הטיפול"
        title="יחס אישי וליווי מקצועי"
        reverse
      >
        <p>
          כל מי שמגיעה אליי מקבלת יחס אישי, סבלנות וליווי לאורך כל הדרך. חשוב לי שתרגישי בנוח, שתביני מה אנחנו עושות ולמה, ושיהיה לך מקום לשאול ולהתייעץ גם אחרי הטיפול.
        </p>
        <p>
          המטרה שלי היא לא רק לשפר את מראה העור שלך, אלא לגרום לך להרגיש טוב עם עצמך, טבעית ובטוחה.
        </p>
        <p>
          אני מזמינה אותך להגיע, להכיר ולהתחיל תהליך שמתאים בדיוק לך 🤍
          <br />
          <em>באהבה, נועם בן דוד</em>
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={images.questionnaire}
        imageAlt="שאלון התאמה אישית"
        eyebrow="התחלת תהליך"
        title="שאלון התאמה אישית"
        cta={<Link to="/questionnaire" className="btn">למילוי השאלון</Link>}
      >
        <p>
          לא בטוחה איזה טיפול מתאים לך? השאלון יעזור לנו להבין את מצב העור והמטרה שלך ולהכווין אותך בצורה מדויקת יותר.
        </p>
      </ImageTextSection>
    </main>
  );
}
