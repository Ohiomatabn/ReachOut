function Statistics() {
  return (
    <section className="pb-4">
      <div className="container">
        <h2>Statistics</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="sta-card">
            <div className="font-bold text-4xl pb-2 text-blue-700">22</div>
            Total Reports
          </div>
          <div className="sta-card">
            <div className="font-bold text-4xl pb-2 text-blue-700">12</div>
            Resolved Issues
          </div>
          <div className="sta-card">
            <div className="font-bold text-4xl pb-2 text-blue-700">10</div>
            Unresolved Issues
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
