import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './PersonalQuestionnaireForm.css';

interface QuestionnaireData {
  skinType: string;
  goals: string[];
  sensitivity: string;
  fullName: string;
  phone: string;
  email: string;
  imageName: string;
}

const initial: QuestionnaireData = {
  skinType: '',
  goals: [],
  sensitivity: '',
  fullName: '',
  phone: '',
  email: '',
  imageName: ''
};

const SKIN_TYPES = ['רגיל', 'יבש', 'מעורב', 'שמן'];
const GOALS = [
  'אקנה/פצעונים',
  'פיגמנטציה',
  'יובש',
  'אדמומיות/רגישות',
  'אנטי אייג׳ינג',
  'נקבוביות',
  'מיצוק',
  'עור עמום',
  'לא בטוחה'
];
const SENSITIVITY = ['מאוד רגיש', 'רגישות קלה', 'לא רגיש'];

const TOTAL_STEPS = 5;

export default function PersonalQuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useLocalStorage<QuestionnaireData>('noam-questionnaire', initial);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof QuestionnaireData>(key: K, value: QuestionnaireData[K]) =>
    setData({ ...data, [key]: value });

  const toggleGoal = (g: string) => {
    if (data.goals.includes(g)) {
      update('goals', data.goals.filter(x => x !== g));
    } else {
      update('goals', [...data.goals, g]);
    }
  };

  const canAdvance = () => {
    if (step === 1) return !!data.skinType;
    if (step === 2) return data.goals.length > 0;
    if (step === 3) return !!data.sensitivity;
    if (step === 4) return data.fullName.trim().length > 1 && data.phone.trim().length >= 6;
    return true;
  };

  const next = () => canAdvance() && setStep(s => Math.min(TOTAL_STEPS, s + 1));
  const prev = () => setStep(s => Math.max(1, s - 1));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) update('imageName', file.name);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Questionnaire] payload:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pq-success">
        <h3>תודה רבה!</h3>
        <p>השאלון נשלח בהצלחה. אחזור אלייך בהקדם עם המלצה אישית.</p>
      </div>
    );
  }

  return (
    <form className="pq" onSubmit={submit} noValidate>
      <div className="pq-progress">
        <div className="pq-progress-bar" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
      </div>
      <div className="pq-step-meta">
        שלב {step} מתוך {TOTAL_STEPS}
      </div>

      {step === 1 && (
        <div className="pq-step">
          <h3>מה סוג העור שלך?</h3>
          <div className="pq-options">
            {SKIN_TYPES.map(opt => (
              <button
                type="button"
                key={opt}
                className={`pq-opt ${data.skinType === opt ? 'selected' : ''}`}
                onClick={() => update('skinType', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="pq-step">
          <h3>מה מטרת הטיפול?</h3>
          <p className="muted">ניתן לבחור יותר מאופציה אחת</p>
          <div className="pq-options pq-options-grid">
            {GOALS.map(opt => (
              <button
                type="button"
                key={opt}
                className={`pq-opt ${data.goals.includes(opt) ? 'selected' : ''}`}
                onClick={() => toggleGoal(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="pq-step">
          <h3>מה רמת הרגישות של העור שלך?</h3>
          <div className="pq-options">
            {SENSITIVITY.map(opt => (
              <button
                type="button"
                key={opt}
                className={`pq-opt ${data.sensitivity === opt ? 'selected' : ''}`}
                onClick={() => update('sensitivity', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="pq-step">
          <h3>פרטים אישיים</h3>
          <label className="cf-field">
            <span>שם מלא</span>
            <input
              type="text"
              value={data.fullName}
              onChange={e => update('fullName', e.target.value)}
              required
            />
          </label>
          <label className="cf-field">
            <span>טלפון</span>
            <input
              type="tel"
              value={data.phone}
              onChange={e => update('phone', e.target.value)}
              required
            />
          </label>
          <label className="cf-field">
            <span>אימייל (אופציונלי)</span>
            <input
              type="email"
              value={data.email}
              onChange={e => update('email', e.target.value)}
            />
          </label>
        </div>
      )}

      {step === 5 && (
        <div className="pq-step">
          <h3>רוצה לצרף תמונה?</h3>
          <p className="muted">צירוף תמונה יכול לעזור לאבחון ראשוני מדויק יותר, אבל זה ממש לא חובה.</p>
          <label className="pq-upload">
            <input type="file" accept="image/*" onChange={handleFile} />
            <span>{data.imageName || 'בחירת תמונה'}</span>
          </label>
        </div>
      )}

      <div className="pq-nav">
        {step > 1 && (
          <button type="button" className="btn btn-outline" onClick={prev}>הקודם</button>
        )}
        {step < TOTAL_STEPS && (
          <button
            type="button"
            className="btn"
            onClick={next}
            disabled={!canAdvance()}
          >
            הבא
          </button>
        )}
        {step === TOTAL_STEPS && (
          <button type="submit" className="btn">שלח/י פרטים</button>
        )}
      </div>
    </form>
  );
}
