import { useState, useEffect } from "react";
import { ArrowLeft, Database, Download, User, Mail, FileText, Eye, Bone, Activity, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface Dataset {
  submitter_name: string;
  dataset_type: string;
  description: string;
  email: string;
  file_address: string;
}

const DATASET_TYPES = {
  BAP: {
    label: "Bone Age Prediction",
    icon: Bone,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  CD: {
    label: "Cataract Detection",
    icon: Activity,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  DR: {
    label: "Diabetic Retinopathy",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
  },
} as const;

type DatasetType = keyof typeof DATASET_TYPES;

const UploadedDatasetsPage = () => {
  const navigate = useNavigate();
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<DatasetType | "ALL">("ALL");

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setIsLoading(true);
        const baseUrl = import.meta.env.BASE_URL;
        const response = await fetch(`${baseUrl}datasets.csv`.replace(/\/+/g, "/"));
        if (!response.ok) {
          throw new Error("Failed to fetch datasets");
        }
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setDatasets(parsedData);
      } catch (err) {
        console.error("Error fetching datasets:", err);
        setError("Failed to load datasets. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDatasets();
  }, []);

  const parseCSV = (csvText: string): Dataset[] => {
    const lines = csvText.trim().split("\n");
    if (lines.length < 2) return [];

    const datasets: Dataset[] = [];
    
    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length >= 5) {
        datasets.push({
          submitter_name: values[0],
          dataset_type: values[1],
          description: values[2],
          email: values[3],
          file_address: values[4],
        });
      }
    }
    
    return datasets;
  };

  const parseCSVLine = (line: string): string[] => {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    return values;
  };

  const isExternalUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleDownload = (fileAddress: string) => {
    if (isExternalUrl(fileAddress)) {
      // Open external URL in new tab
      window.open(fileAddress, "_blank", "noopener,noreferrer");
    } else {
      // Construct the download URL for local files
      const baseUrl = import.meta.env.BASE_URL;
      const downloadUrl = `${baseUrl}${fileAddress}`.replace(/\/+/g, "/");
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileAddress.split("/").pop() || "dataset.parquet";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const filteredDatasets = activeFilter === "ALL" 
    ? datasets 
    : datasets.filter(d => d.dataset_type === activeFilter);

  const goBack = () => {
    navigate("/");
  };

  const getDatasetConfig = (type: string) => {
    return DATASET_TYPES[type as DatasetType] || {
      label: type,
      icon: Database,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      badgeColor: "bg-slate-100 text-slate-700",
    };
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30 font-sans">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      {/* Top Navigation Bar */}
      <nav className="z-10 border-b border-slate-200/80 backdrop-blur-sm bg-white/70 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 border border-slate-200"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                  <Database className="text-indigo-600" size={20} />
                  Uploaded Datasets
                </h1>
                <p className="text-xs text-slate-500">
                  Community contributed datasets
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 mb-6 shadow-lg shadow-indigo-500/30">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Community Datasets
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Browse and download datasets contributed by the hackathon community
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            onClick={() => setActiveFilter("ALL")}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 text-sm
              ${
                activeFilter === "ALL"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }
            `}
          >
            <Database size={16} />
            All Datasets
          </button>
          {(Object.keys(DATASET_TYPES) as DatasetType[]).map((type) => {
            const config = DATASET_TYPES[type];
            const Icon = config.icon;
            const isActive = activeFilter === type;
            
            return (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 text-sm
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                  }
                `}
              >
                <Icon size={16} />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Dataset Cards */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-slate-500">Loading datasets...</p>
            </div>
          ) : error ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center text-red-600">
              <p>{error}</p>
            </div>
          ) : filteredDatasets.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
              <Database className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No datasets found for this category.</p>
            </div>
          ) : (
            filteredDatasets.map((dataset, index) => {
              const config = getDatasetConfig(dataset.dataset_type);
              const Icon = config.icon;
              
              return (
                <div
                  key={`${dataset.submitter_name}-${dataset.file_address}-${index}`}
                  className={`bg-white rounded-2xl border ${config.borderColor} shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Icon and Type Badge */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl ${config.bgColor} ${config.color} shrink-0`}>
                          <Icon size={24} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Dataset Type Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badgeColor}`}>
                              {config.label}
                            </span>
                          </div>
                          
                          {/* Description */}
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">
                            {dataset.description}
                          </p>
                          
                          {/* Submitter Info */}
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <User size={14} className="text-slate-400" />
                              <span className="font-medium text-slate-700">{dataset.submitter_name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Mail size={14} className="text-slate-400" />
                              <a 
                                href={`mailto:${dataset.email}`}
                                className="hover:text-indigo-600 transition-colors"
                              >
                                {dataset.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <FileText size={14} className="text-slate-400" />
                              <span className="font-mono text-xs truncate max-w-[200px]">
                                {isExternalUrl(dataset.file_address) 
                                  ? new URL(dataset.file_address).hostname 
                                  : dataset.file_address.split("/").pop()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Download Button */}
                      <div className="lg:ml-4 shrink-0">
                        <Button
                          onClick={() => handleDownload(dataset.file_address)}
                          className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 text-white gap-2"
                        >
                          {isExternalUrl(dataset.file_address) ? (
                            <>
                              <ExternalLink size={16} />
                              Visit Source
                            </>
                          ) : (
                            <>
                              <Download size={16} />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Dataset Count */}
        {!isLoading && !error && filteredDatasets.length > 0 && (
          <div className="mt-8 text-center text-sm text-slate-500">
            Showing {filteredDatasets.length} dataset{filteredDatasets.length !== 1 ? "s" : ""}
            {activeFilter !== "ALL" && ` in ${DATASET_TYPES[activeFilter].label}`}
          </div>
        )}

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={goBack}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default UploadedDatasetsPage;
