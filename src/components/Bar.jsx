const Bar = ({ isMax, day, amount }) => {
  const barStyles = {
    height: `${amount * 2}px`,
  };
  return (
    <article className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
      <div
        className={`bar w-full rounded-md relative ${
          isMax ? "bg-primary-cyan" : "bg-primary-softRed"
        }`}
        style={barStyles}
      >
        <div className="text-xs text-neutral-veryPaleOrange font-medium p-2 bg-neutral-darkBrown rounded-md absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block">
          ${amount}
        </div>
      </div>
      <span className="label text-sm text-neutral-mediumBrown">{day}</span>
    </article>
  );
};

export default Bar;
