import { PageShell } from "../components/PageShell";
import { VideoGrid } from "../components/VideoGrid";
import { oldVideos } from "../data/videos";

export function OldVideos() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Old Videos</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Archive sessions covering legacy equipment and earlier standards.
        </p>
        <VideoGrid videos={oldVideos} />
      </section>
    </PageShell>
  );
}
