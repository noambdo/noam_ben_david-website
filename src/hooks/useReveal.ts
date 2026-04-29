import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  // Watch both pathname AND search so the observer re-attaches whenever
  // the URL changes — including category/page switches on /products.
  const { pathname, search } = useLocation();

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
        // Reduced rootMargin so cards near the top of the viewport
        // are still detected after a category switch without scrolling.
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
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
  }, [pathname, search]);
}
