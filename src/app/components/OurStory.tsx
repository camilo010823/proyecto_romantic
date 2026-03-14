import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import StoryCover from "./StoryCover";
import StoryTimeline from "./StoryTimeline";

const pages = [
  {
    id: 1,
    tag: "Capitulo 1",
    title: "El Comienzo",
    subtitle: "De 'me caes mal' a 'te amo para siempre'",
    image:
      "https://images.unsplash.com/photo-1763890499068-baf540cacf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlJTIwY291cGxlJTIwc2Nob29sJTIwY2FtcHVzJTIwcm9tYW50aWN8ZW58MXx8fHwxNzczNDQ4MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-rose-950 via-pink-950 to-slate-950",
      accent: "#fb7185",
      card: "bg-rose-950/40",
      border: "border-rose-800/30",
    },
    quote:
      "\"Nuestra historia no es de mariposas en el estomago ni de un amor a primera vista.\"",
    content: [
      {
        heading: "El primer encuentro",
        text: "No nos conocimos por eleccion propia; mas bien, el destino nos obligo a cruzar caminos. Nos mirabamos, pero no nos hablabamos. Compartimos rasgos similares de personalidad, o al menos asi parecia. Nuestra primera conversacion tuvo lugar el dia de mi primera clase de ingles.",
      },
      {
        heading: "El examen calificado",
        text: "La sesion comenzo con un examen, y aquel nino de mirada seria y rostro inexpresivo fue el encargado de calificarlo. Cuando me entrego el examen, me miro y dijo con voz neutral: \"Yo califique tu examen\". Tome la hoja y me di la vuelta sin decir una palabra.",
      },
      {
        heading: "Los primeros pasos",
        text: "Dias despues, conoci a mi mejor amigo Luis, quien eventualmente nos presentaria de manera formal. Yo era la nina timida que siempre llevaba cubrebocas, mientras que el era el chico callado con una expresion severa y un aire de antisocial. Decidi dejar de lado mi antipatia inicial e intente entablar conversacion con el.",
      },
    ],
  },
  {
    id: 2,
    tag: "Capitulo 2",
    title: "La Amistad",
    subtitle: "Caminatas, helados y el saco prestado",
    image:
      "https://images.unsplash.com/photo-1773397357367-5c938e22429b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwd2Fsa2luZyUyMHRvZ2V0aGVyJTIwY2l0eSUyMHN0cmVldHxlbnwxfHx8fDE3NzM0NDgwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-violet-950 via-purple-950 to-slate-950",
      accent: "#a78bfa",
      card: "bg-violet-950/40",
      border: "border-violet-800/30",
    },
    quote:
      "\"En un entorno donde cada accion era motivo de critica, estar con el era un respiro.\"",
    content: [
      {
        heading: "El camino al colegio",
        text: "Poco a poco, comenzamos a caminar juntos hacia el colegio, ya que viviamos relativamente cerca. Con el tiempo, nuestra relacion se volvio mas cercana. El me molestaba constantemente con el tema del cubrebocas, retandome a quitarmelo, pero yo lo ignoraba. Sin embargo, logro darme la confianza suficiente para sentirme comoda siendo yo misma.",
      },
      {
        heading: "Los helados en Mercurio",
        text: "La primera vez que me vio sin cubrebocas fue nuestra primera salida en grupo al centro comercial Mercurio. El eligio sabor unicornio, yo opte por chips y ron con pasas. En un instante, gire la cabeza y nuestras miradas se encontraron fugazmente antes de que el apartara la vista.",
      },
      {
        heading: "El saco que me prestaste",
        text: "Era un dia lluvioso y no traia paraguas, llegue muy mojada al colegio. Traias un saco negro y blanco en tu mochila. Insisti e insisti hasta que entraste al salon y sacaste el saco para darmelo. Sonrei y enseguida me lo coloque. Cuando lo devolvi, no pasaron 2 minutos antes de que empezaran las preguntas: 'Ese no es tu saco, Ange?'",
      },
    ],
  },
  {
    id: 3,
    tag: "Capitulo 3",
    title: "El Despertar",
    subtitle: "Cuando los sentimientos empezaron a hablar mas fuerte",
    image:
      "https://images.unsplash.com/photo-1724963624505-1ad5d91b8d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBpY2UlMjBjcmVhbSUyMHNob3AlMjBkYXRlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzczNDQ4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-amber-950 via-orange-950 to-slate-950",
      accent: "#fbbf24",
      card: "bg-amber-950/40",
      border: "border-amber-800/30",
    },
    quote: "\"Senti algo diferente. El dolor paso a un segundo plano, y se silencio el mundo.\"",
    content: [
      {
        heading: "La exposicion de arte",
        text: "Todo cambio en aquella exposicion de arte, cuando te quedaste sin pareja y me ofreci a ayudarte. Trabajamos juntos en ideas, presentaciones y mensajes. Y al final, cuando todo salio bien, nos dimos un abrazo. Fue rapido, espontaneo, pero marco un antes y un despues.",
      },
      {
        heading: "La caida en las escaleras",
        text: "Fue la primera vez que tomamos juntos. Estabamos con amigos en la casa de una amiga. Cuando salimos me cai en las escaleras. Lo que mas me sorprendio no fue la caida, sino tu reaccion: bajaste corriendo, te sentaste a mi lado y me acariciaste la frente. Senti el calor de tus manos, me senti segura.",
      },
      {
        heading: "Me daba cuenta",
        text: "Empezamos a ser muy cercanos, caminabamos juntos al colegio, me acompanabas a casa en las noches, saliamos mas seguido. Cada vez me senti mas comoda contigo, entiendamos nuestras formas de pensar, compartimos gustos en la musica. Y entonces me di cuenta: me gustabas.",
      },
    ],
  },
  {
    id: 4,
    tag: "Capitulo 4",
    title: "La Confesion",
    subtitle: "29 de junio · 1 de agosto de 2023",
    image:
      "https://images.unsplash.com/photo-1771570665615-453f75881df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbWJyYWNlJTIwcm9tYW50aWMlMjBzdW5zZXQlMjBsb3ZlfGVufDF8fHx8MTc3MzQ0ODAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-pink-950 via-rose-950 to-slate-950",
      accent: "#f472b6",
      card: "bg-pink-950/40",
      border: "border-pink-800/30",
    },
    quote:
      "\"No tuve el suficiente valor para decirte lo que queria gritar... pero te escuche.\"",
    content: [
      {
        heading: "29 de junio — Me lo dijiste",
        text: "Despues de que me consintieron mucho, de volver a salir y de que intentaste decirme una noche... a la suerte de mi parte, te escuche: me lo dijiste, y tambien me preguntaste si habia alguna posibilidad de que nos conociéramos bien. Asi fue como el 29 de junio me confesaste que yo te gustaba.",
      },
      {
        heading: "1 de agosto — Mi cumpleanos",
        text: "Ese dia lograste hacer que todo se sintiera mas bonito. Me regalaste chocolates, y me cantaron el 'Feliz cumpleanos' al menos cuatro veces. Al terminar el dia, cuando llegamos a la parada, ahi estabas. En tus manos llevabas flores y un peluche. Me miraste y, sin titubear, me propusiste ser tu pareja.",
      },
      {
        heading: "Mi respuesta",
        text: "Tome las flores, luego el peluche, y te lleve a un lugar un poco mas apartado, lejos de las miradas. Te dije: 'No se que hacer'. Me moria de nervios. Sentia que aun necesitabamos mas tiempo... pero el corazon me gano. Al llegar a mi casa, respond que si.",
      },
    ],
  },
  {
    id: 5,
    tag: "Capitulo 5",
    title: "Novios",
    subtitle: "Aprendiendo a querernos de una forma distinta",
    image:
      "https://images.unsplash.com/photo-1755003842734-382751c01a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjB3YWxraW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzczNDQ4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-teal-950 via-emerald-950 to-slate-950",
      accent: "#34d399",
      card: "bg-teal-950/40",
      border: "border-teal-800/30",
    },
    quote: "\"Fue como si, en otra vida, ya hubieramos estado juntos.\"",
    content: [
      {
        heading: "Los primeros dias confusos",
        text: "Aquellos primeros dias fueron confusos. No sabiamos si tratarnos como novios o como los amigos que habiamos sido. Queria abrazarte, queria estar pegada a ti todo el dia, pero no sabia como hacerlo sin que te sintieras incomodo. Me detenia el miedo de dar el primer paso.",
      },
      {
        heading: "Construyendo nuestro manual",
        text: "Poco a poco, dia tras dia, despedida tras despedida, fuimos construyendo nuestro propio manual de pareja. Mis brazos te extranaban, y los dias en que no nos veiamos se hacian eternos, pero los llenabamos de mensajes que hacian todo mas llevadero.",
      },
      {
        heading: "Los abrazos perfectos",
        text: "Los abrazos... esos abrazos perfectos, llenos de calidez, de carino, de verdad. Abrazos que solo se dan con una persona con la que compartes algo mas que palabras. En esos abrazos se sentia el corazon queriendo salirse del pecho. Nunca hubo un desequilibrio emocional. Los dos compartiamos la misma intensidad.",
      },
    ],
  },
  {
    id: 6,
    tag: "Capitulo 6",
    title: "La Despedida",
    subtitle: "23 y 24 de febrero de 2024",
    image:
      "https://images.unsplash.com/photo-1569614143555-c16fa782357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJld2VsbCUyMGdvb2RieWUlMjBodWclMjBhaXJwb3J0JTIwc2FkfGVufDF8fHx8MTc3MzQ0ODAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-slate-950 via-blue-950 to-indigo-950",
      accent: "#93c5fd",
      card: "bg-slate-900/50",
      border: "border-slate-700/30",
    },
    quote: "\"No era una despedida, era una pausa. Nuestro nosotros no termina.\"",
    content: [
      {
        heading: "El 23 de febrero",
        text: "Llegó el dia en que podriamos vernos una ultima vez antes de mi partida. Te habia comprado un peluche de Mario, me costo mucho conseguirlo. Cuando llegue, noté algo extrano. Estabas tomado. Me senti decepcionada. Una parte de mi queria irse, pero me quede. Logre calmarte. Te recostaste sobre mis piernas y, con lagrimas en los ojos, me hablaste con el corazon.",
      },
      {
        heading: "El 24 de febrero — La despedida real",
        text: "Llegaste al preuniversitario. Te vi al fondo, esperandome. Llevabas el buzo que yo habia usado el dia anterior, y tambien el pequeno Mario que te regale. Me dijiste: 'Es el ultimo dia que te voy a ver... y estamos aqui, en silencio, perdiendo el poco tiempo que tenemos.' Esa frase me rompio. Apoyé mi cabeza en tu hombro.",
      },
      {
        heading: "El ultimo momento",
        text: "Nos tomamos fotos, nos reimos, nos dimos esos pequenos gestos de carino. Compraste una malteada de oreo. Me arrepiento de haber vuelto a entrar al preuniversitario. Debi quedarme un rato mas contigo. Ese fue mi mayor arrepentimiento. Ese ultimo abrazo... que no fue abrazo, sino despedida.",
      },
    ],
  },
  {
    id: 7,
    tag: "Epilogo",
    title: "Continuara...",
    subtitle: "11:11 — Ya veo nuestro final feliz",
    image:
      "https://images.unsplash.com/photo-1646442063008-8cb5665d4267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVyJTIwcHJvbWlzZSUyMGhvcGUlMjBmdXR1cmV8ZW58MXx8fHwxNzczNDQ4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    palette: {
      bg: "from-rose-950 via-violet-950 to-indigo-950",
      accent: "#e879f9",
      card: "bg-violet-950/40",
      border: "border-violet-700/30",
    },
    quote: "\"Te prometo que volvere, con el amor intacto con el que me fui.\"",
    content: [
      {
        heading: "Lo que dejamos sembrado",
        text: "No es una despedida. Me alegro todo el tiempo que pasamos juntos, cada abrazo, cada gesto, cada momento. Te prometo que pase lo que pase, estare para ti. Que este tiempo, esta distancia que hoy se atraviesa entre nosotros, valdra la pena. Eres el amor de mi vida, el amor de mi alma, y eso jamas cambiara.",
      },
      {
        heading: "Mis promesas",
        text: "Te prometo que nunca me olvidare de ti. Que pase lo que pase, estaras en mi todo el tiempo. Te prometo que no amare a alguien mas, ni siquiera como llegue a amarte a ti. Te prometo que volvere, con el amor intacto con el que me fui, y con las ganas de verte y sonreir otra vez a tu lado.",
      },
      {
        heading: "Nuestro final feliz",
        text: "Confio en que somos un 'nosotros'. Confio en que esta historia aun no ha terminado, que solo esta en pausa. Sueno con una vida contigo: levantarnos cada dia tomados de la mano, superando todo juntos, cumpliendo metas, siendo felices. Contigo quiero empezar mi vida. Contigo, si me lo permites, tambien quiero terminarla.",
      },
    ],
    isLast: true,
  },
];

