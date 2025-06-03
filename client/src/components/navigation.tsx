import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import logoPath from "@assets/5d3f5430d82097dcb19d1d1db0d6d4d3.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#server-info", label: "Server" },
    { href: "#modalita", label: "Modalità" },
    { href: "#discord", label: "Discord" },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoPath} alt="Clibify Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold gradient-text">Clibify</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-effect hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <i className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`} />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full glass-effect"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-effect rounded-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
