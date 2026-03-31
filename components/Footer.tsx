// Update these when accounts/emails are confirmed
const CONTACT_EMAIL = 'hello@synthesishacks.com'
const INSTAGRAM_URL = 'https://instagram.com/synthesishacks'
const LINKEDIN_URL = 'https://linkedin.com/company/synthesishacks'

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-extrabold text-sm" style={{ color: 'var(--text)' }}>
            Synthesis Hacks
          </p>
          <p className="text-xs mt-1" style={{ color: '#555' }}>
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-bold" style={{ color: '#666' }}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f68627] transition-colors"
            style={{ color: '#666' }}
          >
            Instagram
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00a7e4] transition-colors"
            style={{ color: '#666' }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-[#f68627] transition-colors"
            style={{ color: '#666' }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
