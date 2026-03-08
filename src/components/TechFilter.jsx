import { useLang } from '../context/LanguageContext';

export default function TechFilter({ techs, selected, onChange }) {
  const { t } = useLang();

  return (
    <div className="tech-filter">
      <button
        className={`tech-chip ${selected.length === 0 ? 'tech-chip--active' : ''}`}
        onClick={() => onChange('')}
      >
        {t.filterAll}
      </button>
      {techs.map((tech) => (
        <button
          key={tech}
          className={`tech-chip ${selected.includes(tech) ? 'tech-chip--active' : ''}`}
          onClick={() => onChange(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
