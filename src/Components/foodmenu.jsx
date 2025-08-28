import {products} from "../data/productdata";
import FoodCard from "./foodcard";

export default function FoodMenu() {
  return (
    <div className="grid grid-cols-3 w-[95%] m-auto gap-5 pb-30">
      {products.map( item => (
        <FoodCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          short={item.shortDesc}
        />
      ))}
    </div>
  );
}
