import { useMemo, useState } from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../NavBar";
import Statistics from "../HomePage/Statistics";
import issueData from "../../assets/data";

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
                  <option value="All">All</option>
                  <option value="Adavi">Adavi</option>
                  <option value="Ajaokuta">Ajaokuta</option>
                  <option value="Ankpa">Ankpa</option>
                  <option value="Bassa">Bassa</option>
                  <option value="Dekina">Dekina</option>
                  <option value="Ibaji">Ibaji</option>
                  <option value="Idah">Idah</option>
                  <option value="Igalamela-Odolu">Igalamela-Odolu</option>
                  <option value="Ijumu">Ijumu</option>
                  <option value="Kabba/Bunu">Kabba/Bunu</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Lokoja">Lokoja</option>
                  <option value="Mopa-Muro">Mopa-Muro</option>
                  <option value="Ofu">Ofu</option>
                  <option value="Ogori/Magongo">Ogori/Magongo</option>
                  <option value="Okehi">Okehi</option>
                  <option value="Okene">Okene</option>
                  <option value="Olamaboro">Olamaboro</option>
                  <option value="Omala">Omala</option>
                  <option value="Yagba East">Yagba East</option>
                  <option value="Yagba West">Yagba West</option>
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
            </div>
          </div>

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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboard;
