import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { ArrowUpRight, Mail, Github } from "lucide-react";
import { Link } from "react-router";
import Nav from "./components/Nav";
import ProjectModal from "./components/ProjectModal";
import ProjectsPage from "./ProjectsPage";
import { featuredProjects, type Project } from "../data/projects";

/* ─── Shared styles ─────────────────────────────────────────── */
const sharedStyles = `
  .font-display { font-family: 'Bricolage Grotesque', sans-serif; }
  body { font-family: 'DM Sans', sans-serif; }
  .font-mono-c { font-family: 'Geist Mono', monospace; }

  .dot-grid {
    background-image: radial-gradient(circle, rgba(120,120,160,0.13) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .dark .dot-grid {
    background-image: radial-gradient(circle, rgba(180,180,255,0.07) 1px, transparent 1px);
  }

  html { scroll-behavior: smooth; }

  *, *::before, *::after {
    transition: background-color 0.25s ease, border-color 0.25s ease, color 0.2s ease, box-shadow 0.25s ease;
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }

  .nav-link { position: relative; }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: var(--accent);
    transition: width 0.2s ease;
  }
  .nav-link:hover::after { width: 100%; }

  .project-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.25s ease !important;
  }
  .project-card:hover { transform: translateY(-4px); }
  .dark .project-card:hover { box-shadow: 0 8px 32px oklch(0.68 0.22 289 / 0.12); }

  .theme-btn {
    transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease !important;
  }
  .theme-btn:hover { border-color: var(--accent) !important; color: var(--accent) !important; }

  .cta-primary { transition: opacity 0.15s ease, transform 0.15s ease !important; }
  .cta-primary:hover { opacity: 0.88; transform: translateY(-1px); }

  .cta-secondary { transition: border-color 0.2s ease, color 0.2s ease !important; }
  .cta-secondary:hover { border-color: var(--foreground); color: var(--foreground); }

  .skill-pill { transition: border-color 0.15s ease, color 0.15s ease !important; }
  .skill-pill:hover { border-color: var(--accent); color: var(--accent); }

  .about-row { transition: border-color 0.2s ease, background-color 0.25s ease !important; }
  .about-row:hover { border-color: oklch(0.55 0.22 289 / 0.5); background-color: var(--secondary); }
  .dark .about-row:hover { border-color: oklch(0.68 0.22 289 / 0.4); }

  .text-accent-var { color: var(--accent); }

  @media (max-width: 640px) {
    .hero-name { font-size: clamp(2.8rem, 12vw, 5rem) !important; }
  }
`;

const skills = [
  "C#", "TypeScript", "Dart", "Python", "GDScript",
  "Unity", "Godot", "Flutter", "React Native",
  "React", "Node.js", "PostgreSQL", "Firebase", "Docker", "Git",
];

const about = [
  { label: "Desenvolvimento de Jogos", desc: "Unity · Godot · C# · Game Design" },
  { label: "Apps Mobile", desc: "Flutter · React Native · iOS · Android" },
  { label: "Web & Backend", desc: "React · Node.js · TypeScript · REST APIs" },
  { label: "Arquitetura & Infra", desc: "PostgreSQL · Firebase · Docker · CI/CD" },
];

