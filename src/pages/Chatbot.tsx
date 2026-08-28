import { Bot } from "lucide-react";
import { PageShell } from "../components/PageShell";

// 👇 EDIT THESE to point at your actual chatbot.
// If your chatbot provider gives you an embeddable URL, put it in
// CHATBOT_EMBED_URL and it will show directly on this page. Otherwise,
// leave CHATBOT_EMBED_URL empty and only the link button will be shown.
const CHATBOT_URL = "https://yourcompany.sharepoint.com/sites/chatbot";
const CHATBOT_EMBED_URL = ""; // e.g. "https://yourbot.example.com/embed"

export function Chatbot() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Chatbot</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Instant answers from the company assistant.
        </p>

        {CHATBOT_EMBED_URL ? (
          <div className="surface-card mt-8 overflow-hidden">
            <iframe
              src={CHATBOT_EMBED_URL}
              title="Chatbot"
              className="h-[600px] w-full"
              allow="clipboard-write"
            />
          </div>
        ) : (
          <div className="surface-card mt-8 flex max-w-xl flex-col items-start gap-4 p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Bot className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Open the chatbot to get instant answers to common questions.
            </p>
            <a
              href={CHATBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Open chatbot ↗
            </a>
          </div>
        )}
      </section>
    </PageShell>
  );
}
