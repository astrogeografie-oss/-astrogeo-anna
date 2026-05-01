import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="cosmic-bg">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  );
}
