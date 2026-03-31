'use client'
import { useRef } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#register', label: 'Register' },
  { href: '#faq', label: 'FAQ' },
  { href: '#sponsors', label: 'Sponsors' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const nav = navRef.current
    if (!nav) return
    const navRect = nav.getBoundingClientRect()
    const linkRect = e.currentTarget.getBoundingClientRect()

    const pulse = document.createElement('div')
    const size = Math.max(navRect.width, navRect.height) * 2
    pulse.style.cssText = `
      position: absolute;
      background: radial-gradient(circle, rgba(246,134,39,0.2) 0%, rgba(246,134,39,0) 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      left: ${linkRect.left - navRect.left + linkRect.width / 2}px;
      top: ${linkRect.top - navRect.top + linkRect.height / 2}px;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%) scale(0);
      animation: pulse-nav 0.5s ease-out forwards;
    `
    nav.appendChild(pulse)
    pulse.addEventListener('animationend', () => pulse.remove())
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-fit">
      {/* Offset shadow — matches button-56 design language */}
      <div
        className="absolute rounded-full w-full h-full -z-10"
        style={{ top: '10px', left: '10px', backgroundColor: 'var(--accent-orange)' }}
      />
      <nav
        ref={navRef}
        className="relative px-10 py-4 rounded-full flex gap-8 overflow-hidden"
        style={{ backgroundColor: 'var(--surface)', border: '2px solid var(--border)' }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="relative z-10 font-bold text-sm no-underline transition-colors duration-300"
            style={{ color: 'var(--text)' }}
            onMouseEnter={handleMouseEnter}
            onClick={(e) => handleClick(e, href)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
