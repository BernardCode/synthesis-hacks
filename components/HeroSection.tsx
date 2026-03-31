import RegisterButton from './RegisterButton'

// Update these constants when dates are confirmed
const EVENT_MONTH = 'Summer 2026'
const MORE_INFO_DATE = 'April 2026'
const LOCATION = 'Bay Area, CA'

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Event badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8 border"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border)',
          color: 'var(--accent-orange)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-[#f68627] animate-pulse" />
        {EVENT_MONTH} · {LOCATION}
      </div>

      {/* Title */}
      <h1
        className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-4"
        style={{ color: 'var(--text)' }}
      >
        Synthesis
        <br />
        <span style={{ color: 'var(--accent-orange)' }}>Hacks</span>
      </h1>

      {/* Tagline */}
      <p
        className="text-lg md:text-xl font-semibold max-w-xl mb-4"
        style={{ color: '#999' }}
      >
        A beginner-friendly, collaborative high school hackathon.
        <br />
        No experience required — just curiosity.
      </p>

      {/* More info teaser */}
      <p className="text-sm mb-12" style={{ color: '#666' }}>
        Full registration opens{' '}
        <span style={{ color: 'var(--accent-blue)' }}>{MORE_INFO_DATE}</span>
      </p>

      {/* Animated CTA */}
      <RegisterButton />

      {/* Scroll cue */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--text)' }}>
          SCROLL
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6" y="2" width="4" height="8" rx="2" fill="currentColor" opacity="0.4" />
          <path d="M8 14 L4 20 M8 14 L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
}
