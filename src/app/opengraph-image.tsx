import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display: 'flex',
        }} />

        {/* Accent glow */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 500, height: 500,
          borderRadius: '50%',
          background: '#c4ff50',
          opacity: 0.07,
          filter: 'blur(80px)',
          display: 'flex',
        }} />

        {/* Logo mark SVG-equivalent */}
        <div style={{
          position: 'absolute', top: 72, left: 80,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            width: 48, height: 48,
            border: '2px solid rgba(196,255,80,0.4)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(196,255,80,0.08)',
          }}>
            <div style={{ color: '#c4ff50', fontSize: 22, fontWeight: 700, fontFamily: 'monospace' }}>Z</div>
          </div>
          <div style={{ color: '#f0ede6', fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>
            Synthesis Hacks
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
          <div style={{
            color: '#c4ff50',
            fontSize: 13,
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            marginBottom: 8,
          }}>
            MAY 23, 2025 · SUNNYVALE
          </div>
          <div style={{
            color: '#f0ede6',
            fontSize: 80,
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}>
            Build something
          </div>
          <div style={{
            color: '#c4ff50',
            fontSize: 80,
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}>
            real.
          </div>
          <div style={{
            color: '#7a7a8c',
            fontSize: 22,
            fontWeight: 300,
            marginTop: 16,
            letterSpacing: '-0.01em',
          }}>
            A 12-hour hackathon for high school students. Free to attend.
          </div>
        </div>

        {/* Bottom right stat */}
        <div style={{
          position: 'absolute', bottom: 80, right: 80,
          display: 'flex', gap: 40, alignItems: 'center',
        }}>
          {[['12H', 'DURATION'], ['FREE', 'TO ATTEND'], ['HS', 'STUDENTS']].map(([val, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ color: '#c4ff50', fontSize: 28, fontFamily: 'monospace', fontWeight: 600 }}>{val}</div>
              <div style={{ color: '#7a7a8c', fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.15em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
