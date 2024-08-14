const Summary = () => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-neutral-mediumBrown">Total this month</p>
        <h1 className="text-4xl font-bold tracking-[1px] mt-1 text-neutral-darkBrown">$478.33</h1>
      </div>
      <div className="text-end">
        <h3 className="text-lg font-bold text-neutral-darkBrown">+2.4%</h3>
        <p className="text-neutral-mediumBrown">from last month</p>
      </div>
    </div>
  );
};

export default Summary;
