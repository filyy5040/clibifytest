export default function FeaturesSection() {
  const gameModes = [
    {
      icon: "fas fa-mountain",
      title: "SMP",
      description: "Competi con tutti i giocatori e diventa il più forte di tutti!",
      color: "text-green-500",
    },
    {
      icon: "fas fa-gift",
      title: "Gumball Box",
      description: "Un boxpvp dedicato a Gumball, Diventa il più forte e competi con tutti.",
      color: "text-purple-500",
    },
    {
      icon: "fas fa-rocket",
      title: "Space Prison",
      description: "Mina nelle miniere spaziali, ricche e stupende.",
      color: "text-blue-500",
    },
    {
      icon: "fas fa-palm-tree",
      title: "Oasi",
      description: "Divertiti, fai nuove amicizie, partecipa a minigames e integrati nella community in una modalità dove ti puoi rilassare!",
      color: "text-emerald-400",
    },
    {
      icon: "fas fa-fire",
      title: "Lava Rise",
      description: "Sopravvivi in una zona ristretta con la lava che sale ogni 30 secondi, Vinci e divertiti.",
      color: "text-red-500",
    },
  ];

  return (
    <section id="modalita" className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Modalità di Gioco</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameModes.map((mode, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 island-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${mode.icon} text-white text-2xl`} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-center ${mode.color}`}>
                {mode.title}
              </h3>
              <p className="opacity-80 text-center">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
