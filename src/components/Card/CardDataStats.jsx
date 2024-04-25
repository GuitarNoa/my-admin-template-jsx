import React from "react";

const CardDataStats = ({ title, total, rate, icon }) => {
  return (
    <div className="rounded-md bg-white py-8 px-8">
      <div class="rounded-lg bg-black h-12 w-12 items-center justify-center">
        <div className=" h-120 w-120 text-white py-2 px-2">{icon}</div>
      </div>
      <div className="mt-5">
        <h4 className="text-sm font-medium">{total}</h4>
        <h4 className="text-sm font-medium">{title}</h4>
      </div>
    </div>
  );
};

export default CardDataStats;
