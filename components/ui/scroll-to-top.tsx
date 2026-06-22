'use client';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Прокрутити вгору"
      className="scroll-to-top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 14V4M4 9l5-5 5 5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
