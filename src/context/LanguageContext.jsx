import { createContext, useContext, useState } from 'react';
import { portfolio } from '../data/portfolio';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'fr';
    }
    return 'fr';
  });

  const toggleLang = () => {
    setLang((l) => {
      const cycle = { fr: 'en', en: 'ru', ru: 'ua', ua: 'fr' };
      const next = cycle[l] || 'fr';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = portfolio[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
