import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = 'https://synthesishacks.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Synthesis Hacks - Free High School Hackathon | May 23, 2026 · Sunnyvale, CA",
  description:
    "A free, beginner-friendly 12-hour hackathon for Bay Area high school students. Build a real project, meet mentors, and compete for prizes. May 23, 2026 at Google Humboldt in Sunnyvale, CA. No experience needed.",
  keywords: [
    "high school hackathon",
    "teen hackathon",
    "Bay Area hackathon",
    "Sunnyvale hackathon",
    "beginner hackathon 2026",
    "free student hackathon",
    "high school coding competition",
    "synthesis hacks",
    "Google Humboldt hackathon",
    "Silicon Valley high school hackathon",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Synthesis Hacks - Free High School Hackathon | May 23, 2026",
    description:
      "A free 12-hour hackathon for Bay Area high schoolers. Build something real. No experience needed. May 23, 2026 · Google Humboldt, Sunnyvale.",
    type: "website",
    url: SITE_URL,
    siteName: "Synthesis Hacks",
    locale: "en_US",
    images: [
      {
        url: '/hackclub-card-bg.png',
        width: 1200,
        height: 630,
        alt: "Synthesis Hacks - High School Hackathon, May 23 2026, Sunnyvale CA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Synthesis Hacks - Free High School Hackathon | May 23, 2026",
    description:
      "A free 12-hour hackathon for Bay Area high schoolers. No experience needed. May 23 · Google Humboldt, Sunnyvale.",
    images: ['/hackclub-card-bg.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      name: 'Synthesis Hacks',
      url: SITE_URL,
      startDate: '2026-05-23T08:00:00-07:00',
      endDate: '2026-05-23T20:00:00-07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      description:
        'A free, beginner-friendly 12-hour hackathon for Bay Area high school students (grades 9–12). Build a real project, form a team of 2–4, and compete for prizes at Google Humboldt in Sunnyvale, CA. No experience required.',
      image: `${SITE_URL}/hackclub-card-bg.png`,
      location: {
        '@type': 'Place',
        name: 'Google Humboldt',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '227 Humboldt Ct',
          addressLocality: 'Sunnyvale',
          addressRegion: 'CA',
          postalCode: '94089',
          addressCountry: 'US',
        },
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/SoldOut',
        url: SITE_URL,
        validFrom: '2026-04-01',
      },
      organizer: {
        '@type': 'Organization',
        name: 'Synthesis Hacks',
        url: SITE_URL,
        email: 'team@synthesishacks.com',
      },
      isAccessibleForFree: true,
      typicalAgeRange: '14-18',
      audience: {
        '@type': 'Audience',
        audienceType: 'High school students, grades 9–12',
      },
    },
    {
      '@type': 'WebSite',
      url: SITE_URL,
      name: 'Synthesis Hacks',
      description: 'A free beginner-friendly high school hackathon in Sunnyvale, CA.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
