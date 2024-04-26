import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CardDataeCommerce from "../../components/Card/CardDataeCommerce";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div class="grid grid-cols-4 gap-4">
        <CardDataeCommerce
          icon={<ShoppingBagIcon className="text-white size-16" />}
          title="Total"
          value="999"
        />
        <CardDataeCommerce
          icon={<ShoppingBagIcon className="text-white size-16" />}
          title="Total"
          value="999"
        />
        <CardDataeCommerce
          icon={<ShoppingBagIcon className="text-white size-16" />}
          title="Total"
          value="999"
        />
        <CardDataeCommerce
          icon={<ShoppingBagIcon className="text-white size-16" />}
          title="Total"
          value="999"
        />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
