import { Zap, Box, Grid3x3, Network } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { ArchitectureBackgroundImage } from "../components/ArchitectureBackgroundImage";

export function DigitalArchitecture() {
  return (
    <PageShell>
      <ArchitectureBackgroundImage />
      <section className="mx-auto max-w-7xl px-5 py-14 relative z-10">
        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 h-96 w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl blur-3xl opacity-60" />
          
          <h1 className="font-display text-4xl font-semibold tracking-tight">Digital Architecture</h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            System architecture diagrams, technical specifications, and infrastructure designs. View detailed architecture diagrams created with Microsoft Visio.
          </p>

          {/* Architecture Components */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* System Architecture */}
            <div className="surface-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-100 text-blue-600">
                  <Box className="h-5 w-5 icon-bounce" />
                </div>
                <h3 className="font-display text-lg font-semibold">System Architecture</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                High-level overview of the complete system architecture and components.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-200 border-dashed flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Grid3x3 className="h-16 w-16 mx-auto text-blue-400 mb-4 opacity-50" />
                  <p className="text-sm text-muted-foreground">Architecture Diagram (Visio)</p>
                  <p className="text-xs text-gray-500 mt-2">Embed or link to Visio diagram here</p>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="surface-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-purple-100 text-purple-600">
                  <Network className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">Data Flow Diagram</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Detailed data flow between system components and services.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-200 border-dashed flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Network className="h-16 w-16 mx-auto text-purple-400 mb-4 opacity-50" />
                  <p className="text-sm text-muted-foreground">Data Flow (Visio)</p>
                  <p className="text-xs text-gray-500 mt-2">Embed or link to Visio diagram here</p>
                </div>
              </div>
            </div>

            {/* Infrastructure Diagram */}
            <div className="surface-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-cyan-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-100 text-cyan-600">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">Infrastructure</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Complete infrastructure overview and deployment architecture.
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 border-2 border-cyan-200 border-dashed flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Zap className="h-16 w-16 mx-auto text-cyan-400 mb-4 opacity-50" />
                  <p className="text-sm text-muted-foreground">Infrastructure (Visio)</p>
                  <p className="text-xs text-gray-500 mt-2">Embed or link to Visio diagram here</p>
                </div>
              </div>
            </div>

            {/* Component Diagram */}
            <div className="surface-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
                  <Box className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">Component Details</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Detailed component specifications and interactions.
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border-2 border-emerald-200 border-dashed flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Grid3x3 className="h-16 w-16 mx-auto text-emerald-400 mb-4 opacity-50" />
                  <p className="text-sm text-muted-foreground">Components (Visio)</p>
                  <p className="text-xs text-gray-500 mt-2">Embed or link to Visio diagram here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="mt-12 surface-card p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Architecture Documentation</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <h3 className="font-semibold text-sm mb-3">System Components</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ API Gateway Layer</li>
                  <li>✓ Business Logic Services</li>
                  <li>✓ Data Storage Layer</li>
                  <li>✓ Message Queue Services</li>
                  <li>✓ Cache Management</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <h3 className="font-semibold text-sm mb-3">Integration Points</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ External APIs</li>
                  <li>✓ Third-party Services</li>
                  <li>✓ Database Connections</li>
                  <li>✓ Authentication Services</li>
                  <li>✓ Monitoring Systems</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200">
                <h3 className="font-semibold text-sm mb-3">Deployment Architecture</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Container Orchestration</li>
                  <li>✓ Load Balancing</li>
                  <li>✓ Scaling Policies</li>
                  <li>✓ Backup Strategy</li>
                  <li>✓ Disaster Recovery</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                <h3 className="font-semibold text-sm mb-3">Security Architecture</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Access Control</li>
                  <li>✓ Data Encryption</li>
                  <li>✓ Network Segmentation</li>
                  <li>✓ Audit Logging</li>
                  <li>✓ Compliance Standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              📥 Download Visio Files
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-black/5 transition-colors">
              📋 View Documentation
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
