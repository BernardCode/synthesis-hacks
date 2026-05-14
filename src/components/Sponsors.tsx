import { ReactNode, CSSProperties } from 'react';
import Image from 'next/image';

/* Reticle - concentric angular squares with corner brackets */
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

/* Directed graph - source node feeds two intermediaries into a destination */
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

/* Ascending line chart - bottom-left to top-right with a terminal upward arrow */
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

function NttvcLogo() {
  return (
    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" aria-hidden="true" role="img">
      <rect x="0" y="8" width="200" height="34" rx="8" fill="#001C54" />
      <text x="18" y="34" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26">
        NTTVC
      </text>
      <rect x="154" y="12" width="28" height="26" rx="6" fill="#00A4EF" opacity="0.96" />
    </svg>
  );
}

function ArrcusLogo() {
  return (
    <svg width="180" height="46" viewBox="0 0 180 46" fill="none" aria-hidden="true" role="img">
      <rect x="0" y="0" width="180" height="46" rx="10" fill="#111111" />
      <text x="14" y="32" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26">
        arrcus
      </text>
      <circle cx="156" cy="23" r="8" fill="#FFD600" />
    </svg>
  );
}

const tierLabelStyle: CSSProperties = {
  fontSize: '0.65rem',
  fontFamily: 'DM Mono, monospace',
  color: 'var(--text-muted)',
  letterSpacing: '0.18em',
  marginBottom: '1.25rem',
  textAlign: 'center',
  opacity: 0.55,
};

const sponsorCardStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '1.5rem 2.5rem',
  border: 'none',
  borderRadius: '2px',
  background: 'var(--bg-card)',
};

const sponsorLinkStyle: CSSProperties = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
};

const dividerStyle: CSSProperties = {
  width: '1px',
  height: '32px',
  background: 'var(--border)',
};

const cardTitleStyle: CSSProperties = {
  fontSize: '0.82rem',
  fontWeight: 500,
  marginBottom: '0.15rem',
};

const cardSubtitleStyle: CSSProperties = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontFamily: 'DM Mono, monospace',
};

const benefits: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ExposureSVG />,
    title: 'On the t-shirt',
    desc: 'Your logo on the shirt every attendee wears, on the website, and at the venue.',
  },
  {
    icon: <PipelineSVG />,
    title: 'In the room',
    desc: 'Send mentors, run a 30-minute workshop, or just sit at a table and answer questions.',
  },
  {
    icon: <ImpactSVG />,
    title: 'Pay it forward',
    desc: 'Free events change who gets to start building. We’re keeping this open to everyone.',
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
            Synthesis Hacks is free. That works because sponsors cover food, prizes, supplies,
            and the rest. Here&apos;s what we offer in return.
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
              className="card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
              <div>
                <p style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            borderRadius: '2px',
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
              Check out our sponsorship prospectus to learn about partnership opportunities
              and how you can support the next generation of builders.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
            <a
              href="/prospectus"
              className="btn-primary"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              View Prospectus
            </a>
            <a
              href="mailto:sponsors@synthesishacks.com"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                fontFamily: 'DM Mono, monospace',
                textDecoration: 'none',
              }}
            >
              sponsors@synthesishacks.com
            </a>
          </div>
        </div>

        {/* Current sponsors */}
        <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Venue tier */}
          <div>
            <p style={tierLabelStyle}>VENUE SPONSOR</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href="https://about.google/"
                target="_blank"
                rel="noreferrer"
                style={sponsorLinkStyle}
              >
                <div style={sponsorCardStyle}>
                  {/* Google wordmark SVG */}
                  <svg width="132" height="44" viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
                  <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54S5.62 2.47 9.24 2.47c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                  <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.44 3.28 3.52-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                  <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3-2.91 0-5.57 2.55-5.57 5.83 0 3.26 2.66 5.79 5.57 5.79 1.39 0 2.49-.62 3.06-1.32h.09v.83c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.07c-1.76 0-3.1-1.5-3.1-3.54 0-2.07 1.34-3.56 3.1-3.56 1.74 0 3.1 1.51 3.1 3.56 0 2.04-1.36 3.54-3.1 3.54z" fill="#4285F4"/>
                  <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.44 3.28 3.52-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
                  <path d="M58.78 0h2.55v17.73h-2.55z" fill="#34A853"/>
                  <path d="M68.71 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
                </svg>
                <div style={dividerStyle} />
                <div>
                  <p style={cardTitleStyle}>Venue Sponsor</p>
                  <p style={cardSubtitleStyle}>Google Humboldt · Sunnyvale</p>
                </div>
              </div>
              </a>
            </div>
          </div>          <div>
            <p style={tierLabelStyle}>TITLE SPONSOR</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a                href="https://www.nttvc.co.jp/"
                target="_blank"
                rel="noreferrer"
                style={sponsorLinkStyle}
              >
                <div style={sponsorCardStyle}>
                  <NttvcLogo />
                  <div style={dividerStyle} />
                  <div>
                    <p style={cardTitleStyle}>NTTVC</p>
                    <p style={cardSubtitleStyle}>Supporting innovation through global venture capital</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bronze tier */}
          <div>
            <p style={tierLabelStyle}>BRONZE</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href="https://artofproblemsolving.com"
                target="_blank"
                rel="noreferrer"
                style={sponsorLinkStyle}
              >
                <div style={sponsorCardStyle}>
                  {/* AoPS logo on a light plinth so the navy + green brand colors read on dark bg */}
                  <div
                    style={{
                      background: '#f4f1ea',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src="/AoPS_Main_Logo.png"
                      alt="Art of Problem Solving"
                      width={160}
                      height={50}
                      style={{ height: '40px', width: 'auto', display: 'block' }}
                    />
                  </div>
                  <div style={dividerStyle} />
                  <div>
                    <p style={cardTitleStyle}>Bronze Sponsor</p>
                    <p style={cardSubtitleStyle}>Art of Problem Solving</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <p style={tierLabelStyle}>BRONZE</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href="https://arrcus.com"
                target="_blank"
                rel="noreferrer"
                style={sponsorLinkStyle}
              >
                <div style={sponsorCardStyle}>
                  <ArrcusLogo />
                  <div style={dividerStyle} />
                  <div>
                    <p style={cardTitleStyle}>Bronze Sponsor</p>
                    <p style={cardSubtitleStyle}>Arrcus</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <p style={{
            fontSize: '0.72rem',
            fontFamily: 'DM Mono, monospace',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textAlign: 'center',
            opacity: 0.4,
          }}>
            MORE SPONSORS COMING SOON
          </p>
        </div>
      </div>
    </section>
  );
}
