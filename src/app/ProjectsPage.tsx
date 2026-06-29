import { useState } from "react";
import { allProjects, type Project } from "../data/projects";
import Nav from "./components/Nav";
import ProjectModal from "./components/ProjectModal";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  dark: boolean;
  onToggle: () => void;
};

const categories = ["Todos", "Jogo", "App", "Plataforma", "Ferramenta"];

const statusColor: Record<string, string> = {
  "Concluído": "oklch(0.65 0.18 145)",
  "Em desenvolvimento": "oklch(0.72 0.18 55)",
  "Arquivado": "oklch(0.55 0.01 285)",
};

export default function ProjectsPage({ dark, onToggle }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("Todos");

  const visible = filter === "Todos"
    ? allProjects
    : allProjects.filter((p) => p.category === filter);

  return (
    <>
      <Nav dark={dark} onToggle={onToggle} />
      <ProjectModal project={selected} dark={dark} onClose={() => setSelected(null)} />

      <div className="min-h-screen bg-background text-foreground pt-14">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <p className="font-mono-c text-xs mb-3" style={{ color: "var(--accent)" }}>
              todos os projetos
            </p>
            <h1 className="font-display font-extrabold text-5xl mb-4">Projetos</h1>
            <p className="text-muted-foreground max-w-md">
              Uma coleção completa de jogos, apps e ferramentas que construí ao longo da carreira.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono-c text-xs px-3 py-1.5 rounded-full border transition-colors duration-150"
                style={
                  filter === cat
                    ? {
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                        borderColor: "var(--accent)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        borderColor: "var(--border)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((project) => {
              const accentColor = `oklch(${dark ? "0.68" : "0.55"} 0.22 ${project.hue})`;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className="project-card bg-card border border-border rounded-2xl p-5 group cursor-pointer"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
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
                      <span
                        className="font-mono-c text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: `${statusColor[project.status]}18`,
                          color: statusColor[project.status],
                          border: `1px solid ${statusColor[project.status]}40`,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="font-mono-c text-[11px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h2>

                  {/* Short desc */}
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-c text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="font-mono-c text-[10px] px-2 py-0.5 rounded-md text-muted-foreground">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom links — stop propagation so click doesn't open modal */}
                  <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <span className="font-mono-c text-[10px] text-muted-foreground ml-auto">
                      ver detalhes →
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
