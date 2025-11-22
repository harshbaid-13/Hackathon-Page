import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, Sparkles } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-700" />
            <p className="text-green-700">The Solution</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">A Golden Opportunity</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NHA and IIT Kanpur are developing a framework for AI Digital Public Goods that enables trustworthy, open, and scalable validation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjUwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Data Network"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">ABDM Integration</h3>
                <p className="text-gray-600">
                  Aligned with Ayushman Bharat Digital Mission's consent architecture to unlock value in ABDM-compliant electronic health records
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Data Sharing Incentives</h3>
                <p className="text-gray-600">
                  Creates strong incentives for hospitals and patients to share data while maintaining privacy and consent
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Scalable Validation</h3>
                <p className="text-gray-600">
                  Enables AI/ML developers to build and validate models with large-scale data in a trustworthy manner
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Regulatory Support</h3>
                <p className="text-gray-600">
                  Provides infrastructure for third-party testing of AI models proposed for healthcare adoption
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl mb-4 text-center">Breaking the Trilemma</h3>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto text-blue-50">
            The federated intelligence framework resolves the AI quality testing trilemma by performing testing on a central, privately held benchmark dataset while maintaining openness via structured access protocols and preserving statistical validity through alpha budgeting—all without exchanging data between stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
