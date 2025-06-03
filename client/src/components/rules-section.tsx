export default function RulesSection() {
  const ruleCategories = [
    {
      icon: "fas fa-handshake",
      title: "Rispetto Reciproco",
      color: "text-blue-500",
      rules: [
        "Rispetta tutti i giocatori",
        "Niente linguaggio offensivo",
        "Aiuta i nuovi giocatori",
      ],
    },
    {
      icon: "fas fa-hammer",
      title: "Fair Play",
      color: "text-emerald-400",
      rules: [
        "Niente cheat o hack",
        "Niente griefing",
        "Rispetta le proprietà altrui",
      ],
    },
    {
      icon: "fas fa-home",
      title: "Costruzioni",
      color: "text-orange-500",
      rules: [
        "Costruisci con stile tropicale",
        "Rispetta l'ambiente naturale",
        "Pulisci dopo te stesso",
      ],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Sicurezza",
      color: "text-purple-500",
      rules: [
        "Proteggi i tuoi oggetti",
        "Segnala comportamenti sospetti",
        "Usa comandi di protezione",
      ],
    },
  ];

  return (
    <section id="regole" className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Regole del Server</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {ruleCategories.map((category, index) => (
            <div key={index} className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 island-gradient rounded-full flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-white text-xl`} />
                </div>
                <h3 className={`text-2xl font-bold ${category.color}`}>{category.title}</h3>
              </div>
              <ul className="space-y-3 opacity-80">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <i className="fas fa-check text-emerald-400 mt-1 mr-3" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
