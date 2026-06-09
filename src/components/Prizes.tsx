'use client';

import { useEffect, useRef } from 'react';

const overall = [
  {
    rank: '01',
    label: '1st Place Overall',
    cash: '$150',
    items: [
      '$150 Amazon Gift Card',
      '$1,500 YRI Scholarship',
      'Soundcore noise-cancelling headphones ($70)',
      'Google laptop carrier bag ($40)',
      'Google tote bag ($12)',
      '2× .xyz domain',
      'Up to 4 YRI auto-admissions',
    ],
    featured: true,
  },
  {
    rank: '02',
    label: '2nd Place Overall',
    cash: '$75',
    items: [
      '$75 Amazon Gift Card',
      'Amazon Echo Dot ($50)',
      'Nano Banana sweatshirt ($90)',
      '.xyz domain',
      'Up to 2 YRI auto-admissions',
    ],
    featured: false,
  },
  {
    rank: '03',
    label: '3rd Place Overall',
    cash: '$70',
    items: [
      '$70 Amazon Gift Card',
      'Google tote bag',
      '.xyz domain',
      'YRI auto-admission',
    ],
    featured: false,
  },
];

const special = [
  {
    label: 'Best Beginner Hack',
    cash: '$50',
    items: ['$50 Amazon Gift Card', 'Google tote', 'AoPS coupon', '.xyz domain'],
  },
  {
    label: 'Best AI Hack',
    cash: '$20',
    items: ['$20 Amazon Gift Card', 'Claude Pro (1 month)', '.xyz domain', 'YRI auto-admission'],
  },
  {
    label: 'Best Design / Website',
    cash: '$35',
    items: ['$35 Amazon Gift Card', 'AoPS coupon', 'YRI auto-admission', '.xyz domain', 'Google sticker bundle'],
  },
];

function SquareTick() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.45, marginTop: '0.22em' }}>
      <rect x="0.5" y="0.5" width="8" height="8" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <rect x="2.5" y="2.5" width="4" height="4" fill="currentColor" />
    </svg>
  );
}

export default function Prizes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.prize-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('faq-item-visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="prizes" ref={sectionRef} style={{ padding: '6rem 1.5rem', background: 'rgba(255,255,255,0.012)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>Prizes</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Prizes awarded.
          </h2>
        </div>

        {/* Overall — 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}
          className="prizes-overall-grid">
          {overall.map((p) => (
            <div
              key={p.rank}
              className="prize-card faq-item-enter"
              style={{
                border: `1px solid ${p.featured ? 'var(--border-accent)' : 'var(--border)'}`,
                borderRadius: '2px',
                background: p.featured ? 'rgba(196,255,80,0.04)' : 'var(--bg-card)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Rank + label */}
              <div>
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.58rem',
                  letterSpacing: '0.22em',
                  color: p.featured ? 'var(--accent)' : 'var(--text-muted)',
                  marginBottom: '0.4rem',
                  opacity: p.featured ? 1 : 0.7,
                }}>
                  {p.rank}
                </div>
                <h3 className="font-display" style={{
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: p.featured ? 'var(--accent)' : 'var(--text-primary)',
                  fontStyle: p.featured ? 'italic' : 'normal',
                  margin: 0,
                }}>
                  {p.label}
                </h3>
              </div>

              {/* Cash */}
              <div style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 500,
                color: p.featured ? 'var(--accent)' : 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>
                {p.cash}
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 400 }}>
                  CASH
                </span>
              </div>

              {/* Items */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {p.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    <SquareTick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special awards — 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
          className="prizes-special-grid">
          {special.map((p) => (
            <div
              key={p.label}
              className="prize-card faq-item-enter"
              style={{
                border: '1px solid var(--border)',
                borderRadius: '2px',
                background: 'var(--bg-card)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--text-muted)', opacity: 0.6, marginBottom: '0.4rem' }}>
                  SPECIAL AWARD
                </div>
                <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0 }}>
                  {p.label}
                </h3>
              </div>

              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '1.6rem', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {p.cash}
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--text-muted)', marginLeft: '0.45rem', fontWeight: 400 }}>CASH</span>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {p.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    <SquareTick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .prizes-overall-grid { grid-template-columns: 1fr !important; }
          .prizes-special-grid  { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 900px) {
          .prizes-overall-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .prizes-special-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
