import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Github, ExternalLink, CheckCircle2, Clock, Archive } from "lucide-react";
import type { Project } from "../../data/projects";

const statusIcon = {
  "Concluído": <CheckCircle2 size={12} />,
  "Em desenvolvimento": <Clock size={12} />,
  "Arquivado": <Archive size={12} />,
};

const statusColor = {
  "Concluído": "oklch(0.65 0.18 145)",
  "Em desenvolvimento": "oklch(0.72 0.18 55)",
  "Arquivado": "oklch(0.55 0.01 285)",
};

type Props = {
  project: Project | null;
  dark: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, dark, onClose }: Props) {
  if (!project) return null;

  const accentColor = `oklch(${dark ? "0.68" : "0.55"} 0.22 ${project.hue})`;

  return (
    <DialogPrimitive.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          style={{
            animation: "fadeIn 0.15s ease",
          }}
        />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full outline-none"
          style={{
            maxWidth: "640px",
            maxHeight: "90vh",
            animation: "modalIn 0.18s ease",
          }}
          aria-describedby="modal-desc"
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes modalIn {
              from { opacity: 0; transform: translate(-50%, calc(-50% + 12px)); }
              to   { opacity: 1; transform: translate(-50%, -50%); }
            }
          `}</style>

          <div
            className="rounded-2xl border border-border overflow-y-auto"
            style={{
              background: "var(--card)",
              maxHeight: "90vh",
            }}
          >
            {/* Header bar with accent */}
            <div className="h-1 w-full rounded-t-2xl" style={{ background: accentColor }} />

            <div className="p-7">
              {/* Close */}
              <DialogPrimitive.Close
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <X size={14} />
              </DialogPrimitive.Close>

              {/* Meta row */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono-c text-xs text-muted-foreground">{project.year}</span>
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
                  className="inline-flex items-center gap-1 font-mono-c text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: `${statusColor[project.status]}18`,
                    color: statusColor[project.status],
                    border: `1px solid ${statusColor[project.status]}40`,
                  }}
                >
                  {statusIcon[project.status]}
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <DialogPrimitive.Title className="font-display font-extrabold text-3xl mb-4 text-foreground">
                {project.title}
              </DialogPrimitive.Title>

              {/* Full description */}
              <p
                id="modal-desc"
                className="text-muted-foreground leading-relaxed mb-6 text-sm"
              >
                {project.fullDesc}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <p className="font-mono-c text-[11px] text-muted-foreground uppercase tracking-widest mb-3">
                  destaques
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="mb-7">
                <p className="font-mono-c text-[11px] text-muted-foreground uppercase tracking-widest mb-3">
                  stack
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

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Github size={14} />
                    Código
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: accentColor, color: "var(--accent-foreground)" }}
                  >
                    <ExternalLink size={14} />
                    Ver projeto
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
