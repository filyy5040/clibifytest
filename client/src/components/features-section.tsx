export default function FeaturesSection() {
  const gameModes = [
    {
      icon: "fas fa-mountain",
      title: "SMP",
      description: "Survival Multiplayer classico dove puoi costruire, esplorare e sopravvivere insieme ad altri giocatori nell'isola tropicale.",
      color: "text-green-500",
    },
    {
      icon: "fas fa-gift",
      title: "Gumball Box",
      description: "Modalità speciale con premi e sorprese casuali da scoprire in misteriose scatole sparse per l'isola.",
      color: "text-purple-500",
    },
    {
      icon: "fas fa-rocket",
      title: "Space Prison",
      description: "Avventura spaziale dove devi sopravvivere e prosperare in una prigione galattica con tecnologie futuristiche.",
      color: "text-blue-500",
    },
    {
      icon: "fas fa-palm-tree",
      title: "Oasi",
      description: "Modalità rilassante in un'oasi tropicale perfetta per costruire e godersi l'atmosfera paradisiaca.",
      color: "text-emerald-400",
    },
    {
      icon: "fas fa-fire",
      title: "Lava Rise",
      description: "Sfida adrenalinica dove devi sopravvivere mentre la lava sale costantemente, mettendo alla prova le tue abilità.",
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
