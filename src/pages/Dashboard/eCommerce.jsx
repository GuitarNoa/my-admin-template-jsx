import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div class="grid grid-cols-4 gap-4">
        <div className="rounded-md bg-lime-500">1</div>
        <div className="rounded-md bg-lime-500">2</div>
        <div className="rounded-md bg-lime-500">3</div>
        <div className="rounded-md bg-lime-500">4</div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
