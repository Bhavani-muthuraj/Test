import { PageShell } from "../components/PageShell";
import { VideoGrid } from "../components/VideoGrid";
import { learningVideos } from "../data/videos";

export function LearningVideos() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Learning Videos</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Guided tutorials to help you get up to speed. Click any video to watch it on SharePoint.
        </p>
        <VideoGrid videos={learningVideos} />
      </section>
    </PageShell>
  );
}
