import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link } from "react-router";
import { ArrowUpRight, Mail, Instagram, Youtube, MessageSquare, Image as ImageIcon } from "lucide-react";
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
  "C++", "C#", "Blueprints", "TypeScript",
  "Unreal Engine 5", "Unity", "Python",
  "React", "Node.js", "Docker", "Git", "Game Design"
];

const about = [
  { label: { pt: "Desenvolvimento de Jogos", en: "Game Development" }, desc: "Unreal Engine 5 · Unity · C++ · Blueprints · Game Design" },
  { label: { pt: "Sistemas & Ferramentas", en: "Systems & Tools" }, desc: "C# · Python · Arquitetura Multiplayer" },
  { label: { pt: "Hardware & Robótica", en: "Hardware & Robotics" }, desc: "Arduino · Controles Customizados · Prototipagem" },
  { label: { pt: "Narrativa & Escrita", en: "Narrative & Writing" }, desc: "Roteiros · Lore · Terror Psicológico · GDD" },
];

/* ─── Home page ─────────────────────────────────────────────── */
type HomeProps = {
  dark: boolean;
  onToggle: () => void;
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
};

function HomePage({ dark, onToggle, lang, setLang }: HomeProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const t = (pt: string, en: string) => (lang === "pt" ? pt : en);

  return (
    <>
      <Nav dark={dark} onToggle={onToggle} lang={lang} setLang={setLang} />
      <ProjectModal project={selected} dark={dark} lang={lang} onClose={() => setSelected(null)} />

      <main>
        {/* Hero */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-14 px-6 dot-grid overflow-hidden">
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
              {t("disponível para novos projetos", "available for new projects")}
            </div>

            <h1 className="font-display font-extrabold leading-[0.88] tracking-tight mb-8">
              <span className="block text-foreground hero-name" style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}>
                {t("Nicolas G W ", "Rocha")}
              </span>
              <span className="block hero-name" style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)", color: "var(--accent)" }}>
                {t("Rocha", "Nicolas G W ")}
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-12">
              {t(
                "Construo jogos e aplicações do zero — da arquitetura de sistemas ao design de narrativa. Apaixonado por experiências interativas, terror psicológico e código limpo.",
                "I build games and applications from scratch — from system architecture to narrative design. Passionate about interactive experiences, psychological horror, and clean code."
              )}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="#projetos"
                onClick={(e) => { e.preventDefault(); document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                {t("Ver projetos", "View projects")} <ArrowUpRight size={14} />
              </a>
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border text-muted-foreground"
              >
                {t("Entrar em contato", "Get in touch")}
              </a>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono-c text-xs mb-6 text-accent-var">{t("Habilidades", "Skills")}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill font-mono-c text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground cursor-default">
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
                <p className="font-mono-c text-xs mb-3 text-accent-var">{t("Projetos em Destaque", "Featured Projects")}</p>
                <h2 className="font-display font-bold text-4xl">{t("Criados por Mim", "What I've built")}</h2>
              </div>
              <Link
                to="/projects"
                className="cta-secondary inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm border border-border text-muted-foreground font-mono-c"
              >
                {t("ver todos os projetos →", "view all projects →")}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => {
                const accentColor = `oklch(${dark ? "0.68" : "0.55"} 0.22 ${project.hue})`;
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelected(project)}
                    className="project-card flex flex-col bg-card border border-border rounded-2xl p-5 group cursor-pointer overflow-hidden"
                  >
                    {/* Imagem de Capa */}
                    <div className="w-full aspect-video mb-4 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border shrink-0">
                      {project.imageUrl ? (
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <ImageIcon className="text-muted-foreground opacity-30" size={32} />
                      )}
                    </div>

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
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                      {project.shortDesc[lang]}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
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
                      <span className="font-mono-c text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        {t("ver detalhes →", "view details →")}
                      </span>
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
              <p className="font-mono-c text-xs mb-3 text-accent-var">{t("Sobre Mim", "About Me")}</p>
              <h2 className="font-display font-bold text-4xl leading-tight mb-6">
                {lang === "pt" ? (
                  <>Código é minha<br />linguagem nativa.</>
                ) : (
                  <>Code is my<br />native language.</>
                )}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {t(
                  "Sou um desenvolvedor apaixonado por criar experiências digitais densas e imersivas. Trabalho no espectro completo: da lógica complexa em C++ e Unreal Engine à estruturação de mundos e narrativas.",
                  "I am a developer passionate about creating dense and immersive digital experiences. I work across the full spectrum: from complex logic in C++ and Unreal Engine to world-building and narrative structuring."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Quando não estou a programar, estou a escrever histórias, a fotografar ou a criar hardware experimental com Arduino.",
                  "When I'm not coding, I'm writing stories, taking photographs, or building experimental hardware with Arduino."
                )}
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {about.map((item, index) => (
                <div key={index} className="about-row flex items-center gap-4 p-4 rounded-xl border border-border cursor-default">
                  <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  <div>
                    <p className="font-display font-semibold text-sm">{item.label[lang]}</p>
                    <p className="font-mono-c text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <p className="font-mono-c text-xs mb-5 text-accent-var">{t("Contato", "Contact")}</p>
            <h2 className="font-display font-bold leading-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>
              {lang === "pt" ? (
                <>Vamos construir<br />algo juntos?</>
              ) : (
                <>Let's build<br />something together?</>
              )}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
              {t(
                "Aberto a projetos freelance, colaborações criativas e novas oportunidades no desenvolvimento de jogos e software.",
                "Open to freelance projects, creative collaborations, and new opportunities in game and software development."
              )}
            </p>
            
            <a href="mailto:dev@example.com" className="cta-secondary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium border border-border text-muted-foreground mb-8">
              <Mail size={15} />
              dev@example.com
            </a>

            {/* Redes Sociais Alternativas */}
            <div className="flex items-center gap-8 border-t border-border pt-8">
              <a href="https://discordapp.com/users/722147308422299739" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <MessageSquare size={18} />
                Discord
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={18} />
                Instagram
              </a>
              <a href="https://www.youtube.com/@NRYazawa" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Youtube size={18} />
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <span className="font-mono-c text-xs text-muted-foreground">© 2026 · {t("Nicolas G W Rocha", "Nicolas G W Rocha")}</span>
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
    const storedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(storedTheme ? storedTheme === "dark" : systemPrefersDark);

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

  if (!mounted) return null;

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