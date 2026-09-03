import { BookOpen, FileText, Link2, Search } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { useState } from "react";
import { KnowledgeBackgroundImage } from "../components/KnowledgeBackgroundImage";

export function KnowledgeArticle() {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      title: "System Maintenance Best Practices",
      category: "Maintenance",
      type: "document",
      icon: "📄",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Safety Guidelines and Protocols",
      category: "Safety",
      type: "document",
      icon: "🛡️",
      color: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
    },
    {
      title: "Technical Documentation",
      category: "Technical",
      type: "video",
      icon: "📹",
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Troubleshooting Guide",
      category: "Technical",
      type: "document",
      icon: "🔧",
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Installation Procedures",
      category: "Installation",
      type: "document",
      icon: "🔩",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      title: "Performance Optimization",
      category: "Performance",
      type: "video",
      icon: "⚡",
      color: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageShell>
      <KnowledgeBackgroundImage />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">Knowledge Articles</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground animate-entrance" style={{animationDelay: '0.1s'}}>
            Access comprehensive documentation, guides, and resources. Browse articles and videos to find the information you need.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex items-center gap-3 rounded-lg surface-card p-4 max-w-md animate-entrance" style={{animationDelay: '0.2s'}}>
            <Search className="h-5 w-5 text-muted-foreground icon-rotate" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          {/* Categories Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["All", "Maintenance", "Safety", "Technical", "Installation", "Performance"].map((category) => (
              <button
                key={category}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors bg-white border border-border hover:bg-primary/10 hover:border-primary/30"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-entrance" style={{animationDelay: '0.3s'}}>
            {filteredArticles.map((article, idx) => (
              <a
                key={idx}
                href="#"
                className={`group surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-purple-300 bg-gradient-to-br ${article.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl icon-bounce">{article.icon}</div>
                  <span className="inline-block rounded-full bg-white/50 px-2 py-1 text-xs font-semibold text-gray-700">
                    {article.type === "video" ? "🎬 Video" : "📄 Doc"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-gray-600">{article.category}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link2 className="h-4 w-4" />
                  Open resource
                </div>
              </a>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="mt-14 surface-card p-8 animate-entrance" style={{animationDelay: '0.4s'}}>
            <h2 className="font-display text-2xl font-semibold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-600 icon-rotate" />
              Quick Link Repository
            </h2>
            <p className="mt-3 text-sm text-muted-foreground mb-6">
              Add SharePoint links and document repositories here
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-400 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-purple-500 flex items-center justify-center text-white font-semibold">📚</div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-purple-700">SharePoint Repository</p>
                    <p className="text-xs text-muted-foreground">Main knowledge base link</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 hover:border-pink-400 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-pink-500 flex items-center justify-center text-white font-semibold">🎥</div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-pink-700">Video Library</p>
                    <p className="text-xs text-muted-foreground">Recorded training videos</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 hover:border-red-400 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-red-500 flex items-center justify-center text-white font-semibold">📋</div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-red-700">Documentation</p>
                    <p className="text-xs text-muted-foreground">Technical specifications</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-orange-500 flex items-center justify-center text-white font-semibold">🔗</div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-orange-700">External Links</p>
                    <p className="text-xs text-muted-foreground">Important external resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
