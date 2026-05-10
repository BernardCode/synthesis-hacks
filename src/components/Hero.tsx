'use client';

export default function Hero() {
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
      {/* Editorial margin marks — desktop only, content-meaningful */}
      <div
        aria-hidden="true"
        className="hero-margin-mark hero-margin-left"
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'left center',
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.62rem',
          letterSpacing: '0.32em',
          color: 'var(--text-muted)',
          opacity: 0.4,
          whiteSpace: 'nowrap',
        }}
      >
        VOL.01 · 2026
      </div>
      <div
        aria-hidden="true"
        className="hero-margin-mark hero-margin-right"
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'right center',
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.62rem',
          letterSpacing: '0.32em',
          color: 'var(--text-muted)',
          opacity: 0.4,
          whiteSpace: 'nowrap',
        }}
      >
        37.41°N · 122.04°W
      </div>

      {/* Date / location / deadline stack */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>
        <span className="badge-accent">May 23, 2026 · Google Humboldt</span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.82rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
        }}>
          227 Humboldt Ct, Sunnyvale, CA 94089 · 3rd Floor
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
          Applications closed
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
            display: 'inline-block',
          }}
        >
          Hacks
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
        A free hackathon for high schoolers. Beginners welcome.
        <br />
        Show up alone or with friends. We&apos;ll match you into a team.
      </p>

      {/* CTA row */}
      <div className="fade-up fade-up-delay-4" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span
          className="btn-primary"
          aria-disabled="true"
          style={{
            cursor: 'default',
            background: 'var(--bg-card-hover)',
            border: '1px solid var(--border-accent)',
            color: 'var(--accent)',
          }}
        >
          Applications closed
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M3 6.5 L5.6 9 L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <a
          href="https://discord.gg/yZpgnKVG"
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

      {/* Stat row */}
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
              cursor: 'default',
            }}
          >
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
    </section>
  );
}
