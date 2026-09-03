import { Users, BookOpen, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export function NewJoineeTraining() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight animate-entrance">New Joinee Training</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground animate-entrance" style={{animationDelay: '0.1s'}}>
            Comprehensive onboarding program designed specifically for new engineers joining KTOC. Follow this structured path to get up to speed quickly.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 animate-entrance" style={{animationDelay: '0.2s'}}>
            {/* Week 1 */}
            <div className="surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-emerald-500">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-3 w-3 icon-bounce" />
                Week 1
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Orientation & Basics</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Company introduction and team meet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Safety protocols and guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Tool setup and environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>System access and credentials</span>
                </li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-teal-500">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="h-3 w-3 icon-rotate" />
                Week 2
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Product Knowledge</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Product features and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>System architecture overview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Technical specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Hands-on lab session</span>
                </li>
              </ul>
            </div>

            {/* Week 3-4 */}
            <div className="surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-cyan-500">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                <CheckCircle2 className="h-3 w-3 icon-pulse" />
                Week 3-4
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Practical Training</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Field experience with mentor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Real-world troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Certification assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Feedback and review</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 surface-card p-8 animate-entrance" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-teal-600 icon-float" />
              <h2 className="font-display text-2xl font-semibold">Quick Links & Resources</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-400 transition-colors">
                <div className="h-10 w-10 rounded-md bg-emerald-500 flex items-center justify-center text-white font-semibold flex-shrink-0">🎓</div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-emerald-700 transition-colors">Training Manual</p>
                  <p className="text-xs text-muted-foreground">Complete training documentation</p>
                </div>
              </a>
              <a href="#" className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 hover:border-teal-400 transition-colors">
                <div className="h-10 w-10 rounded-md bg-teal-500 flex items-center justify-center text-white font-semibold flex-shrink-0">📹</div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-teal-700 transition-colors">Video Tutorials</p>
                  <p className="text-xs text-muted-foreground">Recorded training sessions</p>
                </div>
              </a>
              <a href="#" className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 hover:border-cyan-400 transition-colors">
                <div className="h-10 w-10 rounded-md bg-cyan-500 flex items-center justify-center text-white font-semibold flex-shrink-0">👥</div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-cyan-700 transition-colors">Mentor Contacts</p>
                  <p className="text-xs text-muted-foreground">Meet your training team</p>
                </div>
              </a>
              <a href="#" className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-400 transition-colors">
                <div className="h-10 w-10 rounded-md bg-blue-500 flex items-center justify-center text-white font-semibold flex-shrink-0">📋</div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-blue-700 transition-colors">Progress Tracker</p>
                  <p className="text-xs text-muted-foreground">Track your training progress</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
