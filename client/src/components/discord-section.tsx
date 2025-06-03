export default function DiscordSection() {
  return (
    <section id="discord" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Unisciti alla Community</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-80">
          Entra nel nostro server Discord per rimanere sempre aggiornato, fare nuove amicizie e coordinare le tue avventure!
        </p>

        <div className="glass-effect p-8 rounded-2xl max-w-md mx-auto">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fab fa-discord text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Discord Server</h3>
          <p className="opacity-80 mb-6">Entra ora nella community di ClibifyMC</p>
          <a 
            href="https://discord.gg/2zbP9CztEd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            <i className="fab fa-discord mr-2" />
            Unisciti Ora
          </a>
        </div>
      </div>
    </section>
  );
}
