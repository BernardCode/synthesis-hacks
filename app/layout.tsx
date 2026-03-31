import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  title: 'Synthesis Hacks',
  description: 'A beginner-friendly, collaborative high school hackathon.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className={bricolage.className}>{children}</body>
    </html>
  )
}
