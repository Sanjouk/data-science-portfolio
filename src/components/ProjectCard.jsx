import { motion } from 'framer-motion';
import Badge from './Badge';
import { Github } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="project-card"
      onClick={() => onOpen && onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen && onOpen(project)}
    >
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title}</h3>
        {project.featured && <span className="project-card-featured">★</span>}
      </div>
      <p className="project-card-desc">{project.description}</p>
      <div className="project-card-tech">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="project-card-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          aria-label="GitHub"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </motion.div>
  );
}
