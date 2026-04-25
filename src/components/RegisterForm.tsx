'use client';

export default function RegisterForm() {
  return (
    <section id="register" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div className="register-grid">
          {/* Left: content */}
          <div>
            <span className="badge-accent" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
              Registration
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Claim your spot
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.95rem', maxWidth: '44ch' }}>
              Applications are reviewed on a rolling basis. Spots are limited — we keep the event
              small so everyone actually gets mentorship and feels part of it.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'Open to grades 9 through 12',
                'Free to attend — meals included',
                'No prior experience required',
                'Solo or team of 2–4',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: 'var(--accent)' }}>
                    <polyline points="2,7 5.5,11 12,3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.82rem',
              color: 'var(--coral)',
              letterSpacing: '0.04em',
            }}>
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <circle cx="4" cy="4" r="3.2" fill="var(--coral)" opacity="0.9" />
              </svg>
              Applications due May 3rd
            </span>
          </div>

          {/* Right: CTA card */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(196,255,80,0.04) 100%)',
              border: '1px solid var(--border-accent)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                opacity: 0.7,
              }}>
                EVENT DETAILS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'DATE', value: 'May 23, 2026' },
                  { label: 'VENUE', value: 'Google Humboldt, Sunnyvale' },
                  { label: 'FLOOR', value: '3rd Floor · 8 AM – 8 PM' },
                  { label: 'COST', value: 'Free' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: 'var(--text-muted)',
                      opacity: 0.6,
                      minWidth: '52px',
                      flexShrink: 0,
                    }}>
                      {label}
                    </span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://synthesishacks.fillout.com/t/grGiZ8GF2rus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', justifyContent: 'center' }}
              >
                Apply now
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M1.5 11.5 L11.5 1.5 M4 1.5 L11.5 1.5 L11.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                lineHeight: 1.55,
                fontFamily: 'DM Mono, monospace',
              }}>
                Confirmation email within a few days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
