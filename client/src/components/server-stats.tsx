import { useEffect, useState } from "react";

export default function ServerStats() {
  const [playerCount, setPlayerCount] = useState(127);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Animate numbers on component mount
    if (!animated) {
      let start = 0;
      const end = 127;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        setPlayerCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setPlayerCount(end);
          setAnimated(true);
        }
      }, 16);

      return () => clearInterval(timer);
    }

    // Simulate real-time updates
    const interval = setInterval(() => {
      setPlayerCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, Math.min(150, prev + change));
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [animated]);

  const stats = [
    {
      icon: "fas fa-server",
      title: "Stato Server",
      value: "Online",
      color: "text-green-500",
      indicator: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />,
    },
    {
      icon: "fas fa-users",
      title: "Giocatori Online",
      value: playerCount,
      subtitle: "/ 500",
      color: "text-blue-500",
    },
    {
      icon: "fas fa-clock",
      title: "Uptime",
      value: "99.8%",
      subtitle: "Ultimi 30 giorni",
      color: "text-emerald-400",
    },
    {
      icon: "fas fa-cube",
      title: "Versione",
      value: "1.20.1",
      subtitle: "Java Edition",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="server-info" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Statistiche Server</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 island-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              {stat.indicator && (
                <div className="flex items-center justify-center">
                  {stat.indicator}
                  <span className={`${stat.color} font-semibold`}>{stat.value}</span>
                </div>
              )}
              {!stat.indicator && (
                <>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  {stat.subtitle && <div className="text-sm opacity-60">{stat.subtitle}</div>}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
