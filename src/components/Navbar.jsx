import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLang } from '../context/LanguageContext';

const routes = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/projects', key: 'projects' },
  { path: '/resume', key: 'resume' },
  // { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t } = useLang();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Nav Links */}
        <nav className="navbar-links">
          {routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              end={r.path === '/'}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'navbar-link--active' : ''}`
              }
            >
              {t.nav[r.key]}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Lang, Theme) */}
        <div className="navbar-actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
