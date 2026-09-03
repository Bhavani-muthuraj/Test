import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { VideoGrid } from "../components/VideoGrid";
import { learningVideos } from "../data/videos";
import { BookOpen, Play, Target, Users, Clock, Award } from "lucide-react";
import { TrainingVideosBackgroundImage } from "../components/TrainingVideosBackgroundImage";

const trainingPath = [
  {
    week: "Week 1",
    title: "Foundation Basics",
    description: "Learn the fundamentals of elevator systems and safety protocols.",
    icon: BookOpen,
    topics: ["Safety Standards", "Equipment Overview", "Basic Terminology"],
  },
  {
    week: "Week 2",
    title: "System Operation",
    description: "Deep dive into system architecture and operational procedures.",
    icon: Target,
    topics: ["System Architecture", "Control Systems", "Diagnostics"],
  },
  {
    week: "Week 3",
    title: "Advanced Techniques",
    description: "Master advanced troubleshooting and maintenance techniques.",
    icon: Award,
    topics: ["Troubleshooting", "Maintenance", "Performance Optimization"],
  },
  {
    week: "Week 4",
    title: "Certification",
    description: "Final assessment and certification in KTOC procedures.",
    icon: Users,
    topics: ["Case Studies", "Real-world Scenarios", "Certification Exam"],
  },
];

export function TrainingVideos() {
  const [selectedLanguage, setSelectedLanguage] = useState<"tamil" | "english">("english");
  const [activeWeek, setActiveWeek] = useState<1 | 2 | 3 | 4>(1);

  // Split videos by language
  const tamilVideos = learningVideos.slice(0, Math.ceil(learningVideos.length / 2));
  const englishVideos = learningVideos.slice(Math.ceil(learningVideos.length / 2));

  const displayVideos = selectedLanguage === "tamil" ? tamilVideos : englishVideos;

  return (
    <PageShell>
      <TrainingVideosBackgroundImage />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-amber-900">
            Training Videos
          </h1>
          <p className="mt-3 max-w-3xl text-base text-amber-800">
            Comprehensive training program combining newjoinee onboarding with latest video tutorials. 
            Learn at your own pace with structured 4-week curriculum and video resources available in Tamil and English.
          </p>
        </div>

        {/* 4-Week Training Path */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-amber-600 icon-rotate" />
            <h2 className="font-display text-2xl font-semibold text-amber-900">4-Week Training Path</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainingPath.map((week, idx) => {
              const weekNum = (idx + 1) as 1 | 2 | 3 | 4;
              const Icon = week.icon;
              const isActive = activeWeek === weekNum;

              return (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(weekNum)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 border-2 text-left ${
                    isActive
                      ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg shadow-amber-500/20"
                      : "border-amber-200 bg-white hover:border-amber-400 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-amber-100" : "bg-amber-50"}`}>
                      <Icon className={`h-5 w-5 icon-float ${isActive ? "text-amber-600" : "text-amber-500"}`} />
                    </div>
                    {isActive && (
                      <div className="h-3 w-3 rounded-full bg-amber-500 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                    )}
                  </div>
                  <p className="font-semibold text-sm text-amber-600 mb-1">{week.week}</p>
                  <h3 className="font-display font-semibold text-amber-900 mb-2">{week.title}</h3>
                  <p className="text-xs text-amber-700">{week.description}</p>
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <p className="text-xs font-semibold text-amber-900 mb-2">Topics:</p>
                      <ul className="space-y-1">
                        {week.topics.map((topic) => (
                          <li key={topic} className="text-xs text-amber-700">
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Selection */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Play className="h-5 w-5 text-amber-600 icon-pulse" />
            <h2 className="font-display text-2xl font-semibold text-amber-900">Video Resources</h2>
          </div>

          {/* Language Selection Cards */}
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mb-8">
            <button
              onClick={() => setSelectedLanguage("tamil")}
              className={`group relative p-6 rounded-xl transition-all duration-300 border-2 ${
                selectedLanguage === "tamil"
                  ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg shadow-amber-500/20"
                  : "border-amber-200 bg-white hover:border-amber-400 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold">🇮🇳</h3>
                  <p className="font-display text-lg font-semibold mt-2">Tamil Videos</p>
                  <p className="text-sm text-amber-700 mt-1">{tamilVideos.length} videos</p>
                </div>
                {selectedLanguage === "tamil" && (
                  <div className="h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>

            <button
              onClick={() => setSelectedLanguage("english")}
              className={`group relative p-6 rounded-xl transition-all duration-300 border-2 ${
                selectedLanguage === "english"
                  ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg shadow-amber-500/20"
                  : "border-amber-200 bg-white hover:border-amber-400 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold">🇬🇧</h3>
                  <p className="font-display text-lg font-semibold mt-2">English Videos</p>
                  <p className="text-sm text-amber-700 mt-1">{englishVideos.length} videos</p>
                </div>
                {selectedLanguage === "english" && (
                  <div className="h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* Video Grid */}
          <div>
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-amber-900">
                {selectedLanguage === "tamil" ? "Tamil Training Videos" : "English Training Videos"}
              </h3>
              <p className="text-sm text-amber-700 mt-2">
                {selectedLanguage === "tamil"
                  ? "பயிற்சி வீடியோக்கள் - Click any video to watch it on SharePoint"
                  : "Guided tutorials - Click any video to watch it on SharePoint"}
              </p>
            </div>
            <VideoGrid videos={displayVideos} />
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="surface-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <h3 className="font-display text-lg font-semibold text-amber-900 mb-3">Structured Learning</h3>
            <p className="text-sm text-amber-700">
              Follow our 4-week curriculum designed for comprehensive skill development, from basics to advanced techniques.
            </p>
          </div>

          <div className="surface-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <h3 className="font-display text-lg font-semibold text-amber-900 mb-3">Multi-Language Support</h3>
            <p className="text-sm text-amber-700">
              Videos available in both Tamil and English to ensure everyone can learn in their preferred language.
            </p>
          </div>

          <div className="surface-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <h3 className="font-display text-lg font-semibold text-amber-900 mb-3">Self-Paced Training</h3>
            <p className="text-sm text-amber-700">
              Learn at your own pace with access to all training materials, videos, and resources whenever you need them.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
