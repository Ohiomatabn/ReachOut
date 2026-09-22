function WhyUse() {
  return (
    <section className="pt-2 pb-4">
      <div className="container">
        <h2>Why Use BrideTech</h2>
        <div className="flex justify-around items-center flex-wrap gap-8">
          <div className="flex justify-center items-center flex-col min-w-40 card">
            <i className="fa-solid fa-landmark text-4xl text-blue-700"></i>
            <span>Direct Government Link</span>
          </div>
          <div className="flex justify-center items-center flex-col min-w-40 card">
            <i className="fa-solid fa-bolt text-4xl text-blue-700"></i>
            <span>Easy Report</span>
          </div>
          <div className="flex justify-center items-center flex-col min-w-40 card">
            <i className="fa-solid fa-chart-line text-4xl text-blue-700"></i>
            <span>Data Driven Insight</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUse;
