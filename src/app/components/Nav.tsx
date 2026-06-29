import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router"; // Use react-router-dom se houver erro

type NavProps = {
  dark: boolean;
  onToggle: () => void;
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
};

export default function Nav({ dark, onToggle, lang, setLang }: NavProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const t = (pt: string, en: string) => (lang === "pt" ? pt : en);

  const menuItems = [
    { id: "projetos", label: t("projetos", "projects") },
    { id: "sobre", label: t("sobre", "about") },
    { id: "contato", label: t("contato", "contact") }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-mono-c text-sm text-muted-foreground tracking-tight hover:text-foreground transition-colors duration-150">
          <span style={{ color: "var(--accent)" }}>~/</span>dev
        </Link>

        <div className="flex items-center gap-5">
          {isHome ? (
            <div className="hidden sm:flex items-center gap-7">
              {menuItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-link font-mono-c text-xs text-muted-foreground hover:text-foreground capitalize tracking-wide">
                  {item.label}
                </a>
              ))}
            </div>
          ) : (
            <Link to="/" className="nav-link font-mono-c text-xs text-muted-foreground hover:text-foreground tracking-wide">
              ← {t("voltar", "back")}
            </Link>
          )}

          {/* Seletor de Idioma */}
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as "pt" | "en")}
            className="font-mono-c text-xs bg-transparent border border-border text-muted-foreground rounded-md px-1 py-0.5 outline-none hover:border-accent cursor-pointer transition-colors"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>

          {/* Botão de Tema */}
          <button
            onClick={onToggle}
            className="theme-btn w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground ml-2"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>
    </nav>
  );
}