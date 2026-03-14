import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Props {
  onStart: () => void;
}

export default function StoryCover({ onStart }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638616587511-4925b47e794b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHNpbGhvdWV0dGUlMjBzdW5zZXQlMjBza3klMjBsb3ZlfGVufDF8fHx8MTc3MzQ0ODM3MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nuestra Historia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-rose-400 opacity-20 animate-bounce select-none"
            style={{
              left: `${5 + i * 5.5}%`,
              top: `${10 + (i % 5) * 18}%`,
              fontSize: `${8 + (i % 4) * 6}px`,
              animationDuration: `${3 + (i % 5)}s`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {i % 3 === 0 ? "♥" : i % 3 === 1 ? "✦" : "·"}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-lg transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Top decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-rose-400/50" />
          <span className="text-rose-300 text-xs tracking-widest uppercase">Aquí</span>
          <div className="h-px w-16 bg-rose-400/50" />
        </div>

        <p className="text-rose-300 tracking-widest text-sm uppercase mb-3">Aquí nuestra historia</p>

        <h1
          className="text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1 }}
        >
          Nuestra
          <br />
          <span className="text-rose-400">Historia</span>
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Un camino de &quot;te odio, me caes mal&quot; que se transformó, sin darnos cuenta, 
          en el amor más bonito e inesperado de nuestras vidas.
        </p>

        {/* Timeline preview */}
        <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
          {[
            { label: "2022", desc: "El comienzo" },
            { label: "Jun 29", desc: "La confesión" },
            { label: "Ago 1", desc: "Novios" },
            { label: "Feb 24", desc: "La despedida" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="text-center">
                <div className="text-rose-400 text-xs font-semibold">{item.label}</div>
                <div className="text-white/40 text-xs">{item.desc}</div>
              </div>
              {i < 3 && <div className="w-4 h-px bg-rose-800/60" />}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #f43f5e, #ec4899)",
            boxShadow: "0 0 30px rgba(244,63,94,0.4)",
          }}
        >
          <span>Leer nuestra historia</span>
          <span className="text-lg">💌</span>
          {/* Shimmer */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 rounded-full" />
        </button>

        <p className="text-white/25 text-xs mt-6">7 capítulos · Una historia de amor real</p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-950 to-transparent" />
    </div>
  );
}
