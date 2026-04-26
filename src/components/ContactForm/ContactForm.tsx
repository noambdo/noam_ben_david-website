import { FormEvent, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './ContactForm.css';

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  agree: boolean;
}

const initial: ContactFormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
  agree: false
};

interface Props {
  storageKey?: string;
  compact?: boolean;
}

export default function ContactForm({ storageKey = 'noam-contact-form', compact }: Props) {
  const [data, setData] = useLocalStorage<ContactFormState>(storageKey, initial);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) =>
    setData({ ...data, [key]: value });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('[ContactForm] submit payload:', data);
    setSubmitted(true);
    setData(initial);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <form className={`contact-form ${compact ? 'compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="cf-row">
        <label className="cf-field">
          <span>שם</span>
          <input
            type="text"
            value={data.name}
            onChange={e => update('name', e.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className="cf-field">
          <span>מספר טלפון</span>
          <input
            type="tel"
            value={data.phone}
            onChange={e => update('phone', e.target.value)}
            required
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="cf-field">
        <span>אימייל</span>
        <input
          type="email"
          value={data.email}
          onChange={e => update('email', e.target.value)}
          autoComplete="email"
        />
      </label>

      <label className="cf-field">
        <span>הודעה</span>
        <textarea
          rows={4}
          value={data.message}
          onChange={e => update('message', e.target.value)}
        />
      </label>

      <label className="cf-checkbox">
        <input
          type="checkbox"
          checked={data.agree}
          onChange={e => update('agree', e.target.checked)}
        />
        <span>אני מאשר/ת קבלת תכנים שיווקיים מנועם בן דוד</span>
      </label>

      <button type="submit" className="btn cf-submit">שלח</button>

      {submitted && (
        <div className="cf-success" role="status">
          תודה! פנייתך התקבלה ואחזור אלייך בהקדם.
        </div>
      )}
    </form>
  );
}
