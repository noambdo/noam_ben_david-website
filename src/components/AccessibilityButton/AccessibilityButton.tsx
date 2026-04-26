import { useEffect, useState } from 'react';
import './AccessibilityButton.css';

interface A11ySettings {
  largeText: boolean;
  highContrast: boolean;
  underlineLinks: boolean;
}

const initial: A11ySettings = {
  largeText: false,
  highContrast: false,
  underlineLinks: false
};

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(() => {
    try {
      const stored = localStorage.getItem('noam-a11y');
      return stored ? JSON.parse(stored) : initial;
    } catch { return initial; }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('a11y-large', settings.largeText);
    root.classList.toggle('a11y-contrast', settings.highContrast);
    root.classList.toggle('a11y-links', settings.underlineLinks);
    localStorage.setItem('noam-a11y', JSON.stringify(settings));
  }, [settings]);

  const toggle = (key: keyof A11ySettings) =>
    setSettings(s => ({ ...s, [key]: !s[key] }));

  return (
    <>
      <button
        className="a11y-button"
        aria-label="הגדרות נגישות"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4.5" r="2"/>
          <path d="M19 8.5h-5v3l1.5 9h-2L12 14l-1.5 6.5h-2L10 11.5v-3H5v-2h14v2z"/>
        </svg>
      </button>
      {open && (
        <div className="a11y-panel" role="dialog" aria-label="תפריט נגישות">
          <h4>נגישות</h4>
          <button onClick={() => toggle('largeText')} className={settings.largeText ? 'on' : ''}>
            הגדלת טקסט
          </button>
          <button onClick={() => toggle('highContrast')} className={settings.highContrast ? 'on' : ''}>
            ניגודיות גבוהה
          </button>
          <button onClick={() => toggle('underlineLinks')} className={settings.underlineLinks ? 'on' : ''}>
            קווי קישור
          </button>
          <button onClick={() => setSettings(initial)} className="reset">איפוס</button>
        </div>
      )}
    </>
  );
}
