import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CardDataeCommerce from "../../components/Card/CardDataeCommerce";
import {
  ChartBarSquareIcon,
  ShoppingCartIcon,
  TagIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import CharteCommerce from "../../components/Charts/CharteCommerce";
import CharteCommercetwo from "../../components/Charts/CharteCommercetwo";

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-4 gap-4">
        <CardDataeCommerce
          icon={<ChartBarSquareIcon />}
          title="Total Sales"
          value="$999k"
          rare="33%"
        />
        <CardDataeCommerce
          icon={<ShoppingCartIcon />}
          title="Total Order"
          value="999"
          rare="33%"
        />
        <CardDataeCommerce
          icon={<TagIcon />}
          title="Product Sold"
          value="999"
          rare="33%"
        />
        <CardDataeCommerce
          icon={<UserPlusIcon />}
          title="New Customer"
          value="999"
          rare="33%"
        />
        {/* <div className="rounded-md w-156 h-180 bg-cyan-100 col-span-2 py-2 px-2">
          <CharteCommerce />
        </div> */}
        <div className="rounded-md w-156 h-180 bg-cyan-100 col-span-4 py-2 px-2">
          <CharteCommercetwo />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
