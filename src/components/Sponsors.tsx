'use client';

import { ReactNode } from 'react';

function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  e.currentTarget.style.transform = `perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(8px)`;
  e.currentTarget.style.boxShadow = `${-x * 14}px ${-y * 14}px 28px rgba(196,255,80,0.07), 0 8px 32px rgba(0,0,0,0.35)`;
}

function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '';
}

/* Reticle — concentric angular squares with corner brackets */
function ExposureSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="16.5" y="16.5" width="7" height="7" fill="currentColor" opacity="0.9" />
      <rect x="11" y="11" width="18" height="18" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.5" />
      <rect x="4" y="4" width="32" height="32" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.22" />
      <polyline points="4,10 4,4 10,4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="30,4 36,4 36,10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="36,30 36,36 30,36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="10,36 4,36 4,30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  );
}

/* Directed graph — source node feeds two intermediaries into a destination */
function PipelineSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="6" cy="20" r="3" fill="currentColor" />
      <circle cx="20" cy="11" r="2.4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
      <circle cx="20" cy="29" r="2.4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
      <circle cx="34" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="34" cy="20" r="1.4" fill="currentColor" opacity="0.6" />
      <path d="M8.9 18.7 L17.6 13.2" stroke="currentColor" strokeWidth="0.95" opacity="0.45" strokeLinecap="round" />
      <path d="M8.9 21.3 L17.6 26.8" stroke="currentColor" strokeWidth="0.95" opacity="0.45" strokeLinecap="round" />
      <path d="M22.4 12 L31 18.4" stroke="currentColor" strokeWidth="0.95" opacity="0.55" strokeLinecap="round" />
      <path d="M22.4 28 L31 21.6" stroke="currentColor" strokeWidth="0.95" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

/* Ascending line chart — bottom-left to top-right with a terminal upward arrow */
function ImpactSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline
        points="4,34 11,26 19,19 27,13 35,6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="34" r="1.8" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="26" r="1.8" fill="currentColor" opacity="0.52" />
      <circle cx="19" cy="19" r="1.8" fill="currentColor" opacity="0.68" />
      <circle cx="27" cy="13" r="1.8" fill="currentColor" opacity="0.84" />
      <circle cx="35" cy="6" r="2.4" fill="currentColor" />
      <path d="M32 3.5 L35 0.5 L38 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="36.5" x2="38" y2="36.5" stroke="currentColor" strokeWidth="0.7" opacity="0.18" />
    </svg>
  );
}

const benefits: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ExposureSVG />,
    title: 'Direct exposure',
    desc: "Your brand in front of motivated, curious high schoolers. Tomorrow's engineers, designers, and founders.",
  },
  {
    icon: <PipelineSVG />,
    title: 'Talent pipeline',
    desc: 'Meet and connect with promising students early. Lead workshops or mentorship sessions.',
  },
  {
    icon: <ImpactSVG />,
    title: 'Community impact',
    desc: 'Help lower barriers to tech education in your local community.',
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Sponsorships
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Help us make it happen
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              maxWidth: '50ch',
              margin: '0 auto',
            }}
          >
            Synthesis Hacks is made possible by sponsors who believe in giving young people the
            space to create, experiment, and grow together.
          </p>
        </div>

        {/* Benefit cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {benefits.map((item) => (
            <div
              key={item.title}
              className="card tilt-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
              <div>
                <p style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{item.title}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(196,255,80,0.05) 100%)',
            border: '1px solid var(--border-accent)',
            borderRadius: '14px',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              className="font-display"
              style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}
            >
              Interested in sponsoring?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '40ch', lineHeight: 1.6 }}>
              Sponsorship packages will be finalized in Spring 2025. Reach out early and we&apos;ll
              send you our prospectus when it&apos;s ready.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
            <a
              href="mailto:sponsors@synthesishacks.com"
              className="btn-primary"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              Email us about sponsoring
            </a>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                fontFamily: 'DM Mono, monospace',
              }}
            >
              sponsors@synthesishacks.com
            </p>
          </div>
        </div>

        {/* Placeholder logo row */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontFamily: 'DM Mono, monospace',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
              opacity: 0.5,
            }}
          >
            SPONSOR LOGOS COMING SOON
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              opacity: 0.2,
            }}
          >
            {[120, 90, 110, 80].map((w, i) => (
              <div
                key={i}
                style={{
                  width: `${w}px`,
                  height: '32px',
                  background: 'var(--text-muted)',
                  borderRadius: '4px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
