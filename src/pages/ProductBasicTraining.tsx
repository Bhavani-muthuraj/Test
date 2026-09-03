import { GraduationCap } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { ProductBackgroundImage } from "../components/ProductBackgroundImage";

export function ProductBasicTraining() {
  return (
    <PageShell>
      <ProductBackgroundImage />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        <div className="relative">
          <h1 className="animate-header font-display text-4xl font-semibold tracking-tight text-slate-900">Product Basic Training</h1>
          <p className="animate-entrance mt-3 max-w-3xl text-base text-slate-700" style={{animationDelay: '0.1s'}}>
            Master the fundamentals of KONE elevator systems and equipment. This comprehensive training covers product features, specifications, and operational basics for new engineers.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Training Card 1 */}
            <div className="animate-entrance surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500" style={{animationDelay: '0.2s'}}>
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-100 text-blue-600">
                <GraduationCap className="h-6 w-6 icon-bounce" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">System Overview</h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn the core components and architecture of KONE elevator systems.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Access materials →
              </a>
            </div>

            {/* Training Card 2 */}
            <div className="animate-entrance surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-orange-400" style={{animationDelay: '0.3s'}}>
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-orange-100 text-orange-600">
                <GraduationCap className="h-6 w-6 icon-pulse" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">Technical Specifications</h3>
              <p className="mt-2 text-sm text-slate-600">
                Detailed specs, safety standards, and technical documentation.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                View specs →
              </a>
            </div>

            {/* Training Card 3 */}
            <div className="animate-entrance surface-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-rose-400" style={{animationDelay: '0.4s'}}>
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-rose-100 text-rose-600">
                <GraduationCap className="h-6 w-6 icon-swing" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">Operational Guide</h3>
              <p className="mt-2 text-sm text-slate-600">
                Step-by-step guides for system operation and maintenance.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
              >
                Read guide →
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-entrance mt-12 surface-card p-8 border-t-4 border-blue-200" style={{animationDelay: '0.5s'}}>
            <h2 className="font-display text-2xl font-semibold text-slate-900">Training Resources</h2>
            <p className="mt-3 text-sm text-slate-600">
              Add SharePoint links and documents here for product training materials.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all">
                <div className="h-10 w-10 rounded-md bg-amber-500 flex items-center justify-center text-white font-semibold">📄</div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Training Document Link</p>
                  <p className="text-xs text-slate-600">Add your SharePoint link here</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-all">
                <div className="h-10 w-10 rounded-md bg-orange-500 flex items-center justify-center text-white font-semibold">📹</div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Training Video Link</p>
                  <p className="text-xs text-slate-600">Add your SharePoint video link here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
