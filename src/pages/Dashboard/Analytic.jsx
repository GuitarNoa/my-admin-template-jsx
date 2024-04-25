import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import ChartA from "../../components/Charts/ChartA";
import CardDataStats from "../../components/Card/CardDataStats";
import ChartB from "../../components/Charts/ChartB";

const Analytic = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid justify-items rounded-md bg-lime-500/80 col-span-2 row-span-2 px-2 py-2 ">
          <ChartA />
        </div>
        <div className="grid justify-items-center rounded-md bg-lime-500 px-4 py-4">
          <ChartB />
        </div>
        <div className="grid justify-items-center rounded-md bg-lime-500 px-4 py-4">
          <ChartB />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Analytic;
