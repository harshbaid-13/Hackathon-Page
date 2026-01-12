import { ReactElement } from "react";
import {
  ArrowLeft,
  Download,
  FileImage,
  Users,
  Database,
  Activity,
  ScanLine,
  Tag,
  Info,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DiabeticRetinopathy = () => {
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
                  Diabetic Retinopathy
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Data Provider Details
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                disabled={true}
                className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-not-allowed"
              >
                <Download size={16} className="mr-2" />
                Download Training Dataset (Not Ready)
              </button>
              <button
                disabled={true}
                className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-500 bg-slate-100 focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-not-allowed"
                title="Dataset not ready yet. Please wait."
              >
                <Download size={16} className="mr-2" />
                Download Sample Testing Dataset (Not Ready)
              </button>
              {/* <a
                href="/dhs/hackathon/datasets/diabetic-retinopathy-sample.csv"
                download="diabetic-retinopathy-sample.csv"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <Download size={16} className="mr-2" />
                Download Dataset
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Problem Statement Hero */}
        <div className="bg-[#1e1b4b] rounded-2xl shadow-xl p-8 md:p-10 mb-8 text-white relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-indigo-300">
              <Activity size={20} />
              <span className="font-bold tracking-widest uppercase text-xs">
                Problem Statement
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl leading-tight">
              Screen and detect Diabetic Retinopathy, and classify DR into
              severity levels from fundus images.
            </h2>
            <p className="text-indigo-100 text-lg max-w-3xl leading-relaxed opacity-90">
              Diabetic Retinopathy is a microvascular complication of diabetes
              that leads to progressive damage of the retina. The disease is
              often asymptomatic in early stages, making screening critical for
              timely intervention. However, manual grading of DR from fundus
              images is time-consuming, requires skilled ophthalmologists, and
              is prone to variability.
            </p>
          </div>
        </div>

        {/* Dataset Not Ready Message */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <svg
                className="w-8 h-8 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                Dataset Not Ready
              </h3>
              <p className="text-lg text-amber-800 mb-2">
                The Diabetic Retinopathy dataset is currently being prepared and
                is not yet available for download.
              </p>
              <p className="text-base text-amber-700">
                Please check back later. We apologize for any inconvenience.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid - COMMENTED OUT - Dataset not ready */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FileImage className="text-blue-600" />}
            label="Total Images"
            value="286"
          />
          <StatCard
            icon={<ScanLine className="text-emerald-600" />}
            label="Image Size"
            value="6MB avg"
          />
          <StatCard
            icon={<Users className="text-purple-600" />}
            label="Demographic"
            value="35-65 years"
          />
          <StatCard
            icon={<Database className="text-orange-600" />}
            label="Source"
            value="Public Study"
          />
        </div> */}

        {/* Dataset details section - COMMENTED OUT - Dataset not ready
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Dataset Specification
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  <SpecItem
                    label="Total Volume"
                    value="286 Images (143 M & 143 F)"
                  />
                  <SpecItem label="File Format" value="*.png" />
                  <SpecItem label="Image Size" value="6MB average" />
                  <SpecItem
                    label="Color Space"
                    value="Orange, Yellow, Red, Pink, White"
                  />
                  <SpecItem label="Capture Method" value="Fundus Photo" />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Labels & Metadata
                </h3>
              </div>
              <div className="p-6 space-y-8">
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Tag className="h-6 w-6 text-indigo-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wide mb-2">
                        DR Severity Labels
                      </h4>
                      <ul className="space-y-3 text-sm text-indigo-900">
                        <li>
                          <span className="font-bold">0 = No DR:</span> Normal
                          retina with no lesions.
                        </li>
                        <li>
                          <span className="font-bold">1 = Mild:</span> Presence
                          of microaneurysms.
                        </li>
                        <li>
                          <span className="font-bold">2 = Moderate:</span>{" "}
                          Microaneurysms, hemorrhages, and limited exudates.
                        </li>
                        <li>
                          <span className="font-bold">3 = Severe:</span>{" "}
                          Numerous hemorrhages, venous beading, IRMA.
                        </li>
                        <li>
                          <span className="font-bold">
                            4 = Proliferative DR:
                          </span>{" "}
                          Neovascularization, fibrous tissue proliferation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="overflow-hidden border border-slate-200 rounded-lg">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                          >
                            Field Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                          >
                            Description/Values
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        <MetadataRow
                          field="Image Id*"
                          desc="Unique identification for the image"
                        />
                        <MetadataRow field="Gender*" desc="Male / Female" />
                        <MetadataRow field="Age*" desc="35-65 years" />
                        <MetadataRow
                          field="Laterality*"
                          desc="Both eye - Right and Left"
                        />
                        <MetadataRow
                          field="Image Quality"
                          desc="Good / Usable / Poor"
                        />
                        <MetadataRow
                          field="Camera Device ID"
                          desc="1008, 1010, 1011, 1012"
                        />
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    * indicates mandatory metadata
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2"></div>

          {/* Right Column: Split & Info */}
          <div className="space-y-8">
            {/* Privacy & Compliance */}
            {/* <section className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden text-white">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <ShieldCheck className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-lg font-bold">Data Privacy</h3>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  All patient data has been anonymized. Personal identifiers
                  have been removed in compliance with medical data standards.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>No PII (Personally Identifiable Info)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>Anonymized Patient Data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>Secure Clinical Source</span>
                  </li>
                </ul>
              </div>
            </section> */}

            {/* Data Split Strategy */}
            {/* <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Train/Test Split
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  For this Hackathon, only the <strong>training dataset</strong>{" "}
                  is provided, having fully labeled images.
                </p>
              </div>
            </section> */}

            {/* Source Information */}
            {/* <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Source of Dataset
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-sm text-slate-600">
                  <div>
                    <span className="font-semibold">Study Type:</span> Public
                    Funded Algorithm development study
                  </div>
                  <div>
                    <span className="font-semibold">Settings:</span> Hospital
                  </div>
                  <div>
                    <span className="font-semibold">
                      Clinical Investigators:
                    </span>{" "}
                    Will be provided as requested
                  </div>
                </div>
              </div>
            </section> */}

            {/* Data Preprocessing & Utilities */}
            {/* <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Data Preprocessing & Utilities
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We are providing a preprocessing script which serves as a
                  robust template for preparing your data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      Convert photos in a folder to required dimensions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>Store metadata in a CSV file automatically</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      Merge existing data with processed data for a final CSV
                      ready for upload on the Federated Learning platform
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <p className="text-xs text-amber-800 mb-2">
                    <span className="font-semibold">Note:</span> The script is a
                    template and will require modifications from the user to fit
                    specific folder structures or data formats.
                  </p>
                  <a
                    href="https://colab.research.google.com/drive/1_QwOS-uh4hTAe7VAFeU5wjVSu-AQxbzH?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                  >
                    View Preprocessing Script in Google Colab
                    <ArrowLeft className="ml-1 w-3 h-3 rotate-180" />
                  </a>
                </div>
              </div>
            </section> */}

            {/* Important: Bring Your Own Dataset */}
            {/* <section className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200 p-6 sticky top-6">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>{" "}
                    Important: Bring Your Own Dataset
                  </h3>
                  <p className="text-sm text-red-800 leading-relaxed mb-3">
                    <strong>
                      You must prepare your own diabetic retinopathy dataset
                    </strong>{" "}
                    in the exact format specified above to test and train your
                    model on our federated learning platform.
                  </p>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Helper Components ---

interface StatCardProps {
  icon: ReactElement;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">
      {label}
    </p>
  </div>
);

interface SpecItemProps {
  label: string;
  value: string;
}

const SpecItem = ({ label, value }: SpecItemProps) => (
  <div className="flex flex-col">
    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
      {label}
    </span>
    <span className="text-base font-medium text-slate-900">{value}</span>
  </div>
);

interface MetadataRowProps {
  field: string;
  desc: string;
}

const MetadataRow = ({ field, desc }: MetadataRowProps) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
      {field}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
      {desc}
    </td>
  </tr>
);

export default DiabeticRetinopathy;
