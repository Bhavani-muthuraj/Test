import type { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SparkBackground } from "./SparkBackground";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const tabs = [
  { to: "/", label: "Intro", icon: "🏠" },
  { to: "/product-training", label: "Product", icon: "📚" },
  { to: "/training-videos", label: "Training Videos", icon: "📹" },
  { to: "/knowledge", label: "Knowledge", icon: "📖" },
  { to: "/architecture", label: "Architecture", icon: "🏗️" },
  { to: "/confluence", label: "Confluence", icon: "📄" },
  { to: "/community", label: "Community", icon: "👥" },
  { to: "/chatbot", label: "Chatbot", icon: "🤖" },
];

export function PageShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine menu color based on current page
  const getMenuColor = () => {
    if (location.pathname === "/") return "from-blue-500 to-blue-600";
    if (location.pathname === "/product-training") return "from-pink-500 to-pink-600";
    if (location.pathname.includes("/training-videos")) return "from-amber-500 to-amber-600";
    if (location.pathname === "/knowledge") return "from-purple-500 to-purple-600";
    if (location.pathname === "/architecture") return "from-teal-500 to-teal-600";
    if (location.pathname === "/confluence") return "from-orange-500 to-orange-600";
    if (location.pathname === "/community") return "from-green-500 to-green-600";
    if (location.pathname === "/chatbot") return "from-indigo-500 to-indigo-600";
    return "from-blue-500 to-blue-600";
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <SparkBackground />
      <div className="relative z-30 flex min-h-screen flex-col">
        {/* Stylish Gradient Menu Bar */}
        <header className={`sticky top-0 z-40 bg-gradient-to-r ${getMenuColor()} shadow-lg transition-all duration-500`}>
          <div className="flex flex-nowrap items-center gap-8 px-6 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                K
              </div>
              <span className="font-display text-lg font-bold text-white hidden sm:inline drop-shadow-lg">
                KTOC
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="ml-auto hidden lg:flex gap-1">
              {tabs.map((t) => (
                <NavLink
                  key={t.to}
                  to={t.to}
                  end={t.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-white/30 text-white shadow-lg backdrop-blur-md border border-white/40"
                        : "text-white/80 hover:text-white hover:bg-white/10 border border-white/0"
                    }`
                  }
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-md">
              <nav className="flex flex-col gap-1 p-4">
                {tabs.map((t) => (
                  <NavLink
                    key={t.to}
                    to={t.to}
                    end={t.to === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "bg-white/30 text-white backdrop-blur-md"
                          : "text-white/80 hover:bg-white/10"
                      }`
                    }
                  >
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Dynamic Background */}
        <div
          className={`flex-1 w-full min-h-full relative transition-all duration-500 ${getBackgroundClass(
            location.pathname
          )}`}
        >
          <main className="relative z-10 w-full pointer-events-auto">{children}</main>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white/60 backdrop-blur py-6">
          <div className="mx-auto max-w-7xl px-6 text-center text-xs text-slate-600">
            KTOC Learning Hub — internal onboarding resource for new elevator engineers.
          </div>
        </footer>
      </div>
    </div>
  );
}

function getBackgroundClass(pathname: string): string {
  if (pathname === "/") return "bg-intro";
  if (pathname === "/product-training") return "bg-product";
  if (pathname.includes("/training-videos")) return "bg-videos";
  if (pathname === "/knowledge") return "bg-knowledge";
  if (pathname === "/architecture") return "bg-architecture";
  if (pathname === "/confluence") return "bg-confluence";
  if (pathname === "/community") return "bg-community";
  if (pathname === "/chatbot") return "bg-chatbot";
  if (pathname === "/old-videos") return "bg-oldvideos";
  return "bg-intro";
}
