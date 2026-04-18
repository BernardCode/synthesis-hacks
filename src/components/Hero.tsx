'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%0123456789';

function useScramble(target: string, startDelay = 700) {
  const [text, setText] = useState(target);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(
          target
            .split('')
            .map((char, idx) => {
              if (idx < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );
        iteration += 0.35;
        if (iteration > target.length) {
          if (interval) clearInterval(interval);
          setText(target);
        }
      }, 35);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [target, startDelay]);

  return text;
}

export default function Hero() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const scrambledHacks = useScramble('Hacks');

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 90;

      if (dist < maxDist) {
        const factor = (1 - dist / maxDist) * 0.4;
        btn.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      } else {
        btn.style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Wireframe Cube */}
      <div className="cube-scene">
        <div className="cube-3d">
          {(['front', 'back', 'left', 'right', 'top', 'bottom'] as const).map((face) => (
            <div key={face} className={`cube-face cube-${face}`} />
          ))}
        </div>
      </div>

      {/* Secondary smaller cube */}
      <div className="cube-scene cube-scene-2">
        <div className="cube-3d cube-3d-sm">
          {(['front', 'back', 'left', 'right', 'top', 'bottom'] as const).map((face) => (
            <div key={face} className={`cube-face-sm cube-sm-${face}`} />
          ))}
        </div>
      </div>

      {/* Floating accent orbs */}
      <div className="float-orb float-orb-1" />
      <div className="float-orb float-orb-2" />
      <div className="float-orb float-orb-3" />
      <div className="float-orb float-orb-4" />

      {/* Badge */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>
        <span className="badge-accent">May 23, 2026 · Google Humboldt</span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.82rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
        }}>
          1225 Crossman Ave, Sunnyvale · 3rd Floor
        </span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.82rem',
          letterSpacing: '0.1em',
          color: 'var(--coral)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
        }}>
          <svg width="7" height="7" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.2" fill="var(--coral)" opacity="0.9" />
          </svg>
          Applications due May 3rd
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-display fade-up fade-up-delay-2"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginTop: '1.5rem',
          marginBottom: '0',
          maxWidth: '14ch',
        }}
      >
        Synthesis{' '}
        <em
          style={{
            fontStyle: 'italic',
            color: 'var(--accent)',
            fontVariantNumeric: 'tabular-nums',
            display: 'inline-block',
            minWidth: '3ch',
          }}
        >
          {scrambledHacks}
        </em>
      </h1>

      {/* Tagline */}
      <p
        className="fade-up fade-up-delay-3"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--text-muted)',
          fontWeight: 300,
          lineHeight: 1.6,
          marginTop: '1.5rem',
          maxWidth: '42ch',
        }}
      >
        A beginner-friendly hackathon for high schoolers.
        <br />
        Build something real. Meet people who get it.
      </p>

      {/* CTA row */}
      <div className="fade-up fade-up-delay-4" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          ref={btnRef}
          href="https://synthesishacks.fillout.com/t/grGiZ8GF2rus"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-magnetic"
        >
          Pre-register now
          <span style={{ fontSize: '1rem' }}>↗</span>
        </a>
        <a
          href="https://discord.gg/RPBJwNvs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#8b9bf5',
            textDecoration: 'none',
            fontSize: '0.88rem',
            fontWeight: 400,
            borderBottom: '1px solid rgba(88,101,242,0.35)',
            paddingBottom: '1px',
            transition: 'color 0.2s ease, border-color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#a5b4fc';
            e.currentTarget.style.borderColor = 'rgba(88,101,242,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#8b9bf5';
            e.currentTarget.style.borderColor = 'rgba(88,101,242,0.35)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
          Join Discord
        </a>
      </div>

      {/* HUD stats row - replaces the pill chips */}
      <div
        className="fade-up fade-up-delay-5"
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '600px',
          marginTop: '4rem',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Sweeping highlight on hover of entire row */}
        {[
          { value: '12H', label: 'DURATION', sub: 'of building' },
          { value: 'MAY 23', label: 'DATE', sub: 'Sunnyvale' },
          { value: '2-4', label: 'TEAM SIZE', sub: 'per team' },
          { value: '$0', label: 'COST', sub: 'always free' },
        ].map((stat, i, arr) => (
          <div
            key={stat.label}
            className="stat-item"
            style={{
              flex: 1,
              padding: '1.25rem 0.5rem',
              borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            <div className="stat-scan" />
            <span
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.4rem)',
                fontWeight: 500,
                color: 'var(--accent)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--text-primary)',
                fontWeight: 500,
                marginTop: '0.15rem',
              }}
            >
              {stat.label}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {stat.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0,
          animation: 'fadeUp 1s ease 1.5s forwards',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--text-muted))',
          }}
        />
        <span
          style={{
            fontSize: '0.65rem',
            fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
