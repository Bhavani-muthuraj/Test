import { BookMarked, ExternalLink } from "lucide-react";
import { PageShell } from "../components/PageShell";

// 👇 EDIT THIS to point at your actual Confluence space
const CONFLUENCE_URL = "https://yourcompany.atlassian.net/wiki/spaces/KTOC";

export function ConfluencePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">Confluence Knowledge Base</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground animate-entrance" style={{animationDelay: '0.1s'}}>
            Access our Confluence wiki for comprehensive documentation, team guidelines, best practices, and project information. Your central hub for all KTOC knowledge.
          </p>

          {/* Main Confluence Card */}
          <div className="mt-12 animate-entrance" style={{animationDelay: '0.2s'}}>
            <div className="surface-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-8 py-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                    <BookMarked className="h-8 w-8 text-white icon-float" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-white">Confluence Wiki</h2>
                    <p className="text-white/90 text-sm">Team knowledge and documentation hub</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Features */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4">What's Inside</h3>
                    <ul className="space-y-3">
                      {[
                        "Team documentation and guidelines",
                        "Project specifications and requirements",
                        "Process documentation and workflows",
                        "Meeting notes and decisions",
                        "Best practices and standards",
                        "Resource library and links",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid gap-4">
                    {[
                      { number: "150+", label: "Documentation Pages" },
                      { number: "50+", label: "Active Projects" },
                      { number: "24/7", label: "Access Available" },
                      { number: "100%", label: "Team Participation" },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200"
                      >
                        <p className="text-2xl font-bold text-orange-600">{stat.number}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href={CONFLUENCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                  >
                    <BookMarked className="h-5 w-5 icon-rotate" />
                    Open Confluence Wiki
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-12 animate-entrance" style={{animationDelay: '0.3s'}}>
            <h2 className="font-display text-2xl font-semibold mb-6">Quick Navigation</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Getting Started",
                  description: "Onboarding guide and setup",
                  icon: "🚀",
                  color: "from-orange-50 to-red-50",
                  borderColor: "border-orange-200",
                },
                {
                  title: "Documentation",
                  description: "Technical docs and specs",
                  icon: "📚",
                  color: "from-amber-50 to-yellow-50",
                  borderColor: "border-amber-200",
                },
                {
                  title: "Processes",
                  description: "Team workflows and procedures",
                  icon: "⚙️",
                  color: "from-yellow-50 to-orange-50",
                  borderColor: "border-yellow-200",
                },
                {
                  title: "Resources",
                  description: "Tools, templates, and links",
                  icon: "🔗",
                  color: "from-orange-50 to-amber-50",
                  borderColor: "border-orange-200",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={CONFLUENCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group surface-card p-5 border hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br ${item.color} ${item.borderColor}`}
                >
                  <div className="text-2xl mb-2 icon-bounce">{item.icon}</div>
                  <h3 className="font-display text-sm font-semibold group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="mt-12 surface-card p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Recent Documentation Updates</h2>
            <div className="space-y-4">
              {[
                {
                  date: "Sep 1, 2026",
                  title: "Q3 2026 Planning Document",
                  author: "Engineering Team",
                },
                {
                  date: "Aug 28, 2026",
                  title: "New Safety Guidelines Released",
                  author: "Safety Committee",
                },
                {
                  date: "Aug 25, 2026",
                  title: "System Architecture Update",
                  author: "Architecture Team",
                },
                {
                  date: "Aug 20, 2026",
                  title: "Team Onboarding Process v2.0",
                  author: "HR & Training",
                },
              ].map((update, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between p-4 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 hover:border-orange-400 transition-colors group cursor-pointer"
                >
                  <div>
                    <p className="font-semibold text-sm group-hover:text-orange-700 transition-colors">
                      {update.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {update.date} • by {update.author}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
