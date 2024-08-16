import { useEffect, useState } from "react";

const Bar = ({ isMax, day, amount }) => {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const barStyles = {
    height: `${amount * 2}px`,
  };

  const filledBarStyles = {
    height: isAnimated ? "0%" : "100%",
    transition: "height .5s linear",
  };

  return (
    <article className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
      <div className="bar w-full rounded-md relative" style={barStyles}>
        <div
          className={`filled-bar w-full rounded-md absolute bottom-0 ${
            isMax
              ? "bg-primary-cyan group-hover:bg-primary-cyan/80"
              : "bg-primary-softRed group-hover:bg-primary-softRed/80"
          }`}
          style={filledBarStyles}
        />
        <div className="text-xs text-neutral-veryPaleOrange font-medium p-2 bg-neutral-darkBrown rounded-md absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block">
          ${amount}
        </div>
      </div>
      <span className="label text-sm text-neutral-mediumBrown">{day}</span>
    </article>
  );
};

export default Bar;
