import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Users, Archive, Zap, BookOpen, Grid3x3, FileText, Bookmark } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { IntroBackgroundVideo } from "../components/IntroBackgroundVideo";

const INTRO_TEXT =
  "Welcome to the KTOC Learning Hub — your one-stop learning platform designed to support the onboarding and continuous development of new elevator engineers. The Learning Hub brings together essential KTOC training videos, tutorials, learning materials, and community resources in one easy-to-access platform. Whether you are new to KTOC or looking to strengthen your existing knowledge, the platform provides a structured and convenient way to learn at your own pace.";

const highlights = [
  {
    to: "/product-training",
    icon: GraduationCap,
    title: "Product Training",
    text: "Master KONE elevator systems and specifications.",
  },
  {
    to: "/training-videos",
    icon: Zap,
    title: "Training Videos",
    text: "Comprehensive onboarding and latest training videos.",
  },
  {
    to: "/knowledge",
    icon: BookOpen,
    title: "Knowledge Base",
    text: "Comprehensive articles and documentation.",
  },
  {
    to: "/architecture",
    icon: Grid3x3,
    title: "Architecture",
    text: "System architecture and technical diagrams.",
  },
  {
    to: "/confluence",
    icon: FileText,
    title: "Confluence",
    text: "Team wiki and knowledge documentation.",
  },
  {
    to: "/community",
    icon: Users,
    title: "Community",
    text: "Ask questions and learn from senior technicians.",
  },
  {
    to: "/chatbot",
    icon: Bot,
    title: "Chatbot",
    text: "Instant answers from the AI assistant.",
  },
];

const quickLinks = [
  { title: "SharePoint Repository", icon: "📚", url: "#", description: "Access all resources" },
  { title: "Team Directory", icon: "👥", url: "#", description: "Meet your team" },
  { title: "Safety Guidelines", icon: "🛡️", url: "#", description: "Safety first" },
  { title: "Contact HR", icon: "📞", url: "#", description: "Get support" },
  { title: "System Status", icon: "⚙️", url: "#", description: "Check status" },
  { title: "Feedback Form", icon: "📝", url: "#", description: "Share feedback" },
];

export function Intro() {
  return (
    <PageShell>
      <IntroBackgroundVideo />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            <p className="animate-entrance text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 drop-shadow-sm">
              Freshers onboarding
            </p>

            <h1 className="animate-entrance mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl text-blue-900 drop-shadow-md" style={{animationDelay: '0.1s'}}>
              KTOC <span className="text-blue-600">Learning Hub</span>
            </h1>

            <p className="animate-entrance mt-6 max-w-2xl text-base leading-relaxed text-slate-700 drop-shadow-sm" style={{animationDelay: '0.2s'}}>
              {INTRO_TEXT}
            </p>

            <div className="animate-entrance mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-slate-600 drop-shadow-sm" style={{animationDelay: '0.3s'}}>
              <span>Guided videos</span>
              <span className="text-slate-400">•</span>
              <span>9 sections</span>
              <span className="text-slate-400">•</span>
              <span>Live chatbot support</span>
            </div>



            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {highlights.map((h, idx) => (
                <Link
                  key={h.to}
                  to={h.to}
                  className="animate-entrance surface-card block p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{animationDelay: `${0.5 + idx * 0.1}s`}}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-100 text-blue-600">
                    <h.icon className="h-5 w-5 icon-bounce" />
                  </div>
                  <h2 className="mt-4 font-display text-base font-semibold text-slate-900">{h.title}</h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{h.text}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="animate-entrance surface-card rounded-2xl p-6 bg-white border-2 border-blue-100 shadow-lg" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2 mb-4">
                  <Bookmark className="h-5 w-5 text-blue-600 icon-float" />
                  <h3 className="font-display text-lg font-semibold text-slate-900">Quick Links</h3>
                </div>
                <p className="text-xs text-slate-600 mb-5">For New Joiners Reference</p>
                
                <div className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="animate-entrance group flex items-start gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all duration-300"
                      style={{animationDelay: `${0.6 + idx * 0.05}s`}}
                    >
                      <span className="text-lg flex-shrink-0">{link.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs text-slate-900 group-hover:text-blue-700 transition-colors">
                          {link.title}
                        </p>
                        <p className="text-xs text-slate-600">{link.description}</p>
                      </div>
                      <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>

                {/* Useful Info Box */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-xs font-semibold text-slate-900 mb-3">Pro Tips:</p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li>✓ Start with Training Videos</li>
                    <li>✓ Join the Community for support</li>
                    <li>✓ Use Chatbot for quick answers</li>
                    <li>✓ Check Confluence for docs</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
