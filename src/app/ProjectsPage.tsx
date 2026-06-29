import { useState } from "react";
import { allProjects, type Project } from "../data/projects";
import Nav from "./components/Nav";
import ProjectModal from "./components/ProjectModal";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";

type Props = {
  dark: boolean;
  onToggle: () => void;
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
};

// Categorias padronizadas
const categories = {
  pt: ["Todos", "Jogos", "Apps"],
  en: ["All", "Jogos", "Apps"]
};

// Cores para as tags
const catStyles: Record<string, { bg: string; text: string; border: string }> = {
  "Jogos": { bg: "rgba(59, 130, 246, 0.12)", text: "#3b82f6", border: "rgba(59, 130, 246, 0.3)" }, // Azul
  "Apps": { bg: "rgba(16, 185, 129, 0.12)", text: "#10b981", border: "rgba(16, 185, 129, 0.3)" }   // Verde
};

export default function ProjectsPage({ dark, onToggle, lang, setLang }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("Todos"); // ou "All"

  const t = (pt: string, en: string) => (lang === "pt" ? pt : en);

  const visible = filter === "Todos" || filter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === filter);

  return (
    <>
      <Nav dark={dark} onToggle={onToggle} lang={lang} setLang={setLang} />
      <ProjectModal project={selected} dark={dark} lang={lang} onClose={() => setSelected(null)} />

      <div className="min-h-screen bg-background text-foreground pt-14">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="font-mono-c text-xs mb-3" style={{ color: "var(--accent)" }}>
              {t("todos os projetos", "all projects")}
            </p>
            <h1 className="font-display font-extrabold text-5xl mb-4">{t("Projetos", "Projects")}</h1>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories[lang].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono-c text-xs px-4 py-2 rounded-full border transition-colors duration-150"
                style={
                  filter === cat
                    ? { background: "var(--accent)", color: "var(--accent-foreground)", borderColor: "var(--accent)" }
                    : { background: "transparent", color: "var(--muted-foreground)", borderColor: "var(--border)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((project) => {
              const tagStyle = catStyles[project.category] || { bg: "var(--secondary)", text: "var(--foreground)", border: "var(--border)" };

              return (
                <div
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className="project-card flex flex-col bg-card border border-border rounded-2xl p-5 group cursor-pointer overflow-hidden"
                >
                  {/* Nova Imagem de Capa */}
                  <div className="w-full h-40 mb-4 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <ImageIcon className="text-muted-foreground opacity-30" size={32} />
                    )}
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="font-mono-c text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: tagStyle.bg, color: tagStyle.text, border: `1px solid ${tagStyle.border}` }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <span className="font-mono-c text-[11px] text-muted-foreground">{project.year}</span>
                  </div>

                  <h2 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.shortDesc[lang]}
                  </p>

                  {/* Links e Detalhes */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                     <span className="font-mono-c text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {t("ver detalhes →", "view details →")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}