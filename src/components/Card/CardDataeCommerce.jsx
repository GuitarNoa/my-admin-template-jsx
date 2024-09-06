import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const CardDataeCommerce = ({ icon, title, value, rare }) => {
  return (
    <div className="grid rounded-md w-156 h-180 bg-cyan-100 gap-2 py-2 px-2">
      <div className="rounded-full bg-blue-600 w-12 h-12 py-2 px-2 text-white">{icon}</div>
      <div className="font-medium">{title}</div>
      <div className="text-2xl text-green-400">{value}</div>
      <div className="font-thin text-blue-400">{rare}</div>
    </div>
  );
};

export default CardDataeCommerce;
