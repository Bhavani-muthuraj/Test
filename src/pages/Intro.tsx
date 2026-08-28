import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Users, Archive } from "lucide-react";
import { PageShell } from "../components/PageShell";

// 👇 EDIT THIS TEXT to change the homepage welcome paragraph.
const INTRO_TEXT =
  "Welcome to the KTOC Learning Hub — your one-stop learning platform designed to support the onboarding and continuous development of new elevator engineers. The Learning Hub brings together essential KTOC training videos, tutorials, learning materials, and community resources in one easy-to-access platform. Whether you are new to KTOC or looking to strengthen your existing knowledge, the platform provides a structured and convenient way to learn at your own pace.";

const highlights = [
  {
    to: "/videos",
    icon: GraduationCap,
    title: "Learning Videos",
    text: "Guided tutorials covering the essentials for new engineers.",
  },
  {
    to: "/old-videos",
    icon: Archive,
    title: "Old Videos",
    text: "Archive sessions covering legacy equipment and earlier standards.",
  },
  {
    to: "/community",
    icon: Users,
    title: "Community",
    text: "Ask questions and learn from senior technicians across regions.",
  },
  {
    to: "/chatbot",
    icon: Bot,
    title: "Chatbot",
    text: "Instant answers from the company assistant.",
  },
];

export function Intro() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <p className="animate-in fade-in slide-in-from-bottom-2 duration-500 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Freshers onboarding
        </p>

        <h1 className="animate-in fade-in slide-in-from-bottom-2 duration-700 mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          KTOC <span className="text-gradient">Learning Hub</span>
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-2 duration-1000 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {INTRO_TEXT}
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-muted-foreground">
          <span>Guided videos</span>
          <span className="text-border">•</span>
          <span>4 sections</span>
          <span className="text-border">•</span>
          <span>Live chatbot support</span>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 mt-9 flex flex-wrap gap-3">
          <Link
            to="/videos"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Start learning <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-black/5"
          >
            Explore the community
          </Link>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="surface-card block p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <h.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-base font-semibold">{h.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{h.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
