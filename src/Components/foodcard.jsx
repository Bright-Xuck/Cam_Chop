import { Link } from "react-router";

export default function FoodCard(props) {
  return (
    <Link to={`/merchantstore/item/${props.id}`}>
      <div className="mb-8">
        <div>
          {
            <img
              src={props.image}
              alt="food"
              className="w-full h-[250px] rounded-3xl"
            />
          }
        </div>
        <div>
          <h1 className="text-xl font-bold">{props.name}</h1>
          <div className="text-neutral-700">
            <h1>{props.price}</h1>
            <h1>{props.short}</h1>
          </div>
          <h1>Delivery fee</h1>
        </div>
      </div>
    </Link>
  );
}
