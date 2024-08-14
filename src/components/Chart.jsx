import chartData from "../data/data.json";
import Bar from "./Bar";

const Chart = () => {
  const displayBars = chartData.map((bar, index) => (
    <Bar key={index} {...bar} />
  ));
  return (
    <div className="pb-5 border-b border-neutral-cream mb-5">
      <h2 className="text-2xl font-bold text-neutral-darkBrown mb-10">
        Spending - Last 7 days
      </h2>
      <div className="chart flex gap-3 items-end h-40">
        {displayBars}
      </div>
    </div>
  );
};

export default Chart;
