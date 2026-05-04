import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InstagramCTA from "@/components/InstagramCTA";
import NewsletterSection from "@/components/NewsletterSection";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#faf7f2]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <InstagramCTA />
      <NewsletterSection />
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
