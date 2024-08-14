const Chart = () => {
  return (
    <div className="pb-5 border-b border-neutral-cream mb-5">
      <h2 className="text-2xl font-bold text-neutral-darkBrown mb-10">Spending - Last 7 days</h2>
      <div className="chart flex gap-3 items-end">
        <article>
          <div className="bar h-11"></div>
          <span className="label">mon</span>
        </article>
        <article>
          <div className="bar h-14"></div>
          <span className="label">tue</span>
        </article>
        <article>
          <div className="bar h-20"></div>
          <span className="label">wed</span>
        </article>
        <article>
          <div className="bar h-24"></div>
          <span className="label">thu</span>
        </article>
        <article>
          <div className="bar h-16"></div>
          <span className="label">fri</span>
        </article>
        <article>
          <div className="bar h-28"></div>
          <span className="label">sat</span>
        </article>
        <article>
          <div className="bar h-5"></div>
          <span className="label">sun</span>
        </article>
      </div>
    </div>
  );
};

export default Chart;
