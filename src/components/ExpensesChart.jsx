import Balance from "./Balance";
import WeekSpending from "./WeekSpending";

const ExpensesChart = () => {
  return (
    <section className="w-full mobile:w-96 flex flex-col gap-y-5">
      <Balance />
      <WeekSpending />
    </section>
  );
};

export default ExpensesChart;
