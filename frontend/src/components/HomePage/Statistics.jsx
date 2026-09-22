function Statistics({ summary }) {
  console.log(summary);
  return (
    <section className="pb-4">
      <div className="container">
        <h2>Statistics</h2>
        <div className="flex flex-wrap justify-around items-center gap-4 mb-8">
          <div className="sta-card bg-white">
            <p className="text-sm text-slate-500">Total Reports</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-2">{10}</h3>
          </div>
          <div className="sta-card bg-white">
            <p className="text-sm text-slate-500">Unresolved</p>
            <h3 className="text-3xl font-bold text-red-600 mt-2">{4}</h3>
          </div>
          <div className="sta-card bg-white">
            <p className="text-sm text-slate-500">Resolved</p>
            <h3 className="text-3xl font-bold text-emerald-600 mt-2">{6}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
