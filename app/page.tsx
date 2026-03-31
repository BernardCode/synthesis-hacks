import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PreRegSection from '@/components/PreRegSection'
import FAQSection from '@/components/FAQSection'
import SponsorsSection from '@/components/SponsorsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PreRegSection />
        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  )
}
