import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pages = [
  {
    id: 1,
    title: "El Universo",
    subtitle: "Una introducción al cosmos infinito",
    image: "https://images.unsplash.com/photo-1510143969120-c9031b3c46ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzZSUyMGNvc21vcyUyMHN0YXJzJTIwZ2FsYXh5fGVufDF8fHx8MTc3MzQ0NjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-indigo-950 via-blue-950 to-slate-950",
    accent: "#818cf8",
    tag: "PÁGINA 1 DE 5",
    sections: [
      {
        heading: "¿Qué es el Universo?",
        text: "El Universo es la totalidad del espacio, el tiempo, la materia y la energía que existe. Tiene aproximadamente 13.800 millones de años de antigüedad y se originó con el Big Bang, una explosión primordial que dio inicio a toda la existencia conocida.",
      },
      {
        heading: "Dimensiones inimaginables",
        text: "El diámetro observable del Universo se estima en unos 93.000 millones de años luz. La luz viaja a 300.000 km por segundo, y aun así tardaría miles de millones de años en cruzar el cosmos. Existen al menos 2 billones de galaxias, cada una con cientos de miles de millones de estrellas.",
      },
      {
        heading: "Composición del Universo",
        text: "Solo el 5% del Universo está formado por materia ordinaria (átomos). El 27% es materia oscura, una sustancia invisible que no emite luz pero ejerce gravitación. El 68% restante es energía oscura, responsable de la expansión acelerada del Universo.",
      },
    ],
    fact: "🌌 Dato curioso: Si redujeras el Universo al tamaño de la Tierra, el Sol sería invisible a simple vista.",
  },
  {
    id: 2,
    title: "El Sistema Solar",
    subtitle: "Nuestro hogar en la Vía Láctea",
    image: "https://images.unsplash.com/photo-1657063756791-4376708a4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHN5c3RlbSUyMHBsYW5ldHMlMjBzcGFjZXxlbnwxfHx8fDE3NzMzNzg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-950 via-amber-950 to-slate-950",
    accent: "#fb923c",
    tag: "PÁGINA 2 DE 5",
    sections: [
      {
        heading: "Nuestro Sistema Solar",
        text: "El Sistema Solar está formado por el Sol y todos los objetos celestes que orbitan a su alrededor: 8 planetas, 5 planetas enanos reconocidos, más de 200 lunas, millones de asteroides y cometas. Se formó hace aproximadamente 4.600 millones de años a partir de una nube de gas y polvo.",
      },
      {
        heading: "Los 8 planetas",
        text: "Los planetas interiores rocosos son: Mercurio, Venus, La Tierra y Marte. Los planetas exteriores gaseosos son: Júpiter (el mayor), Saturno (con sus magníficos anillos), Urano y Neptuno. Plutón fue reclasificado como planeta enano en 2006.",
      },
      {
        heading: "El Sol, nuestra estrella",
        text: "El Sol representa el 99,86% de toda la masa del Sistema Solar. Su temperatura superficial es de unos 5.500°C, mientras que su núcleo alcanza los 15 millones de grados. La luz solar tarda 8 minutos y 20 segundos en llegar a la Tierra.",
      },
    ],
    fact: "☀️ Dato curioso: Júpiter es tan grande que 1.300 planetas Tierra cabrían en su interior.",
  },
  {
    id: 3,
    title: "Estrellas y Galaxias",
    subtitle: "Los bloques constructores del cosmos",
    image: "https://images.unsplash.com/photo-1753221519439-a81c87dfd31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzdGFycyUyMG1pbGt5JTIwd2F5fGVufDF8fHx8MTc3MzQ0NjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-purple-950 via-violet-950 to-slate-950",
    accent: "#c084fc",
    tag: "PÁGINA 3 DE 5",
    sections: [
      {
        heading: "Las Estrellas",
        text: "Una estrella es una gigantesca esfera de plasma que genera energía mediante fusión nuclear en su núcleo. Las estrellas varían enormemente en tamaño: desde enanas blancas (similares a la Tierra) hasta hipergigantes rojas miles de veces más grandes que el Sol. Su ciclo de vida puede durar millones o miles de millones de años.",
      },
      {
        heading: "La Vía Láctea",
        text: "Nuestra galaxia, la Vía Láctea, es una galaxia espiral barrada con unos 200-400 mil millones de estrellas. Tiene aproximadamente 100.000 años luz de diámetro. El Sistema Solar orbita el centro galáctico a unos 26.000 años luz de distancia, completando una vuelta cada 225 millones de años.",
      },
      {
        heading: "Tipos de galaxias",
        text: "Las galaxias se clasifican en espirales (como la Vía Láctea y Andrómeda), elípticas (las más comunes, con forma ovalada) e irregulares (sin forma definida). Las galaxias se agrupan en cúmulos y supercúmulos, formando la estructura a gran escala del Universo.",
      },
    ],
    fact: "⭐ Dato curioso: Hay más estrellas en el Universo que granos de arena en todas las playas de la Tierra.",
  },
  {
    id: 4,
    title: "Los Agujeros Negros",
    subtitle: "Los monstruos invisibles del espacio",
    image: "https://images.unsplash.com/photo-1559762691-617a33825bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzczNDQ2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-gray-950 via-zinc-950 to-slate-950",
    accent: "#f43f5e",
    tag: "PÁGINA 4 DE 5",
    sections: [
      {
        heading: "¿Qué es un agujero negro?",
        text: "Un agujero negro es una región del espacio-tiempo donde la gravedad es tan extrema que nada, ni siquiera la luz, puede escapar de ella. Se forman cuando estrellas masivas colapsan al final de su vida. El límite de no retorno se llama 'horizonte de sucesos'.",
      },
      {
        heading: "Tipos de agujeros negros",
        text: "Existen tres tipos principales: los de masa estelar (resultado del colapso de una estrella masiva), los de masa intermedia (entre 100 y 100.000 masas solares) y los supermasivos (con millones o miles de millones de masas solares), que residen en el centro de casi todas las galaxias.",
      },
      {
        heading: "Primera imagen real",
        text: "En 2019, el Telescopio de Horizonte de Eventos capturó la primera imagen de un agujero negro: M87*, ubicado a 55 millones de años luz, con una masa equivalente a 6.500 millones de soles. En 2022 se fotografió Sagitario A*, el agujero negro supermasivo en el centro de la Vía Láctea.",
      },
    ],
    fact: "🕳️ Dato curioso: El tiempo transcurre más lento cerca de un agujero negro debido a la dilatación gravitacional del tiempo.",
  },
  {
    id: 5,
    title: "Exploración Espacial",
    subtitle: "La aventura humana más allá de la Tierra",
    image: "https://images.unsplash.com/photo-1714254795644-710ad9a7e046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZSUyMGV4cGxvcmF0aW9uJTIwcm9ja2V0fGVufDF8fHx8MTc3MzQ0NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-teal-950 via-cyan-950 to-slate-950",
    accent: "#2dd4bf",
    tag: "PÁGINA 5 DE 5",
    sections: [
      {
        heading: "Los inicios de la era espacial",
        text: "La exploración espacial comenzó el 4 de octubre de 1957, cuando la Unión Soviética lanzó el Sputnik 1, el primer satélite artificial. En 1961, Yuri Gagarin se convirtió en el primer ser humano en viajar al espacio. El 20 de julio de 1969, Neil Armstrong pisó la Luna en la misión Apolo 11.",
      },
      {
        heading: "Logros modernos",
        text: "La Estación Espacial Internacional (ISS) lleva habitada de forma continua desde el año 2000. Los rovers de la NASA (Curiosity y Perseverance) exploran la superficie de Marte. El Telescopio Espacial James Webb, lanzado en 2021, observa las primeras galaxias del Universo con una resolución sin precedentes.",
      },
      {
        heading: "El futuro de la exploración",
        text: "Agencias espaciales y empresas privadas como SpaceX, Blue Origin y NASA planean misiones tripuladas a Marte para la década de 2030. Se investiga la colonización lunar, la minería de asteroides y viajes interestelares. El programa Artemis busca llevar humanos de regreso a la Luna y establecer una base permanente.",
      },
    ],
    fact: "🚀 Dato curioso: La Voyager 1, lanzada en 1977, es el objeto humano más lejano: a más de 23.000 millones de km de la Tierra.",
  },
];

