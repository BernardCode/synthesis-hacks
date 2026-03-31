// Update SPONSOR_EMAIL when finalized
const SPONSOR_EMAIL = 'sponsors@synthesishacks.com'

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-blue)' }}>
            SPONSORS
          </p>
          <h2 className="text-4xl font-extrabold" style={{ color: 'var(--text)' }}>
            Help make it happen.
          </h2>
        </div>

        {/* Pitch */}
        <div
          className="rounded-xl border p-8 mb-8"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
        >
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#aaa' }}>
            Synthesis Hacks is a free, beginner-friendly hackathon for high school students in the Bay Area.
            We're building a space where first-timers feel welcome, collaboration beats competition, and
            every student leaves having built something they're proud of.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Sponsoring Synthesis Hacks gives your organization direct visibility with a passionate group
            of student builders — and helps us keep the event free for everyone.
          </p>
        </div>

        {/* Contact CTA */}
        <div
          className="rounded-xl border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderColor: 'var(--accent-blue)', backgroundColor: 'var(--surface)' }}
        >
          <div>
            <p className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
              Interested in sponsoring?
            </p>
            <p className="text-xs" style={{ color: '#666' }}>
              We'd love to tell you more about our audience and sponsorship tiers.
            </p>
          </div>
          <a
            href={`mailto:${SPONSOR_EMAIL}`}
            className="button-56 flex-shrink-0"
            style={{ textDecoration: 'none' }}
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
