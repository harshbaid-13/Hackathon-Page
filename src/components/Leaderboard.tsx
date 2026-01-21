import { useState, useEffect } from "react";
import { ArrowLeft, Trophy, Medal, Activity, Eye, Bone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LeaderboardEntry {
  team_name: string;
  problem_type: "DR" | "BAP" | "CD";
  commit: string;
  metric_value: number;
}

type ProblemType = "DR" | "BAP" | "CD";

const BENCHMARKS = {
  DR: {
    metric: "F1 Score",
    value: 0.88,
    sortOrder: "desc",
    label: "Diabetic Retinopathy",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  BAP: {
    metric: "MAE (Years)",
    value: 0.5833333333333333,
    sortOrder: "asc",
    label: "Bone Age Prediction",
    icon: Bone,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  CD: {
    metric: "F1 Score",
    value: 0.85,
    sortOrder: "desc",
    label: "Cataract Detection",
    icon: Activity,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
} as const;

const Leaderboard = () => {
  const navigate = useNavigate();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [activeFilter, setActiveFilter] = useState<ProblemType>("DR");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setIsLoading(true);
        // Use import.meta.env.BASE_URL to handle the configured base path
        const baseUrl = import.meta.env.BASE_URL;
        const response = await fetch(`${baseUrl}leaderboard.json`.replace(/\/+/g, "/"));
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }
        const data = await response.json();
        setLeaderboardData(data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setError("Failed to load leaderboard data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getSortedDataWithBenchmark = () => {
    const filtered = leaderboardData.filter(
      (item) => item.problem_type === activeFilter
    );

    const sortOrder = BENCHMARKS[activeFilter].sortOrder;
    const benchmarkValue = BENCHMARKS[activeFilter].value;

    // Sort entries
    const sortedEntries = filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.metric_value - b.metric_value;
      }
      return b.metric_value - a.metric_value;
    });

    // Find where benchmark should be inserted
    let benchmarkIndex = sortedEntries.length; // default to end
    for (let i = 0; i < sortedEntries.length; i++) {
      if (sortOrder === "asc") {
        // Lower is better - benchmark goes before first entry that's worse (higher)
        if (sortedEntries[i].metric_value > benchmarkValue) {
          benchmarkIndex = i;
          break;
        }
      } else {
        // Higher is better - benchmark goes before first entry that's worse (lower)
        if (sortedEntries[i].metric_value < benchmarkValue) {
          benchmarkIndex = i;
          break;
        }
      }
    }

    return { sortedEntries, benchmarkIndex };
  };

  const { sortedEntries, benchmarkIndex } = getSortedDataWithBenchmark();
  const benchmark = BENCHMARKS[activeFilter];
  const ActiveIcon = benchmark.icon;

  const goBack = () => {
    navigate("/");
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
                <h1 className="text-lg font-bold text-slate-900 leading-tight flex items-center gap-2">
                  <Trophy className="text-amber-500" size={20} />
                  Leaderboard
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {(Object.keys(BENCHMARKS) as ProblemType[]).map((type) => {
            const config = BENCHMARKS[type];
            const Icon = config.icon;
            const isActive = activeFilter === type;
            
            return (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                  }
                `}
              >
                <Icon size={18} />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Leaderboard Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className={`px-8 py-8 border-b border-slate-100 ${benchmark.bgColor}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className={`p-3 bg-white rounded-xl shadow-sm ${benchmark.color}`}>
                <ActiveIcon size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {benchmark.label} Rankings
                </h2>
                <p className="text-slate-600">
                  Metric: <span className="font-semibold">{benchmark.metric}</span>
                  {benchmark.sortOrder === "asc" ? " (Lower is better)" : " (Higher is better)"}
                </p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-12 text-center">
                <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-slate-500">Loading leaderboard...</p>
              </div>
            ) : error ? (
              <div className="p-12 text-center text-red-600">
                <p>{error}</p>
              </div>
            ) : (
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider w-24">Rank</th>
                    <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider">Team Name</th>
                    <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider">Model / Commit</th>
                    <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-right">
                      {benchmark.metric}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Render entries with benchmark at its sorted position */}
                  {sortedEntries.map((entry, index) => {
                    // Calculate actual rank (entries before benchmark don't count benchmark)
                    const rank = index + 1;
                    
                    return (
                      <>
                        {/* Insert Benchmark Row at correct position */}
                        {index === benchmarkIndex && (
                          <tr key="benchmark" className="bg-amber-50/50 hover:bg-amber-50 transition-colors border-l-4 border-l-amber-400">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-amber-600 font-bold">
                                <Medal size={18} />
                                -
                              </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-slate-900">
                              Current Benchmark
                            </td>
                            <td className="px-6 py-4 text-slate-600 italic">
                              Baseline Target
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-slate-900">
                              {benchmark.value.toFixed(4)}
                            </td>
                          </tr>
                        )}
                        
                        {/* Submission Row */}
                        <tr 
                          key={`${entry.team_name}-${entry.commit}-${index}`}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-mono text-slate-500">
                            #{rank}
                          </td>
                          <td className="px-6 py-4 font-medium text-slate-900">
                            {entry.team_name}
                          </td>
                          <td className="px-6 py-4 text-slate-600 font-mono text-xs">
                            {entry.commit}
                          </td>
                          <td className="px-6 py-4 text-right font-mono font-medium text-slate-900">
                            {entry.metric_value.toFixed(4)}
                          </td>
                        </tr>
                      </>
                    );
                  })}

                  {/* If benchmark should be at the end (all entries beat it) */}
                  {benchmarkIndex === sortedEntries.length && (
                    <tr key="benchmark" className="bg-amber-50/50 hover:bg-amber-50 transition-colors border-l-4 border-l-amber-400">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-amber-600 font-bold">
                          <Medal size={18} />
                          -
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-900">
                        Current Benchmark
                      </td>
                      <td className="px-6 py-4 text-slate-600 italic">
                        Baseline Target
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900">
                        {benchmark.value.toFixed(4)}
                      </td>
                    </tr>
                  )}

                  {sortedEntries.length === 0 && (
                    <>
                      <tr key="benchmark-empty" className="bg-amber-50/50 hover:bg-amber-50 transition-colors border-l-4 border-l-amber-400">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-amber-600 font-bold">
                            <Medal size={18} />
                            -
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900">
                          Current Benchmark
                        </td>
                        <td className="px-6 py-4 text-slate-600 italic">
                          Baseline Target
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900">
                          {benchmark.value.toFixed(4)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                          No submissions found for this category yet.
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