export default function OurStory() {
  const [showCover, setShowCover] = useState(true);
  const [coverFading, setCoverFading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [showTimeline, setShowTimeline] = useState(false);
  const [hearts, setHearts] = useState<
    { id: number; x: number; size: number; delay: number }[]
  >([]);

  const page = pages[currentPage];

  useEffect(() => {
    const generated = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 10 + Math.random() * 16,
      delay: Math.random() * 8,
    }));
    setHearts(generated);
  }, []);

  const handleStart = () => {
    setCoverFading(true);
    setTimeout(() => setShowCover(false), 600);
  };

  const goTo = (index: number, dir: "next" | "prev") => {
    if (animating || index < 0 || index >= pages.length) return;
    setDirection(dir);
    setAnimating(true);
    setShowTimeline(false);
    setTimeout(() => {
      setCurrentPage(index);
      setAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 380);
  };

  if (showCover) {
    return (
      <div
        className={`transition-opacity duration-600 ${coverFading ? "opacity-0" : "opacity-100"}`}
      >
        <StoryCover onStart={handleStart} />
      </div>
    );
  }

  const progressPct = ((currentPage + 1) / pages.length) * 100;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${page.palette.bg} transition-all duration-700 text-white relative overflow-hidden`}
    >
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="absolute opacity-10 animate-bounce"
            style={{
              left: `${h.x}%`,
              bottom: "-10px",
              fontSize: `${h.size}px`,
              animationDuration: `${4 + h.delay}s`,
              animationDelay: `${h.delay}s`,
              color: page.palette.accent,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        {/* Progress bar */}
        <div className="h-0.5 w-full bg-white/10">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              backgroundColor: page.palette.accent,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
          {/* Back to cover */}
          <button
            onClick={() => setShowCover(true)}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs"
          >
            <span>💌</span>
            <span className="hidden sm:inline">Nuestra Historia</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {pages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i, i > currentPage ? "next" : "prev")}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentPage ? "20px" : "7px",
                  height: "7px",
                  backgroundColor:
                    i === currentPage
                      ? page.palette.accent
                      : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Ir al ${p.tag}`}
              />
            ))}
          </div>

          <span className="text-xs opacity-40 shrink-0">
            {currentPage + 1} / {pages.length}
          </span>
        </div>
      </header>

      {/* Main */}
      <main
        className={`relative z-10 max-w-4xl mx-auto px-5 py-10 transition-all duration-380 ${
          animating
            ? direction === "next"
              ? "opacity-0 translate-y-6"
              : "opacity-0 -translate-y-6"
            : "opacity-100 translate-y-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
      >
        {/* Chapter tag */}
        <div className="mb-5 flex items-center gap-3">
          <span
            className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{
              color: page.palette.accent,
              borderColor: page.palette.accent + "55",
              backgroundColor: page.palette.accent + "18",
            }}
          >
            {page.tag}
          </span>
          <div
            className="h-px flex-1 opacity-20"
            style={{ backgroundColor: page.palette.accent }}
          />
        </div>

        {/* Hero */}
        <div
          className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl"
          style={{ minHeight: "300px" }}
        >
          <ImageWithFallback
            src={page.image}
            alt={page.title}
            className="w-full object-cover"
            style={{ height: "320px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7">
            <h1 className="mb-1 text-white">{page.title}</h1>
            <p className="opacity-70 text-base">{page.subtitle}</p>
          </div>
        </div>

        {/* Quote */}
        <blockquote
          className="text-center italic text-base mb-8 px-6 py-4 rounded-2xl border"
          style={{
            color: page.palette.accent,
            borderColor: page.palette.accent + "33",
            backgroundColor: page.palette.accent + "0f",
          }}
        >
          {page.quote}
        </blockquote>

        {/* Content cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {page.content.map((section, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${page.palette.card} ${page.palette.border} backdrop-blur-sm hover:bg-white/10 transition-colors duration-300`}
            >
              <div
                className="w-6 h-0.5 rounded-full mb-4"
                style={{ backgroundColor: page.palette.accent }}
              />
              <h3
                className="mb-3 text-sm"
                style={{ color: page.palette.accent }}
              >
                {section.heading}
              </h3>
              <p className="text-white/75 leading-relaxed text-sm">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Last page extras */}
        {page.isLast && (
          <div
            className="rounded-3xl p-8 mb-8 text-center border"
            style={{
              background: `linear-gradient(135deg, ${page.palette.accent}20, transparent)`,
              borderColor: page.palette.accent + "44",
            }}
          >
            <div className="text-5xl mb-4">💕</div>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg mx-auto mb-3">
              Esta historia esta en proceso. Cada pagina escrita es una promesa
              de que habra mas.
            </p>
            <p
              className="tracking-widest text-xs uppercase"
              style={{ color: page.palette.accent }}
            >
              ESTA EN PROCESO...
            </p>
          </div>
        )}

        {/* Timeline toggle */}
        {page.isLast && (
          <div className="mb-8 text-center">
            <button
              onClick={() => setShowTimeline((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm transition-all duration-200"
              style={{
                borderColor: page.palette.accent + "55",
                color: page.palette.accent,
                backgroundColor: page.palette.accent + "10",
              }}
            >
              <span>{showTimeline ? "Ocultar" : "Ver"} linea de tiempo</span>
              <span>{showTimeline ? "▲" : "▼"}</span>
            </button>
          </div>
        )}

        {showTimeline && <StoryTimeline accent={page.palette.accent} />}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 mt-10">
          <button
            onClick={() => goTo(currentPage - 1, "prev")}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur-sm text-sm"
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
            <span className="hidden sm:inline">Capitulo anterior</span>
            <span className="sm:hidden">Anterior</span>
          </button>

          {/* Heart row */}
          <div className="flex items-center gap-1 opacity-40">
            {pages.map((_, i) => (
              <span
                key={i}
                style={{
                  color:
                    i === currentPage
                      ? page.palette.accent
                      : "rgba(255,255,255,0.3)",
                  fontSize: i === currentPage ? "14px" : "8px",
                  transition: "all 0.3s ease",
                }}
              >
                ♥
              </span>
            ))}
          </div>

          {currentPage < pages.length - 1 ? (
            <button
              onClick={() => goTo(currentPage + 1, "next")}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: page.palette.accent,
                borderColor: page.palette.accent,
                color: "#1a0522",
                fontWeight: 600,
              }}
            >
              <span className="hidden sm:inline">Siguiente capitulo</span>
              <span className="sm:hidden">Siguiente</span>
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
          ) : (
            <button
              onClick={() => setShowCover(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: page.palette.accent,
                borderColor: page.palette.accent,
                color: "#1a0522",
                fontWeight: 600,
              }}
            >
              Volver al inicio
              <span>💌</span>
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-white/25 text-xs border-t border-white/10 mt-4">
        Nuestra Historia · Escrita con amor · 11:11 💕
      </footer>
    </div>
  );
}
