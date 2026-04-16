import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { eventDetails } from '@/lib/eventDetails'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  title: 'Synthesis Hacks',
  description: `A beginner-friendly, collaborative high school hackathon on ${eventDetails.date} at ${eventDetails.venue}.`,
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: 'Synthesis Hacks',
    description: `Join us on ${eventDetails.date} from ${eventDetails.time} at ${eventDetails.fullLocation}.`,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className={bricolage.className}>{children}</body>
    </html>
  )
}
