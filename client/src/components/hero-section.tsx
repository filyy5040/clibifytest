import { useState } from "react";
import logoPath from "@assets/5d3f5430d82097dcb19d1d1db0d6d4d3.png";

export default function HeroSection() {
  const [copySuccess, setCopySuccess] = useState(false);
  const serverIP = "mc.clibify.xyz";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      
      // Show popup notification
      const popup = document.createElement('div');
      popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-2xl z-50 animate-pulse';
      popup.innerHTML = '<i class="fas fa-check mr-2"></i>IP copiato nella clipboard!';
      document.body.appendChild(popup);
      
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute bottom-10 left-10 animate-wave">
          <i className="fas fa-tree text-6xl text-emerald-400" />
        </div>
        <div className="absolute bottom-20 right-20 animate-wave" style={{ animationDelay: "1s" }}>
          <i className="fas fa-tree text-5xl text-emerald-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-float">
          <img
            src={logoPath}
            alt="Clibify Server Logo"
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl animate-glow"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-pulse-slow">
          Clibify
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80">
          Benvenuto nell'isola tropicale più emozionante di Minecraft! Esplora, costruisci e sopravvivi nel nostro mondo paradisiaco.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <div className="glass-effect px-8 py-4 rounded-full">
            <span className="text-lg font-semibold">IP Server: </span>
            <code className="text-blue-500 font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded">
              {serverIP}
            </code>
            <button
              onClick={copyToClipboard}
              className="ml-3 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <i className={`fas ${copySuccess ? "fa-check text-green-500" : "fa-copy"}`} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button 
            onClick={copyToClipboard}
            className="px-8 py-4 island-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-play mr-2" />
            Inizia a Giocare
          </button>
          <button className="px-8 py-4 glass-effect hover:bg-blue-500 hover:text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            <i className="fab fa-discord mr-2" />
            Unisciti a Discord
          </button>
        </div>
      </div>
    </section>
  );
}
