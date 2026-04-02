/* Synthesis Hacks — custom logo mark + wordmark */

interface LogoMarkProps {
  size?: number;
}

export function LogoMark({ size = 32 }: LogoMarkProps) {
  const s = size;
  const cx = s / 2;
  // Pointy-top hexagon vertices
  const hex = [
    [cx, s * 0.04],
    [s * 0.92, s * 0.27],
    [s * 0.92, s * 0.73],
    [cx, s * 0.96],
    [s * 0.08, s * 0.73],
    [s * 0.08, s * 0.27],
  ]
    .map((p) => p.join(','))
    .join(' ');

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      aria-label="Synthesis Hacks"
    >
      {/* Outer hex shell */}
      <polygon points={hex} stroke="#c4ff50" strokeWidth={s * 0.035} fill="none" opacity="0.35" />

      {/* Inner hex (inset) */}
      <polygon
        points={[
          [cx, s * 0.14],
          [s * 0.82, s * 0.32],
          [s * 0.82, s * 0.68],
          [cx, s * 0.86],
          [s * 0.18, s * 0.68],
          [s * 0.18, s * 0.32],
        ]
          .map((p) => p.join(','))
          .join(' ')}
        stroke="#c4ff50"
        strokeWidth={s * 0.025}
        fill="none"
        opacity="0.15"
      />

      {/* Z-trace — two horizontal rails connected by a diagonal slash */}
      {/* Top rail */}
      <line
        x1={s * 0.25}
        y1={s * 0.33}
        x2={s * 0.72}
        y2={s * 0.33}
        stroke="#c4ff50"
        strokeWidth={s * 0.072}
        strokeLinecap="round"
      />
      {/* Diagonal connector */}
      <line
        x1={s * 0.72}
        y1={s * 0.33}
        x2={s * 0.28}
        y2={s * 0.67}
        stroke="#c4ff50"
        strokeWidth={s * 0.072}
        strokeLinecap="round"
      />
      {/* Bottom rail */}
      <line
        x1={s * 0.28}
        y1={s * 0.67}
        x2={s * 0.75}
        y2={s * 0.67}
        stroke="#c4ff50"
        strokeWidth={s * 0.072}
        strokeLinecap="round"
      />

      {/* Terminal pads */}
      <circle cx={s * 0.25} cy={s * 0.33} r={s * 0.065} fill="#0d0d14" />
      <circle cx={s * 0.75} cy={s * 0.67} r={s * 0.065} fill="#0d0d14" />
    </svg>
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
