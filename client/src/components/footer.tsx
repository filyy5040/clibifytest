import logoPath from "@assets/5d3f5430d82097dcb19d1d1db0d6d4d3.png";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#server-info", label: "Info Server" },
    { href: "#news", label: "News" },
    { href: "#regole", label: "Regole" },
  ];

  const communityLinks = [
    { href: "#", label: "Discord" },
    { href: "#", label: "Forum" },
    { href: "#", label: "YouTube" },
    { href: "#", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoPath} alt="Clibify Logo" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold gradient-text">Clibify</span>
            </div>
            <p className="opacity-70">
              Il server Minecraft tropicale più bello d'Italia. Unisciti alla nostra avventura paradisiaca!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 opacity-70">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 opacity-70">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <i className="fas fa-envelope mr-2" />
                admin@clibify.xyz
              </li>
              <li>
                <i className="fas fa-server mr-2" />
                mc.clibify.xyz
              </li>
              <li>
                <i className="fas fa-globe mr-2" />
                clibify.xyz
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center opacity-60">
          <p>&copy; 2024 Clibify Server. Tutti i diritti riservati. Minecraft è un marchio registrato di Mojang Studios.</p>
        </div>
      </div>
    </footer>
  );
}
