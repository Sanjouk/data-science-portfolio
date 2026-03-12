import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle } from 'lucide-react';
import Badge from './Badge';
import { useLang } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { t } = useLang();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.slug ?? project.title}
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label={t.close}>
              <X size={20} />
            </button>

            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-desc">{project.description}</p>

            <div className="modal-section">
              <h4 className="modal-section-title">{t.techStack}</h4>
              <div className="modal-badges">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">{t.keyFeatures}</h4>
              <ul className="modal-features">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="modal-check" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn modal-action-btn--github"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
