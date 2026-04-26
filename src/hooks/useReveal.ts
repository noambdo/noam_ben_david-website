import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
      if (!els.length) return null;
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach(el => io.observe(el));
      return io;
    };

    const t = window.setTimeout(() => {
      const io = attach();
      (window as any).__revealIO = io;
    }, 60);

    return () => {
      window.clearTimeout(t);
      const io: IntersectionObserver | undefined = (window as any).__revealIO;
      io?.disconnect();
    };
  }, [pathname]);
}
