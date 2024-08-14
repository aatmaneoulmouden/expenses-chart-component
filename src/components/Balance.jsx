import logo from "../assets/logo.svg";

const Balance = () => {
  return (
    <div className="flex justify-between items-center bg-primary-softRed p-5 rounded-2xl">
      <div className="text-neutral-veryPaleOrange">
        <p>My balance</p>
        <h1 className="text-3xl font-semibold tracking-[1px] mt-1">$921.48</h1>
      </div>
      <img src={logo} alt="Expenses Chart Component" />
    </div>
  );
};

export default Balance;
