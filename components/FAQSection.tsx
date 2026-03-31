'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'What is a hackathon?',
    a: "A hackathon is a time-limited event where participants build a project — an app, website, game, or anything creative — from scratch. At Synthesis Hacks, you'll have the whole event to design, build, and present your idea. It's more about learning and creating than competing.",
  },
  {
    q: 'Do I need coding experience?',
    a: "Nope! Synthesis Hacks is specifically designed to be beginner-friendly. You can use no-code tools, AI tools, or learn as you go. Mentors will be available throughout the event to help you get unstuck.",
  },
  {
    q: 'How are teams formed?',
    a: "You can come with a team of up to 4 people, or sign up solo and we'll help you find teammates at the event. We encourage mixing up skills — designers, storytellers, and coders all make great teams.",
  },
  {
    q: 'Is there a cost to participate?',
    a: "Synthesis Hacks is completely free to attend. We cover food, drinks, and supplies. All you need to bring is your laptop and your ideas.",
  },
  {
    q: 'What can I build?',
    a: "Anything! Apps, websites, games, hardware projects, creative tools — if you can imagine it and make progress on it in the time limit, it qualifies. We'll share some optional themed prompts to spark ideas.",
  },
  {
    q: 'Who can participate?',
    a: "Synthesis Hacks is open to current high school students. You do not need to attend a specific school. Whether you're in 9th grade or graduating, you're welcome.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
            FAQ
          </p>
          <h2 className="text-4xl font-extrabold" style={{ color: 'var(--text)' }}>
            Common questions.
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{
                borderColor: openIndex === i ? 'var(--accent-orange)' : 'var(--border)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm"
                style={{ color: 'var(--text)' }}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span
                  className="ml-4 shrink-0 transition-transform duration-200"
                  style={{
                    color: 'var(--accent-orange)',
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{
                    color: '#888',
                    visibility: openIndex === i ? 'visible' : 'hidden',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