/* ─── Home page ─────────────────────────────────────────────── */
function HomePage({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <Nav dark={dark} onToggle={onToggle} />
      <ProjectModal project={selected} dark={dark} onClose={() => setSelected(null)} />

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center pt-14 px-6 dot-grid overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background pointer-events-none" />
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "var(--accent)", opacity: dark ? 0.06 : 0.04, filter: "blur(80px)" }}
          />

          <div className="relative max-w-5xl mx-auto w-full py-28">
            <div
              className="inline-flex items-center gap-2 font-mono-c text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 mb-12"
              style={{ background: "var(--card)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              disponível para novos projetos
            </div>

            <h1 className="font-display font-extrabold leading-[0.88] tracking-tight mb-8">
              <span
                className="block text-foreground hero-name"
                style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
              >
                Desenvolvedor
              </span>
              <span
                className="block hero-name"
                style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)", color: "var(--accent)" }}
              >
                de Software.
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-12">
              Construo <strong className="text-foreground font-semibold">jogos</strong> e{" "}
              <strong className="text-foreground font-semibold">aplicativos</strong> do zero —
              da arquitetura ao detalhe final. Apaixonado por experiências interativas e código limpo.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="#projetos"
                className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                Ver projetos <ArrowUpRight size={14} />
              </a>
              <a
                href="#contato"
                className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border text-muted-foreground"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
            <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
            <span className="font-mono-c text-[10px] tracking-widest uppercase opacity-60">scroll</span>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono-c text-xs mb-6 text-accent-var">tecnologias</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill font-mono-c text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projetos" className="py-20 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="font-mono-c text-xs mb-3 text-accent-var">projetos selecionados</p>
                <h2 className="font-display font-bold text-4xl">O que construí</h2>
              </div>
              <Link
                to="/projects"
                className="cta-secondary inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm border border-border text-muted-foreground font-mono-c"
              >
                ver todos os projetos →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProjects.map((project) => {
                const accentColor = `oklch(${dark ? "0.68" : "0.55"} 0.22 ${project.hue})`;
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelected(project)}
                    className="project-card bg-card border border-border rounded-2xl p-6 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="font-mono-c text-[11px] text-muted-foreground">{project.year}</span>
                        <div className="flex items-center gap-2.5 mt-1">
                          <h3 className="font-display font-bold text-xl">{project.title}</h3>
                          <span
                            className="font-mono-c text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              background: `${accentColor.replace(")", " / 0.12)")}`,
                              color: accentColor,
                              border: `1px solid ${accentColor.replace(")", " / 0.3)")}`,
                            }}
                          >
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono-c text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-150 mt-1">
                        ver detalhes →
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-c text-[11px] px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-20 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="font-mono-c text-xs mb-3 text-accent-var">sobre mim</p>
              <h2 className="font-display font-bold text-4xl leading-tight mb-6">
                Código é minha<br />linguagem nativa.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Sou desenvolvedor apaixonado por criar experiências digitais que funcionam — e que
                encantam. Trabalho no espectro completo: da lógica de backend ao polimento de UI,
                passando pela física de jogos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando não estou programando, estou jogando, estudando engine internals ou
                contribuindo com projetos open source.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {about.map((item) => (
                <div
                  key={item.label}
                  className="about-row flex items-center gap-4 p-4 rounded-xl border border-border cursor-default"
                >
                  <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  <div>
                    <p className="font-display font-semibold text-sm">{item.label}</p>
                    <p className="font-mono-c text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-mono-c text-xs mb-5 text-accent-var">contato</p>
            <h2
              className="font-display font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Vamos construir<br />algo juntos?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
              Aberto a projetos freelance, colaborações e novas oportunidades.
            </p>
            <a
              href="mailto:dev@example.com"
              className="cta-secondary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium border border-border text-muted-foreground"
            >
              <Mail size={15} />
              dev@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-mono-c text-xs text-muted-foreground">© 2025 · feito com código</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
              <Github size={16} />
            </a>
            <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Root ───────────────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detecção Inteligente de Tema
    const storedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(storedTheme ? storedTheme === "dark" : systemPrefersDark);

    // Detecção Inteligente de Idioma
    const storedLang = localStorage.getItem("portfolio-lang") as "pt" | "en";
    const systemLang = navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
    setLang(storedLang || systemLang);
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
      localStorage.setItem("portfolio-lang", lang);
    }
  }, [dark, lang, mounted]);

  const toggle = () => setDark((d) => !d);

  if (!mounted) return null; // Evita piscar o tema errado no load

  return (
    <>
      <style>{sharedStyles}</style>
      <div className="min-h-screen bg-background text-foreground">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage dark={dark} onToggle={toggle} lang={lang} setLang={setLang} />} />
            <Route path="/projects" element={<ProjectsPage dark={dark} onToggle={toggle} lang={lang} setLang={setLang} />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}
  );
}
