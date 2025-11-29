import React from "react";
import { ArrowLeft, Activity, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cataract = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
    // Scroll to challenge problems section after navigation with 10px offset
    setTimeout(() => {
      const challengeSection = document.getElementById("challenge-problems");
      if (challengeSection) {
        const elementPosition = challengeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 pb-12">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Cataract Detection
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Data Provider Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Problem Statement Hero */}

        {/* Coming Soon Section */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="p-6 bg-indigo-100 rounded-full">
                <Clock className="w-16 h-16 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Dataset specifications and details for the Cataract Detection
              challenge will be available soon.
            </p>
            <p className="text-lg text-slate-500">
              We're working on preparing comprehensive dataset information,
              including specifications, metadata, and preprocessing guidelines.
              Please check back later for updates.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cataract;
