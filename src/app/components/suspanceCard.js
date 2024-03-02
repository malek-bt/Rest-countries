"use client";

import useStore from "../store";

const SuspanceCard = () => {
  const darkMode = useStore((state) => state.dark);
  return (
    <div
      className={`w-[75%] md:w-[350px] mx-auto rounded-lg  ${
        darkMode ? "bg-lightDark" : "bg-white"
      }`}
    >
      <div className="w-[100%] rounded-t-lg h-60"></div>
    </div>
  );
};
export default SuspanceCard;
