import { PlayCircle } from "lucide-react";
import type { VideoItem } from "../data/videos";

export function VideoGrid({ videos }: { videos: VideoItem[] }) {
  if (videos.length === 0) {
    return (
      <p className="mt-8 text-sm text-muted-foreground">
        No videos added yet — add some in <code>src/data/videos.ts</code>.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <div key={v.id} className="surface-card overflow-hidden">
          {v.embedUrl ? (
            // If an embed link was provided, the video plays right on the page.
            <div className="aspect-video w-full bg-black/5">
              <iframe
                src={v.embedUrl}
                title={v.title}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            // Otherwise, show a simple "Watch video" link that opens the
            // SharePoint page in a new tab.
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex aspect-video w-full items-center justify-center bg-primary/5 text-primary transition-colors hover:bg-primary/10"
            >
              <PlayCircle className="h-12 w-12" />
            </a>
          )}
          <div className="p-4">
            <h3 className="font-display text-sm font-semibold">{v.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.description}</p>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
            >
              Watch video ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