export default function InfoSite() {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const page = pages[currentPage];

  const goTo = (index: number, dir: "next" | "prev") => {
    if (animating || index < 0 || index >= pages.length) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage(index);
      setAnimating(false);
    }, 350);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${page.color} transition-all duration-700 text-white`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔭</span>
            <span
              className="tracking-widest text-xs uppercase opacity-70"
              style={{ color: page.accent }}
            >
              Enciclopedia del Cosmos
            </span>
          </div>
          {/* Page dots */}
          <div className="flex gap-2">
            {pages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i, i > currentPage ? "next" : "prev")}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentPage ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === currentPage ? page.accent : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Ir a página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main
        className={`max-w-5xl mx-auto px-6 py-10 transition-all duration-350 ${
          animating
            ? direction === "next"
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
            : "opacity-100 translate-x-0"
        }`}
        style={{ transitionTimingFunction: "ease-in-out" }}
      >
        {/* Tag */}
        <div className="mb-4">
          <span
            className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{
              color: page.accent,
              borderColor: page.accent + "55",
              backgroundColor: page.accent + "15",
            }}
          >
            {page.tag}
          </span>
        </div>

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl" style={{ minHeight: "340px" }}>
          <ImageWithFallback
            src={page.image}
            alt={page.title}
            className="w-full object-cover"
            style={{ height: "340px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="mb-2" style={{ color: "#fff" }}>
              {page.title}
            </h1>
            <p className="opacity-80 text-lg">{page.subtitle}</p>
          </div>
        </div>

        {/* Content sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {page.sections.map((section, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ backgroundColor: page.accent }}
              />
              <h3 className="mb-3" style={{ color: page.accent }}>
                {section.heading}
              </h3>
              <p className="text-white/75 leading-relaxed text-sm">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Fact box */}
        <div
          className="rounded-2xl p-5 mb-10 border"
          style={{
            backgroundColor: page.accent + "18",
            borderColor: page.accent + "40",
          }}
        >
          <p className="text-white/90 text-sm">{page.fact}</p>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => goTo(currentPage - 1, "prev")}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Página anterior
          </button>

          <span className="text-white/40 text-sm">
            {currentPage + 1} / {pages.length}
          </span>

          <button
            onClick={() => goTo(currentPage + 1, "next")}
            disabled={currentPage === pages.length - 1}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border text-white font-medium hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            style={{
              backgroundColor: page.accent,
              borderColor: page.accent,
              color: "#0f0f1a",
            }}
          >
            Siguiente página
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white/30 text-xs border-t border-white/10 mt-6">
        Enciclopedia del Cosmos &copy; 2026 · Todos los derechos reservados
      </footer>
    </div>
  );
}
