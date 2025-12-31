import { AlertTriangle } from "lucide-react";

export function TrilemmaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <p className="text-amber-700">The Problem</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            The AI Quality Testing Trilemma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current validation approaches can only satisfy two of three critical
            requirements
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Triangle Container - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block relative aspect-square max-w-2xl mx-auto mb-12">
            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <line
                x1="50"
                y1="10"
                x2="15"
                y2="85"
                stroke="#e5e7eb"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
              <line
                x1="50"
                y1="10"
                x2="85"
                y2="85"
                stroke="#e5e7eb"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
              <line
                x1="15"
                y1="85"
                x2="85"
                y2="85"
                stroke="#e5e7eb"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            </svg>

            {/* Top Point - Reliability */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-xl mb-2">Reliability</h3>
                <p className="text-sm text-blue-100">
                  Centralized testing enhances reliability but restricts
                  openness and applicability
                </p>
              </div>
            </div>

            {/* Bottom Left Point - Openness */}
            <div className="absolute bottom-0 left-0 transform -translate-x-8">
              <div className="bg-linear-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <div className="text-3xl mb-2">🔓</div>
                <h3 className="text-xl mb-2">Openness</h3>
                <p className="text-sm text-green-100">
                  Independent testing promotes openness but risks overfitting
                  and statistical misuse
                </p>
              </div>
            </div>

            {/* Bottom Right Point - Transparency */}
            <div className="absolute bottom-0 right-0 transform translate-x-8">
              <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-xl mb-2">Transparency</h3>
                <p className="text-sm text-purple-100">
                  Benchmark-driven testing ensures transparency but remains
                  restricted to pre-defined datasets
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked cards */}
          <div className="md:hidden space-y-6 mb-12">
            <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-xl mb-2">Reliability</h3>
              <p className="text-sm text-blue-100">
                Centralized testing enhances reliability but restricts openness
                and applicability
              </p>
            </div>

            <div className="bg-linear-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-2">🔓</div>
              <h3 className="text-xl mb-2">Openness</h3>
              <p className="text-sm text-green-100">
                Independent testing promotes openness but risks overfitting and
                statistical misuse
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-xl mb-2">Transparency</h3>
              <p className="text-sm text-purple-100">
                Benchmark-driven testing ensures transparency but remains
                restricted to pre-defined datasets
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white p-6 md:p-8 rounded-2xl">
            <p className="text-base md:text-lg leading-relaxed text-center">
              <span className="text-amber-400">Given the paucity of data</span>,
              validation of AI models for healthcare can presently satisfy{" "}
              <span className="text-amber-400">at most two of the three</span>{" "}
              desiderata for quality testing. This creates a landscape where
              model developers lack incentives for robust validation, and end
              users struggle to assess real-world utility and risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
