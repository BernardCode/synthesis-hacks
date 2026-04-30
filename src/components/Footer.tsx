'use client';

import { Logo } from './Logo';

const DISCORD = 'https://discord.gg/Pwkn86hH';

function DiscordSVG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <Logo size={36} />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', marginTop: '0.15rem' }}>
            team@synthesishacks.com
          </p>
        </div>

        <a
          href={DISCORD}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(88,101,242,0.1)',
            border: '1px solid rgba(88,101,242,0.3)',
            color: '#8b9bf5',
            fontSize: '0.82rem',
            fontWeight: 500,
            padding: '0.55rem 1.1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontFamily: 'DM Mono, monospace',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(88,101,242,0.18)';
            e.currentTarget.style.borderColor = 'rgba(88,101,242,0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(88,101,242,0.1)';
            e.currentTarget.style.borderColor = 'rgba(88,101,242,0.3)';
          }}
        >
          <DiscordSVG size={16} />
          Join Discord
        </a>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', opacity: 0.65 }}>
          © {year} Synthesis Hacks
        </p>
      </div>
    </footer>
  );
}
