'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll('[data-reveal],[data-stagger]').forEach((el) => io.observe(el));
    };

    observe();

    // Re-run after any dynamic content settles
    const t = setTimeout(observe, 300);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
