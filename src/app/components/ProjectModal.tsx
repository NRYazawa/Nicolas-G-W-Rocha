import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Github, ExternalLink, CheckCircle2, Clock, Archive } from "lucide-react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project | null;
  dark: boolean;
  lang: "pt" | "en";
  onClose: () => void;
};

export default function ProjectModal({ project, dark, lang, onClose }: Props) {
  if (!project) return null;

  const t = (pt: string, en: string) => (lang === "pt" ? pt : en);
  const accentColor = `oklch(${dark ? "0.68" : "0.55"} 0.22 ${project.hue})`;

  return (
    <DialogPrimitive.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" style={{ animation: "fadeIn 0.15s ease" }} />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full outline-none"
          style={{ maxWidth: "640px", maxHeight: "90vh", animation: "modalIn 0.18s ease" }}
        >
          <div className="rounded-2xl border border-border overflow-y-auto" style={{ background: "var(--card)", maxHeight: "90vh" }}>
            <div className="h-1 w-full rounded-t-2xl" style={{ background: accentColor }} />
            <div className="p-7">
              <DialogPrimitive.Close onClick={onClose} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
                <X size={14} />
              </DialogPrimitive.Close>

              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono-c text-xs text-muted-foreground">{project.year}</span>
                <span className="font-mono-c text-[10px] px-2 py-0.5 rounded-full" style={{ background: `${accentColor.replace(")", " / 0.12)")}`, color: accentColor, border: `1px solid ${accentColor.replace(")", " / 0.3)")}` }}>
                  {project.category}
                </span>
              </div>

              <DialogPrimitive.Title className="font-display font-extrabold text-3xl mb-4 text-foreground">
                {project.title}
              </DialogPrimitive.Title>

              {/* YouTube Player */}
              {project.youtubeId && (
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 border border-border">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1`} title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              )}

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {project.fullDesc[lang]}
              </p>

              <div className="mb-6">
                <p className="font-mono-c text-[11px] text-muted-foreground uppercase tracking-widest mb-3">
                  {t("destaques", "highlights")}
                </p>
                <ul className="space-y-2">
                  {project.highlights[lang].map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: accentColor }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-7">
                <p className="font-mono-c text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono-c text-[11px] px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> {t("Código", "Code")}
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: accentColor, color: "var(--accent-foreground)" }}>
                    <ExternalLink size={14} /> {t("Ver projeto", "Live Demo")}
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