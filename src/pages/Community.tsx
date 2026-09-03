import { Users, MessageCircle, Heart, Share2, TrendingUp } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { CommunityBackgroundImage } from "../components/CommunityBackgroundImage";

// 👇 EDIT THIS to point at your actual community space
// (e.g. a SharePoint site, Teams channel, or Yammer/Viva Engage group).
const COMMUNITY_URL = "https://engage.cloud.microsoft/main/org/kone.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI3ODc3MzU3In0/all";

export function Community() {
  return (
    <PageShell>
      <CommunityBackgroundImage />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">Community</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            Ask questions, share knowledge, and connect with fellow engineers across regions. Our vibrant community is here to support your growth and success.
          </p>

          {/* Main Community Card */}
          <div className="mt-10 surface-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-8 py-12">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <Users className="h-8 w-8 text-white icon-rotate" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white">Join Our Community</h2>
                  <p className="text-white/90 text-sm">Connect with engineers worldwide</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-base text-muted-foreground mb-6">
                Join the wider community space to ask questions, share tips, and connect with other engineers. Get expert advice from senior technicians and contribute your knowledge to help others grow.
              </p>
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <Users className="h-5 w-5" />
                Open community space ↗
              </a>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageCircle, label: "Ask Questions", color: "from-emerald-50 to-green-50", iconBg: "bg-emerald-100 text-emerald-600" },
              { icon: Share2, label: "Share Knowledge", color: "from-green-50 to-teal-50", iconBg: "bg-green-100 text-green-600" },
              { icon: Heart, label: "Support Others", color: "from-teal-50 to-cyan-50", iconBg: "bg-teal-100 text-teal-600" },
              { icon: TrendingUp, label: "Grow Together", color: "from-cyan-50 to-blue-50", iconBg: "bg-cyan-100 text-cyan-600" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${item.color}`}
              >
                <div className={`grid h-12 w-12 place-items-center rounded-lg ${item.iconBg}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{item.label}</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Engage with the community
                </p>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { number: "500+", label: "Active Members", gradient: "from-emerald-100 to-green-100" },
              { number: "2K+", label: "Discussions", gradient: "from-green-100 to-teal-100" },
              { number: "4.8★", label: "Community Rating", gradient: "from-teal-100 to-cyan-100" },
            ].map((stat, idx) => (
              <div key={idx} className={`surface-card p-8 text-center bg-gradient-to-br ${stat.gradient} border-2 border-emerald-200`}>
                <p className="font-display text-4xl font-bold text-emerald-600">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Community Guidelines */}
          <div className="mt-12 surface-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
            <h2 className="font-display text-2xl font-semibold mb-6">Community Guidelines</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Be respectful and professional",
                "Search before posting questions",
                "Provide detailed information",
                "Help others with knowledge",
                "Follow company policies",
                "Keep discussions relevant",
              ].map((guideline, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0" />
                  {guideline}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
