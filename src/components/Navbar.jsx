import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
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
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarNode = navbarRef.current;
    if (!navbarNode) return undefined;

    let rafId = 0;
    let lastProgress = -1;
    let isFloating = false;
    let isShortPage = false;
    const animationScrollRange = 220;

    const setShortPageMode = (enabled) => {
      if (enabled !== isShortPage) {
        navbarNode.classList.toggle('navbar--short-page', enabled);
        isShortPage = enabled;
      }
    };

    const updateNavbarOnScroll = () => {
      rafId = 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const canAnimate = maxScrollable > animationScrollRange;

      if (!canAnimate) {
        setShortPageMode(true);
        if (lastProgress !== 0) {
          navbarNode.style.setProperty('--navbar-scroll-progress', '0');
          lastProgress = 0;
        }
        if (isFloating) {
          navbarNode.classList.remove('navbar--floating');
          isFloating = false;
        }
        return;
      }

      if (isShortPage) {
        setShortPageMode(false);
      }

      const progress = Math.min(Math.min(scrollY, maxScrollable) / animationScrollRange, 1);

      const shouldSyncEdgeProgress =
        (progress === 0 && lastProgress !== 0) || (progress === 1 && lastProgress !== 1);

      if (Math.abs(progress - lastProgress) >= 0.01 || shouldSyncEdgeProgress) {
        navbarNode.style.setProperty('--navbar-scroll-progress', progress.toFixed(3));
        lastProgress = progress;
      }

      const shouldFloat = scrollY > 8;
      if (shouldFloat !== isFloating) {
        navbarNode.classList.toggle('navbar--floating', shouldFloat);
        isFloating = shouldFloat;
      }
    };

    const queueScrollUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateNavbarOnScroll);
    };

    updateNavbarOnScroll();
    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('resize', queueScrollUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('resize', queueScrollUpdate);
      navbarNode.style.removeProperty('--navbar-scroll-progress');
      navbarNode.classList.remove('navbar--floating');
      navbarNode.classList.remove('navbar--short-page');
    };
  }, [location.pathname]);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-inner">
        {/* Nav Links */}
        <div className="navbar-menu-shell">
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
      </div>
    </header>
  );
}
