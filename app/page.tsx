import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkshopBanner from "@/components/WorkshopBanner";
import About from "@/components/About";
import ForWhom from "@/components/ForWhom";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InstagramCTA from "@/components/InstagramCTA";
import BlogTeaser from "@/components/BlogTeaser";
import NewsletterSection from "@/components/NewsletterSection";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#faf7f2]">
      <Navigation />
      <Hero />
      <WorkshopBanner />
      <About />
      <ForWhom />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <InstagramCTA />
      <BlogTeaser />
      <NewsletterSection />
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
