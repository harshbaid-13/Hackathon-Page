import { Shield, Database, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <p className="text-blue-700">Background</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Why This Framework Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artificial intelligence in healthcare requires novel validation
            infrastructures to ensure safe, effective, and equitable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl mb-3">The Challenge</h3>
            <p className="text-gray-600">
              AI models often fail to generalize beyond training environments.
              Traditional software testing is insufficient for complex
              healthcare AI systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl mb-3">Data Scarcity</h3>
            <p className="text-gray-600">
              Healthcare data is expensive and not abundantly available, making
              it difficult to validate AI models at scale across diverse
              settings.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl mb-3">Real-World Risk</h3>
            <p className="text-gray-600">
              Without external third-party validations, AI systems may perform
              well on backtested data but underperform significantly when
              deployed.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            The IIT Kanpur AI federated intelligence framework emerged in 2024
            from the realization that current approaches to AI validation create
            significant risks for public health outcomes. The absence of robust
            validation infrastructure, combined with data scarcity in
            healthcare, has created an urgent need for innovative solutions that
            can ensure AI systems are trustworthy before deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
