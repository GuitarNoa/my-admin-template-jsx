import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const CardDataeCommerce = ({ icon, title, value }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 rounded-md bg-blue-300 px-2 py-2 gap-2">
      <div className="grid justify-items-center rounded-md bg-black row-span-2">
        {icon}
      </div>
      <div className="grid justify-items-end rounded-md ">{title}</div>
      <div className="grid justify-items-end rounded-md  text-green-500">
        {value}
      </div>
    </div>
  );
};

export default CardDataeCommerce;
