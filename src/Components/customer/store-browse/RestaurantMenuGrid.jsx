import {products} from "../../../data/productdata";
import MenuItemCard from "./MenuItemCard";

export default function RestaurantMenuGrid({merchantstore}) {
  return (
    <div className="grid grid-cols-3 w-[95%] m-auto gap-5 pb-30 max-sm:grid-cols-1 max-md:grid-cols-2">
      {products.map( item => (
        <MenuItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          short={item.description}
          merchantId={item.merchantId}
          />
      ))}
    </div>
  );
}
