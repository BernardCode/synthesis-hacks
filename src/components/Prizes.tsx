'use client';

import { useEffect, useRef } from 'react';

function GrandPrizeSVG() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <polygon
        points="48,3 93,48 48,93 3,48"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
      {/* Mid diamond */}
      <polygon
        points="48,18 78,48 48,78 18,48"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
        opacity="0.5"
      />
      {/* Inner diamond (filled) */}
      <polygon
        points="48,34 62,48 48,62 34,48"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.18"
        opacity="0.85"
      />
      {/* Center dot */}
      <circle cx="48" cy="48" r="3.5" fill="currentColor" />
      {/* Cardinal spikes */}
      <line x1="48" y1="0" x2="48" y2="3" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <line x1="96" y1="48" x2="93" y2="48" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <line x1="48" y1="96" x2="48" y2="93" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <line x1="0" y1="48" x2="3" y2="48" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      {/* Diagonal corner accents */}
      <line x1="24" y1="24" x2="28" y2="28" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
      <line x1="72" y1="24" x2="68" y2="28" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
      <line x1="24" y1="72" x2="28" y2="68" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
      <line x1="72" y1="72" x2="68" y2="68" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
    </svg>
  );
}

const categories = [
  'Best Technical Implementation',
  'Most Creative Concept',
  'Best First Hackathon',
  'Best UI/UX Design',
  'Audience Favorite',
];

export default function Prizes() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-item-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: '6rem 1.5rem', background: 'rgba(255,255,255,0.012)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Prizes
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            What you can win.
          </h2>
        </div>

        <div className="prizes-split">
          {/* Grand prize card */}
          <div
            ref={leftRef}
            className="faq-item-enter"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--border-accent)',
              borderRadius: '2px',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <div style={{ color: 'var(--accent)' }}>
              <GrandPrizeSVG />
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.58rem',
                  letterSpacing: '0.22em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.6rem',
                }}
              >
                GRAND PRIZE
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '2rem',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                  color: 'var(--accent)',
                  fontStyle: 'italic',
                }}
              >
                To be announced.
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                Prize details go up as sponsors come on board.
              </p>
            </div>
          </div>

          {/* Category awards */}
          <div
            ref={rightRef}
            className="faq-item-enter"
            style={{ transitionDelay: '0.1s', paddingTop: '0.5rem' }}
          >
            <div
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
                marginBottom: '1.75rem',
              }}
            >
              CATEGORY AWARDS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {categories.map((cat, i) => (
                <div
                  key={cat}
                  className="prize-category-row"
                  style={{
                    padding: '1.1rem 0',
                    borderBottom: i < categories.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.1rem',
                  }}
                >
                  {/* Geometric tick mark instead of bullet */}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.5 }}>
                    <rect x="0" y="0" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    <rect x="3" y="3" width="4" height="4" fill="currentColor" />
                  </svg>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--text-primary)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-muted)'; }}
                  >
                    {cat}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: '2.25rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'DM Mono, monospace',
                opacity: 0.45,
                lineHeight: 1.7,
              }}
            >
              Additional prizes announced<br />as sponsorships are confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
