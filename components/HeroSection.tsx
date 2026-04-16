import RegisterButton from './RegisterButton'
import { eventDetails } from '@/lib/eventDetails'

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
        {eventDetails.timeShort} · {eventDetails.venue}
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

      <div className="grid w-full max-w-3xl gap-4 mb-12 md:grid-cols-3">
        <div className="rounded-2xl border px-5 py-4 text-left" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
            DATE
          </p>
          <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{eventDetails.date}</p>
        </div>
        <div className="rounded-2xl border px-5 py-4 text-left" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-blue)' }}>
            TIME
          </p>
          <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{eventDetails.time}</p>
        </div>
        <div className="rounded-2xl border px-5 py-4 text-left" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
            LOCATION
          </p>
          <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{eventDetails.address}</p>
          <p className="text-sm mt-1" style={{ color: '#888' }}>{eventDetails.venue}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-sm font-bold">
        <a
          href={eventDetails.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-4 py-2 transition-colors hover:text-white"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', color: '#aaa' }}
        >
          Open in Maps
        </a>
        <a
          href={eventDetails.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-4 py-2 transition-colors hover:text-white"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', color: '#aaa' }}
        >
          Add to Calendar
        </a>
      </div>

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
