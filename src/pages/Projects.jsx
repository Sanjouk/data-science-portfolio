import { useEffect, useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchBar from '../components/SearchBar';
import TechFilter from '../components/TechFilter';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';

export default function Projects() {
  const { t } = useLang();
  const [search, setSearch] = useState('');
  const [techFilter, setTechFilter] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSEO(t.nav.projects, t.sections.aboutMeText);
  }, [t]);

  // Collect all unique techs
  const allTechs = useMemo(() => {
    const set = new Set();
    t.projects.forEach((p) => p.tech.forEach((tech) => set.add(tech)));
    return Array.from(set).sort();
  }, [t.projects]);

  // Filter and sort projects: featured first
  const filtered = useMemo(() => {
    let list = [...t.projects];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (techFilter) {
      list = list.filter((p) => p.tech.includes(techFilter));
    }

    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return list;
  }, [t.projects, search, techFilter]);

  return (
    <div className="page">
      <section className="section">
        <SectionTitle>{t.sections.projects}</SectionTitle>

        <div className="projects-controls">
          <SearchBar value={search} onChange={setSearch} />
          <TechFilter techs={allTechs} selected={techFilter} onChange={setTechFilter} />
        </div>

        {filtered.length === 0 ? (
          <p className="no-results">{t.noResults}</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>
        )}
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
