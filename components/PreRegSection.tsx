'use client'
import { useState } from 'react'

// Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
// Or any other form backend. Set to '' to disable remote submission during dev.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function PreRegSection() {
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!FORM_ENDPOINT) {
      // No endpoint configured — show success anyway for local dev
      setState('success')
      return
    }
    setState('loading')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="register" className="py-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-lg">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
            INTEREST LIST
          </p>
          <h2 className="text-4xl font-extrabold" style={{ color: 'var(--text)' }}>
            Be the first to know.
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#888' }}>
            Drop your info and we'll reach out when registration opens.
          </p>
        </div>

        {state === 'success' ? (
          <div
            className="rounded-xl border px-8 py-10 text-center"
            style={{ borderColor: 'var(--accent-orange)', backgroundColor: 'var(--surface)' }}
          >
            <p className="text-2xl font-extrabold mb-2" style={{ color: 'var(--text)' }}>
              You're on the list! 🎉
            </p>
            <p className="text-sm" style={{ color: '#888' }}>
              We'll email you when registration opens.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold tracking-widest" style={{ color: '#888' }}>
                FULL NAME <span style={{ color: 'var(--accent-orange)' }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Alex Kim"
                className="rounded-lg px-4 py-3 text-sm font-semibold outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  color: 'var(--text)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold tracking-widest" style={{ color: '#888' }}>
                EMAIL <span style={{ color: 'var(--accent-orange)' }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="alex@school.edu"
                className="rounded-lg px-4 py-3 text-sm font-semibold outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  color: 'var(--text)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="school" className="text-xs font-bold tracking-widest" style={{ color: '#888' }}>
                SCHOOL <span style={{ color: 'var(--accent-orange)' }}>*</span>
              </label>
              <input
                id="school"
                name="school"
                type="text"
                required
                placeholder="Lincoln High School"
                className="rounded-lg px-4 py-3 text-sm font-semibold outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  color: 'var(--text)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="instagram" className="text-xs font-bold tracking-widest" style={{ color: '#888' }}>
                INSTAGRAM <span style={{ color: '#555' }}>(optional)</span>
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                placeholder="@yourhandle"
                className="rounded-lg px-4 py-3 text-sm font-semibold outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  color: 'var(--text)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {state === 'error' && (
              <p className="text-sm" style={{ color: '#ff6b6b' }}>
                Something went wrong. Try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={state === 'loading'}
              className="button-56 mt-2 w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === 'loading' ? 'Submitting...' : 'Pre-Register'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
