/* Synthesis Hacks logo mark + wordmark */

import Image from 'next/image';

interface LogoMarkProps {
  size?: number;
}

export function LogoMark({ size = 32 }: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt="Synthesis Hacks"
      width={size}
      height={size}
      style={{ display: 'block' }}
      priority
    />
  );
}

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
}

export function Logo({ size = 32, showWordmark = true }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: size * 0.48,
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
