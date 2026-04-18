import type { Metadata } from "next";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

export const metadata: Metadata = {
  title: "Synthesis Hacks · High School Hackathon · May 23, 2026",
  description:
    "Synthesis Hacks is a free, beginner-friendly 12-hour hackathon for high school students at Google Humbolt in Sunnyvale on May 23, 2026. Build something real. Meet people who get it.",
  openGraph: {
    title: "Synthesis Hacks",
    description: "A free 12-hour hackathon for high schoolers in Sunnyvale. May 23, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
