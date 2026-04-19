/* Synthesis Hacks logo mark + wordmark */

import Image from 'next/image';

interface LogoMarkProps {
  size?: number;
}

export function LogoMark({ size = 40 }: LogoMarkProps) {
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        filter: 'drop-shadow(0 0 8px #c4ff5099) drop-shadow(0 0 20px #c4ff5044)',
      }}
    >
      <Image
        src="/logo.png"
        alt="Synthesis Hacks"
        width={size}
        height={size}
        style={{ display: 'block', objectFit: 'contain' }}
        priority
      />
    </span>
  );
}

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
}

export function Logo({ size = 40, showWordmark = true }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: size * 0.52,
            fontWeight: 400,
            color: '#f0ede6',
            letterSpacing: '-0.015em',
            lineHeight: 1,
          }}
        >
          Synthesis{' '}
          <em style={{ fontStyle: 'italic', color: '#c4ff50' }}>Hacks</em>
        </span>
      )}
    </div>
  );
}
