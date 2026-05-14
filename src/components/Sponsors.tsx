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
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 260 80"
      fill="none"
      aria-hidden="true"
      role="img"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="nttvcGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.9" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="62"
        textAnchor="middle"
        fill="#111111"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fontSize="68"
        letterSpacing="-1.5"
        filter="url(#nttvcGlow)"
      >
        NTTVC
      </text>
    </svg>
  );
}

function ArrcusLogo() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 260 72"
      fill="none"
      aria-hidden="true"
      role="img"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="arrcusGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.9" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M12 60 L42 12 L74 60 H58 L46 31 L32 60 H12 Z" fill="#0B69C6" />
      <text
        x="90"
        y="50"
        fill="#111111"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="-0.02em"
        filter="url(#arrcusGlow)"
      >
        ARRCUS
      </text>
    </svg>
  );
}

function YriLogo() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 260 80"
      fill="none"
      aria-hidden="true"
      role="img"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="yriGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.9" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="62"
        textAnchor="middle"
        fill="#111111"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fontSize="68"
        letterSpacing="-2"
        filter="url(#yriGlow)"
      >
        YRI
      </text>
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

const titleTierLabelStyle: CSSProperties = {
  ...tierLabelStyle,
  color: 'var(--accent)',
  opacity: 1,
};

const bronzeTierLabelStyle: CSSProperties = {
  ...tierLabelStyle,
  color: '#cd7f32',
  opacity: 1,
};

const sponsorItemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.85rem',
  padding: '1rem 0',
  background: 'transparent',
  width: '100%',
};

const titleSponsorStyle: CSSProperties = {
  ...sponsorItemStyle,
  maxWidth: '420px',
  padding: '2rem 0',
};

const silverSponsorStyle: CSSProperties = {
  ...sponsorItemStyle,
  maxWidth: '380px',
};

const bronzeSponsorStyle: CSSProperties = {
  ...sponsorItemStyle,
  maxWidth: '320px',
};

const sponsorLogoStyle: CSSProperties = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
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
        <div
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            justifyItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={titleTierLabelStyle}>TITLE SPONSOR</p>
            <a
              href="https://www.nttvc.co.jp/"
              target="_blank"
              rel="noreferrer"
              style={sponsorLinkStyle}
            >
              <div style={titleSponsorStyle}>
                <div style={{ width: '100%', maxWidth: '420px' }}>
                  <NttvcLogo />
                </div>
                <p style={cardSubtitleStyle}>NTTVC</p>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={tierLabelStyle}>SILVER</p>
            <a
              href="https://yri.ai"
              target="_blank"
              rel="noreferrer"
              style={sponsorLinkStyle}
            >
              <div style={silverSponsorStyle}>
                <div style={{ width: '100%', maxWidth: '380px' }}>
                  <YriLogo />
                </div>
                <p style={cardSubtitleStyle}>YRI</p>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={bronzeTierLabelStyle}>BRONZE</p>
            <a
              href="https://artofproblemsolving.com"
              target="_blank"
              rel="noreferrer"
              style={sponsorLinkStyle}
            >
              <div style={bronzeSponsorStyle}>
                <Image
                  src="/AoPS_Main_Logo.png"
                  alt="Art of Problem Solving"
                  width={220}
                  height={70}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '320px',
                    filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.9))',
                  }}
                />
                <p style={cardSubtitleStyle}>Art of Problem Solving</p>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={bronzeTierLabelStyle}>BRONZE</p>
            <a
              href="https://arrcus.com"
              target="_blank"
              rel="noreferrer"
              style={sponsorLinkStyle}
            >
              <div style={bronzeSponsorStyle}>
                <div style={{ width: '100%', maxWidth: '320px' }}>
                  <ArrcusLogo />
                </div>
                <p style={cardSubtitleStyle}>Arrcus</p>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '0.72rem',
              fontFamily: 'DM Mono, monospace',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              opacity: 0.4,
            }}>
              MORE SPONSORS COMING SOON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
