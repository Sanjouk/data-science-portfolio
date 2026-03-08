import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  
  // Track scroll position seamlessly with Framer Motion 
  const { scrollY } = useScroll();
  const [animDistance, setAnimDistance] = useState(400);
  const [isAnimEnabled, setIsAnimEnabled] = useState(true);

  // percentage of page length
  const ANIM_PERCENTAGE = 0.20; 
  // minimum absolute page height needed for the animation
  const MIN_PAGE_HEIGHT = 1200; 

  useEffect(() => {
    const updateMetrics = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = pageHeight - clientHeight;

      // 1. Ограничение: если страница короче 1200px или скроллить почти некуда (меньше 100px)
      // отключаем анимацию (сразу показываем полностью развернутое меню)
      if (pageHeight < MIN_PAGE_HEIGHT || maxScroll < 100) {
        setIsAnimEnabled(false);
      } else {
        setIsAnimEnabled(true);
        // 2. Длина анимации зависит в процентном соотношении от длины страницы:
        let distance = pageHeight * ANIM_PERCENTAGE;
        
        // Гарантируем, что анимация не будет длиться бесконечно на длинных страницах (cap 600px), 
        // и не превысит максимально возможный скролл (иначе она никогда не завершится). 
        distance = Math.min(distance, 600);
        distance = Math.min(distance, maxScroll);
        
        setAnimDistance(distance);
      }
    };

    updateMetrics();
    
    // Observer for dynamic page height changes
    const ro = new ResizeObserver(updateMetrics);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  // Map scroll dynamically using the state. 
  // Custom function is reactive in useTransform.
  const sp = useTransform(scrollY, (y) => {
    if (!isAnimEnabled) return 0; // if disabled, keep it in the initial compact state
    let p = y / animDistance;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    // Apply ease-out cubic curve (starts fast, slows down smoothly)
    return 1 - Math.pow(1 - p, 3);
  });

  return (
    <motion.header 
      className="navbar" 
      style={{ '--sp': sp }}
    >
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
      </div>

      {/* Actions (Lang, Theme) */}
      <div className="navbar-actions">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
