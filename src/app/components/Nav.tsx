import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router";

type NavProps = {
  dark: boolean;
  onToggle: () => void;
};

export default function Nav({ dark, onToggle }: NavProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono-c text-sm text-muted-foreground tracking-tight hover:text-foreground transition-colors duration-150"
        >
          <span style={{ color: "var(--accent)" }}>~/</span>dev
        </Link>

        <div className="flex items-center gap-7">
          {isHome ? (
            <>
              {["projetos", "sobre", "contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-link font-mono-c text-xs text-muted-foreground hover:text-foreground capitalize tracking-wide"
                >
                  {item}
                </a>
              ))}
            </>
          ) : (
            <Link
              to="/"
              className="nav-link font-mono-c text-xs text-muted-foreground hover:text-foreground tracking-wide"
            >
              ← voltar
            </Link>
          )}

          <button
            onClick={onToggle}
            className="theme-btn w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
