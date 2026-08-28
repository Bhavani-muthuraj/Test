import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { SparkBackground } from "./SparkBackground";

// PageShell wraps every page: it renders the animated background, the
// sticky top navigation bar (logo + page tabs, no login/sign-in), the
// page's own content (`children`), and the footer.
//
// To add/remove/rename a menu tab, edit the `tabs` array below.
const tabs = [
  { to: "/", label: "Intro" },
  { to: "/videos", label: "Learning Videos" },
  { to: "/old-videos", label: "Old Videos" },
  { to: "/community", label: "Community" },
  { to: "/chatbot", label: "Chatbot" },
];

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <SparkBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-primary/10 bg-white/70 backdrop-blur-xl shadow-sm">
          <div className="flex flex-nowrap items-center gap-4 px-5 py-3">
            {/* Logo — edit the "K" text/letter or swap in an <img> here */}
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-7 w-12 place-items-center rounded-md bg-primary text-sm font-bold tracking-tight text-primary-foreground">
                KONE
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                KTOC Learning Hub
              </span>
            </Link>

            {/* Menu bar — pushed to the right with ml-auto, stays on one row */}
            <nav className="ml-auto flex flex-wrap gap-1">
              {tabs.map((t) => (
                <NavLink
                  key={t.to}
                  to={t.to}
                  end={t.to === "/"}
                  className={({ isActive }) =>
                    [
                      "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-black/5 hover:text-slate-900",
                    ].join(" ")
                  }
                >
                  {t.label}
                </NavLink>
              ))}
            </nav>
          </div>
          {/* Thin brand-gradient accent line under the header */}
          <div className="h-[2px] w-full bg-[linear-gradient(90deg,#1d5fd1,#38bdf8)]" />
        </header>

        <main className="flex-1">{children}</main>
       <div className="h-[2px] w-full bg-[linear-gradient(90deg,#1d5fd1,#38bdf8)]" />
        <footer className="border-t border-border bg-white/60 py-6 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 text-center text-xs text-muted-foreground">
            KTOC Learning Hub — internal onboarding resource for new elevator engineers.
          </div>
        </footer>
      </div>
    </div>
  );
}
