import { Target, Shield, Database } from "lucide-react";

export function DPGsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
            <p className="text-purple-700">Three Core Components</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">AI Digital Public Goods (DPGs)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The framework consists of three interconnected digital public goods that work together to enable trustworthy AI validation
          </p>
        </div>

        <div className="space-y-8">
          {/* DPG 1 - OBP */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-200 rounded-full text-sm text-blue-800 mb-3">
                  DPG 1
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Open Benchmarking Platform (OBP)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Enables model providers to test their algorithms in a double-blind, federated setup. Inspired by NIST's FRVT, this platform supports validation against datasets from diverse, real-world settings without sharing raw data.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Performance benchmarking under differential privacy constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Auditable public record of model behavior on out-of-sample data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Builds trust in AI for health models in the consumer market</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DPG 2 - HIECM */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-green-200 rounded-full text-sm text-green-800 mb-3">
                  DPG 2
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Health Information Exchange Consent Management (HIECM)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Extends ABDM's clinical consent model to research use cases. Enables patients to provide informed, revocable consent for use of their data in algorithmic testing.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Token-based consent with provable anonymization mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Ethical and legal backbone of the federated testing ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Encourages healthcare data ecosystem improvement via ABDM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DPG 3 - QPD */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-purple-200 rounded-full text-sm text-purple-800 mb-3">
                  DPG 3
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Quality Preserving Databases (QPDs)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Management layer that monitors and maintains the statistical validity of test datasets. Implements alpha-investing strategies to ensure repeated model tests don't erode benchmark reliability.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Users compensate for statistical loss by contributing new samples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Automatic and manual quality checks for non-duplication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Sustains statistical quality across validation cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
