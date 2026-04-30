import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Prizes from "@/components/Prizes";
import Agenda from "@/components/Agenda";
import Location from "@/components/Location";
import RegisterForm from "@/components/RegisterForm";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <HowItWorks />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <Prizes />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <Agenda />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <Location />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <RegisterForm />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <FAQ />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <hr className="divider" />
        </div>

        <Sponsors />
      </main>

      <Footer />
    </>
  );
}
