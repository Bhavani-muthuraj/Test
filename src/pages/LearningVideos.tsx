import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { VideoGrid } from "../components/VideoGrid";
import { learningVideos } from "../data/videos";
import { Link } from "react-router-dom";

export function LearningVideos() {
  const [selectedLanguage, setSelectedLanguage] = useState<"tamil" | "english">("english");

  // Split videos by language
  const tamilVideos = learningVideos.slice(0, Math.ceil(learningVideos.length / 2));
  const englishVideos = learningVideos.slice(Math.ceil(learningVideos.length / 2));

  const displayVideos = selectedLanguage === "tamil" ? tamilVideos : englishVideos;

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">New Training Videos</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            Select your preferred language to access the latest training videos. All videos are available on SharePoint.
          </p>

          {/* Language Selection Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-2xl">
            <button
              onClick={() => setSelectedLanguage("tamil")}
              className={`group relative p-6 rounded-xl transition-all duration-300 border-2 ${
                selectedLanguage === "tamil"
                  ? "border-rose-500 bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg shadow-rose-500/20"
                  : "border-rose-200 bg-white hover:border-rose-400 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold">🇮🇳</h3>
                  <p className="font-display text-lg font-semibold mt-2">Tamil Videos</p>
                  <p className="text-sm text-muted-foreground mt-1">{tamilVideos.length} videos available</p>
                </div>
                {selectedLanguage === "tamil" && (
                  <div className="h-4 w-4 rounded-full bg-rose-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>

            <button
              onClick={() => setSelectedLanguage("english")}
              className={`group relative p-6 rounded-xl transition-all duration-300 border-2 ${
                selectedLanguage === "english"
                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/20"
                  : "border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold">🇬🇧</h3>
                  <p className="font-display text-lg font-semibold mt-2">English Videos</p>
                  <p className="text-sm text-muted-foreground mt-1">{englishVideos.length} videos available</p>
                </div>
                {selectedLanguage === "english" && (
                  <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* Active Language Section */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {selectedLanguage === "tamil" ? "Tamil Training Videos" : "English Training Videos"}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedLanguage === "tamil"
                    ? "பயிற்சி வீடியோக்கள் - Click any video to watch it on SharePoint"
                    : "Guided tutorials - Click any video to watch it on SharePoint"}
                </p>
              </div>
              <Link
                to="/videos"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                ↻ Switch Language
              </Link>
            </div>

            <VideoGrid videos={displayVideos} />
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200">
              <h3 className="font-display text-lg font-semibold mb-3">Tamil Videos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our Tamil language training videos are designed for native Tamil speakers, with detailed explanations and demonstrations in Tamil.
              </p>
              <button className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors">
                View Full Tamil Library →
              </button>
            </div>

            <div className="surface-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-display text-lg font-semibold mb-3">English Videos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our English language training videos provide comprehensive coverage of all topics, with clear audio and professional presentation.
              </p>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                View Full English Library →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
