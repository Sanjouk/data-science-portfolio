import { Search } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function SearchBar({ value, onChange }) {
  const { t } = useLang();

  return (
    <div className="search-bar">
      <Search size={18} className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.search}
        className="search-input"
        aria-label={t.search}
      />
    </div>
  );
}
