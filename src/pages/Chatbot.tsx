import { Bot, Zap, Brain, MessageSquare, Sparkles } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { RobotBackground } from "../components/RobotBackground";

// 👇 EDIT THESE to point at your actual chatbot.
// If your chatbot provider gives you an embeddable URL, put it in
// CHATBOT_EMBED_URL and it will show directly on this page. Otherwise,
// leave CHATBOT_EMBED_URL empty and only the link button will be shown.
const CHATBOT_URL = "https://yourcompany.sharepoint.com/sites/chatbot";
const CHATBOT_EMBED_URL = ""; // e.g. "https://yourbot.example.com/embed"

export function Chatbot() {
  return (
    <PageShell>
      <RobotBackground />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        <div className="relative">
          {/* Decorative gradient background - Robotic theme */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">AI Chatbot Assistant</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            Get instant answers from our intelligent assistant. Available 24/7 to help with common questions, troubleshooting, and guidance.
          </p>

          {/* Chatbot Card */}
          <div className="mt-10">
            {CHATBOT_EMBED_URL ? (
              <div className="surface-card overflow-hidden shadow-lg rounded-2xl border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-6 py-4">
                  <div className="flex items-center gap-2 text-white">
                    <Bot className="h-5 w-5 icon-pulse" />
                    <span className="font-semibold">Chat Assistant</span>
                    <Sparkles className="h-4 w-4 icon-bounce" />
                  </div>
                </div>
                <iframe
                  src={CHATBOT_EMBED_URL}
                  title="Chatbot"
                  className="h-[600px] w-full"
                  allow="clipboard-write"
                />
              </div>
            ) : (
              <div className="surface-card overflow-hidden shadow-lg rounded-2xl border-2 border-blue-200">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-12">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                      <Bot className="h-8 w-8 text-white icon-rotate" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-white">Smart Assistant</h2>
                      <p className="text-white/90 text-sm">AI-powered support available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-base text-muted-foreground mb-8">
                    Our intelligent chatbot is ready to assist you with instant answers, guidance, and support. Ask anything related to KTOC systems, training, or company processes.
                  </p>

                  {/* Features */}
                  <div className="grid gap-4 mb-8 md:grid-cols-2">
                    {[
                      { icon: Brain, label: "Intelligent Responses", desc: "Smart AI-powered answers" },
                      { icon: Zap, label: "Lightning Fast", desc: "Instant support 24/7" },
                      { icon: MessageSquare, label: "Natural Chat", desc: "Human-like conversations" },
                      { icon: Sparkles, label: "Always Learning", desc: "Continuously improving" },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                        <feature.icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">{feature.label}</p>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={CHATBOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <Bot className="h-5 w-5" />
                    Open Chat Assistant ↗
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="mt-12 surface-card p-8 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200">
            <h2 className="font-display text-2xl font-semibold mb-6">Common Questions Answered</h2>
            <div className="space-y-4">
              {[
                { q: "How do I access the system?", a: "Ask the chatbot for access guidance" },
                { q: "What's the troubleshooting process?", a: "Get step-by-step troubleshooting help" },
                { q: "Where can I find documentation?", a: "Chatbot will direct you to resources" },
                { q: "How do I report issues?", a: "Learn the proper reporting procedure" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white/50 border border-blue-100 hover:border-blue-300 transition-colors">
                  <p className="font-semibold text-sm text-slate-900">{item.q}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Info */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: "🤖", label: "AI Powered", desc: "Advanced AI technology" },
              { icon: "⏱️", label: "Instant Replies", desc: "No waiting time" },
              { icon: "🌍", label: "Always Available", desc: "Round the clock" },
            ].map((item, idx) => (
              <div key={idx} className="surface-card p-6 text-center bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
