import { PageShell } from "../components/PageShell";
import { VideoGrid } from "../components/VideoGrid";
import { learningVideos } from "../data/videos";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function TamilVideos() {
  const tamilVideos = learningVideos.slice(0, Math.ceil(learningVideos.length / 2));

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-3xl blur-3xl opacity-60" />
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-4 animate-entrance">
                <span className="text-3xl">🇮🇳</span>
                <h1 className="font-display text-4xl font-semibold tracking-tight">Tamil Training Videos</h1>
              </div>
              <p className="mt-2 max-w-3xl text-base text-muted-foreground animate-entrance" style={{animationDelay: '0.1s'}}>
                தமிழ் பயிற்சி வீடியோக்கள் - Comprehensive training videos in Tamil language
              </p>
            </div>
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 icon-pulse" />
              Back
            </Link>
          </div>

          {/* Info Card */}
          <div className="mt-8 surface-card p-6 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 animate-entrance" style={{animationDelay: '0.2s'}}>
            <h3 className="font-display text-lg font-semibold text-rose-900 mb-2">📺 About These Videos</h3>
            <p className="text-sm text-rose-800">
              All videos are professionally produced in Tamil with clear explanations, demonstrations, and subtitles where needed. 
              Click on any video to access it on SharePoint.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="mt-10 animate-entrance" style={{animationDelay: '0.3s'}}>
            <h2 className="font-display text-2xl font-semibold mb-2">Available Videos ({tamilVideos.length})</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Click any video card to open it on SharePoint
            </p>
            <VideoGrid videos={tamilVideos} />
          </div>

          {/* Navigation Cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 animate-entrance" style={{animationDelay: '0.4s'}}>
            <Link
              to="/videos"
              className="surface-card p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-lg font-semibold mb-2">🇬🇧 English Videos</p>
              <p className="text-sm text-muted-foreground">Switch to English training videos</p>
              <p className="text-xs font-semibold text-rose-600 mt-3">View English Collection →</p>
            </Link>

            <Link
              to="/videos"
              className="surface-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-lg font-semibold mb-2">📹 All Videos</p>
              <p className="text-sm text-muted-foreground">Browse all training videos</p>
              <p className="text-xs font-semibold text-blue-600 mt-3">Return to Main →</p>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
