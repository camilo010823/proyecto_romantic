interface Props {
  accent: string;
}

const events = [
  {
    date: "2022",
    emoji: "🏫",
    title: "El primer encuentro",
    desc: "Primera clase de inglés. Un examen. Una mirada fría. Y el inicio de todo.",
  },
  {
    date: "2022",
    emoji: "☂️",
    title: "El saco prestado",
    desc: "Un día de lluvia, un saco negro y blanco, y el primer gesto que nadie olvidó.",
  },
  {
    date: "2022–2023",
    emoji: "🎨",
    title: "La exposición de arte",
    desc: "Te quedaste sin pareja. Me ofrecí a ayudarte. Y con ese abrazo final, todo cambió.",
  },
  {
    date: "29 Jun 2023",
    emoji: "💬",
    title: "La confesión",
    desc: "Me lo dijiste. Por fin lo escuché de tu boca. Un 29 de junio que no olvidaremos.",
    highlight: true,
  },
  {
    date: "1 Ago 2023",
    emoji: "🌸",
    title: "Mi cumpleaños",
    desc: "Flores, un peluche y la pregunta más bonita. Respondí que sí.",
    highlight: true,
  },
  {
    date: "Ago–Nov 2023",
    emoji: "🚴",
    title: "Novios",
    desc: "Bicicletas, caminatas, abrazos, mensajes hasta tarde. Construyendo nuestro manual.",
  },
  {
    date: "8 Feb 2024",
    emoji: "💞",
    title: "El reencuentro",
    desc: "Por fin nos volvimos a ver. Abrazos que no querían terminar nunca.",
  },
  {
    date: "23 Feb 2024",
    emoji: "😢",
    title: "La víspera",
    desc: "Un peluche de Mario, lágrimas y el corazón partido por la inminente despedida.",
  },
  {
    date: "24 Feb 2024",
    emoji: "🕊️",
    title: "La despedida",
    desc: "El buzo mío que llevabas puesto. El Mario en tus manos. Ese último abrazo que dolió.",
    highlight: true,
  },
  {
    date: "11:11 ✨",
    emoji: "💕",
    title: "Continuará…",
    desc: "Esta historia no ha terminado. Solo está en pausa, esperando su reencuentro.",
    highlight: true,
  },
];

export default function StoryTimeline({ accent }: Props) {
  return (
    <div className="mt-2 mb-8">
      <h2 className="text-center mb-2" style={{ color: accent }}>
        Momentos que nos marcaron
      </h2>
      <p className="text-center text-white/40 text-sm mb-8">Cada fecha, una pieza de nuestra historia</p>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px md:left-1/2"
          style={{ backgroundColor: accent + "30" }}
        />

        <div className="space-y-6">
          {events.map((ev, i) => {
            const isRight = i % 2 === 0;
            return (
              <div key={i} className={`relative flex items-start gap-4 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div
                  className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10 mt-1"
                  style={{
                    backgroundColor: ev.highlight ? accent : "transparent",
                    borderColor: accent,
                  }}
                />

                {/* Spacer for md */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isRight ? "md:pl-8" : "md:pr-8"}`}>
                  <div
                    className="rounded-2xl p-4 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: ev.highlight ? accent + "18" : "rgba(255,255,255,0.04)",
                      borderColor: ev.highlight ? accent + "55" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{ev.emoji}</span>
                      <span
                        className="text-xs tracking-wider uppercase"
                        style={{ color: ev.highlight ? accent : "rgba(255,255,255,0.4)" }}
                      >
                        {ev.date}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm font-medium mb-1">{ev.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
