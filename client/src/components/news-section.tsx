export default function NewsSection() {
  const news = [
    {
      date: "5 Gennaio 2024",
      title: "Aggiornamento 1.20.1 Disponibile!",
      description: "Il server è stato aggiornato alla versione 1.20.1 con nuovi biomi tropicali e creature esotiche da scoprire.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-blue-500",
    },
    {
      date: "2 Gennaio 2024",
      title: "Torneo di Costruzione Tropicale",
      description: "Partecipa al nostro torneo mensile di costruzione! Tema: \"Resort Paradisiaco\". Premi incredibili!",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-emerald-400",
    },
    {
      date: "30 Dicembre 2023",
      title: "Nuova Isola del Tesoro",
      description: "È stata scoperta una nuova isola misteriosa piena di tesori nascosti e sfide emozionanti!",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Ultime Notizie</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className={`text-sm ${article.color} mb-2`}>{article.date}</div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="opacity-80 mb-4">{article.description}</p>
                <button className="text-blue-500 hover:text-emerald-400 transition-colors">
                  Leggi di più →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
