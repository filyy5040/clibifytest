import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DiscordSection from "@/components/discord-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand via-white to-blue-50 dark:from-ocean-dark dark:via-ocean-gray dark:to-slate-800 text-gray-800 dark:text-gray-100 transition-all duration-500">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DiscordSection />
      <Footer />
      
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          className={`w-14 h-14 island-gradient rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${
            showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <i className="fas fa-arrow-up text-white text-xl" />
        </button>
      </div>
    </div>
  );
}
