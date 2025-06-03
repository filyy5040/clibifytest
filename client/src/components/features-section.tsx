export default function FeaturesSection() {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Mondo Tropicale Unico",
      description: "Esplora isole paradisiache con biomi tropicali personalizzati, spiagge cristalline e giungle misteriose piene di tesori nascosti.",
      color: "text-blue-500",
    },
    {
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Community Attiva",
      description: "Una comunità italiana amichevole e accogliente, sempre pronta ad aiutarsi a vicenda nelle avventure più epiche.",
      color: "text-emerald-400",
    },
    {
      image: "https://pixabay.com/get/g6fc3dcc7596c9d9bfa5f0dc3d057bc10847374e50a7e7ef51a85283632053d33449e3ebee53b010a779c93776446f45c53dce8acc39d974a480d03830f72538a_1280.jpg",
      title: "Eventi Speciali",
      description: "Competizioni settimanali, costruzioni collaborative e eventi stagionali che mantengono l'esperienza sempre fresca e divertente.",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Perché Scegliere Clibify?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
