import { Users } from "lucide-react";
import { PageShell } from "../components/PageShell";

// 👇 EDIT THIS to point at your actual community space
// (e.g. a SharePoint site, Teams channel, or Yammer/Viva Engage group).
const COMMUNITY_URL = "https://engage.cloud.microsoft/main/org/kone.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI3ODc3MzU3In0/all";

export function Community() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Community</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Ask questions and learn from senior technicians across regions.
        </p>

        <div className="surface-card mt-8 flex max-w-xl flex-col items-start gap-4 p-6">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <p className="text-sm text-muted-foreground">
            Join the wider community space to ask questions, share tips, and connect with other
            engineers.
          </p>
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Open community space ↗
          </a>
        </div>
      </section>
    </PageShell>
  );
}
