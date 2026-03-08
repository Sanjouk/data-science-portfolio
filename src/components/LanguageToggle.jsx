import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={toggleLang}
      className="lang-toggle"
      aria-label={`Switch language from ${lang.toUpperCase()}`}
    >
      {lang.toUpperCase()}
    </motion.button>
  );
}
