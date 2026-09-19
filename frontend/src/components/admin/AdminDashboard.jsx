import { useMemo, useState } from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../NavBar";
import Statistics from "../HomePage/Statistics";

const issueData = [
  {
    id: 1,
    title: "Collapsed drainage along Lokoja road",
    lga: "Lokoja",
    category: "Roads & Infrastructure",
    status: "Unresolved",
    urgency: "High",
    reporter: "Mary A.",
    date: "2026-09-11",
    location: "Near the old market junction",
    description:
      "Heavy rainfall has left the drainage completely blocked. Flooding is affecting nearby homes and making the road unsafe for commuters.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Broken public water pump",
    lga: "Okene",
    category: "Water Supply",
    status: "Unresolved",
    urgency: "Medium",
    reporter: "Daniel O.",
    date: "2026-09-08",
    location: "Adiko Estate, Okene",
    description:
      "The pump has been non-functional for more than two weeks, limiting access to clean water for residents in the area.",
    image:
      "https://images.unsplash.com/photo-1629227455467-8f2c48e7d1f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Street lights out in residential area",
    lga: "Kabba/Bunu",
    category: "Electricity & Power",
    status: "Resolved",
    urgency: "Low",
    reporter: "Ruth M.",
    date: "2026-09-03",
    location: "Along Unity Drive",
    description:
      "Several street lights have been out for weeks, creating safety concerns for pedestrians and motorists during the night.",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "School roof leaking during rain",
    lga: "Idah",
    category: "Education / Schools",
    status: "Unresolved",
    urgency: "High",
    reporter: "John F.",
    date: "2026-09-12",
    location: "Government Secondary School, Idah",
    description:
      "Persistent rainwater leakage is disrupting lessons and damaging classroom materials for students and teachers.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Overflowing refuse dump near clinic",
    lga: "Olamaboro",
    category: "Sanitation & Waste",
    status: "Resolved",
    urgency: "Medium",
    reporter: "Grace A.",
    date: "2026-09-06",
    location: "Beside the community clinic",
    description:
      "Uncollected waste has overflowed into the walkway, attracting pests and creating an unhealthy environment for patients.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Damaged bridge access road",
    lga: "Yagba West",
    category: "Roads & Infrastructure",
    status: "Resolved",
    urgency: "High",
    reporter: "Tunde S.",
    date: "2026-08-29",
    location: "Aiyegunle bridge corridor",
    description:
      "The damaged bridge segment has been repaired and traffic flow restored after temporary restrictions.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
  },
];

const lgaOptions = [
  "All",
  "Adavi",
  "Ajaokuta",
  "Ankpa",
  "Bassa",
  "Dekina",
  "Ibaji",
  "Idah",
  "Igalamela-Odolu",
  "Ijumu",
  "Kabba/Bunu",
  "Kogi",
  "Lokoja",
  "Mopa-Muro",
  "Ofu",
  "Ogori/Magongo",
  "Okehi",
  "Okene",
  "Olamaboro",
  "Omala",
  "Yagba East",
  "Yagba West",
];

function AdminDashboard() {
  const [issues, setIssues] = useState(issueData);
  const [selectedLga, setSelectedLga] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchesLga = selectedLga === "All" || issue.lga === selectedLga;
      const matchesStatus =
        selectedStatus === "All" || issue.status === selectedStatus;

      return matchesLga && matchesStatus;
    });
  }, [issues, selectedLga, selectedStatus]);

  const summary = useMemo(() => {
    const total = issues.length;
    const unresolved = issues.filter(
      (item) => item.status === "Unresolved",
    ).length;
    const resolved = issues.filter((item) => item.status === "Resolved").length;

    return { total, unresolved, resolved };
  }, [issues]);

  const handleMarkResolved = (id) => {
    setIssues((currentIssues) =>
      currentIssues.map((issue) =>
        issue.id === id ? { ...issue, status: "Resolved" } : issue,
      ),
    );
  };

  const resetFilters = () => {
    setSelectedLga("All");
    setSelectedStatus("All");
  };

  return (
    <>
      <NavBar />
      <section className="py-8 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Admin portal
              </p>
              <h1 className="text-3xl font-bold text-slate-900 mt-1">
                Community Issues Dashboard
              </h1>
            </div>
          </div>

          <Statistics summary={summary} />

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <label
                  htmlFor="lgaFilter"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Filter by Local Govt.
                </label>
                <select
                  id="lgaFilter"
                  value={selectedLga}
                  onChange={(e) => setSelectedLga(e.target.value)}
                  className="w-full min-w-64 px-3 py-2 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {lgaOptions.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="statusFilter"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Filter by Status
                </label>
                <select
                  id="statusFilter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full min-w-56 px-3 py-2 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="All">All</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Unresolved">Unresolved</option>
                </select>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition"
              >
                Reset filters
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.8fr_0.9fr]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Reported Issues
                </h2>
                <span className="text-sm text-slate-500">
                  {filteredIssues.length} issue(s)
                </span>
              </div>

              <div className="space-y-5">
                {filteredIssues.length > 0 ? (
                  filteredIssues.map((issue) => (
                    <article
                      key={issue.id}
                      className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm"
                    >
                      <div className="md:flex">
                        <img
                          src={issue.image}
                          alt={issue.title}
                          className="h-52 w-full object-cover md:w-56 md:h-auto"
                        />
                        <div className="flex-1 p-5">
                          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div>
                              <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold">
                                {issue.category}
                              </p>
                              <h3 className="text-xl font-bold text-slate-900 mt-1">
                                {issue.title}
                              </h3>
                            </div>
                            <span
                              className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                                issue.status === "Resolved"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {issue.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-slate-600">
                            <span className="bg-slate-100 rounded-full px-2 py-1">
                              {issue.lga}
                            </span>
                            <span className="bg-slate-100 rounded-full px-2 py-1">
                              {issue.location}
                            </span>
                            <span className="bg-slate-100 rounded-full px-2 py-1">
                              {issue.date}
                            </span>
                          </div>

                          <p className="mt-4 text-slate-700 leading-relaxed">
                            {issue.description}
                          </p>

                          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                            <div className="text-sm text-slate-600">
                              Reported by{" "}
                              <span className="font-semibold text-slate-800">
                                {issue.reporter}
                              </span>
                            </div>
                            {issue.status === "Unresolved" && (
                              <button
                                type="button"
                                onClick={() => handleMarkResolved(issue.id)}
                                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                              >
                                Mark resolved
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="bg-white rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
                    No issues match the current filters.
                  </div>
                )}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Priority Snapshot
                </h3>
                <div className="mt-5 space-y-4">
                  {[
                    { label: "Roads & Infrastructure", value: 4 },
                    { label: "Water Supply", value: 3 },
                    { label: "Power", value: 2 },
                    { label: "Sanitation", value: 2 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600">{item.label}</span>
                        <span className="font-medium text-slate-800">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-500"
                          style={{ width: `${(item.value / 4) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboard;
