import { Link } from "react-router";
import { Clock, Star } from "lucide-react";
import { merchants } from "../data/merchants";

export default function FoodCard({ id, name, price, image, short, merchantId }) {
  const merchant = merchants.find(m => m.merchantId === merchantId);
  const formatPrice = (p) => `XAF ${p.toLocaleString()}`;

  return (
    <Link 
      to={`/merchantstore/item/${id}`}
      className="group block"
      aria-label={`View ${name} - ${formatPrice(price)}`}
    >
      <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
            {name}
          </h2>
          
          {merchant && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="truncate">{merchant.name}</span>
              <span className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-warning text-warning" aria-hidden="true" />
                <span>{merchant.rating}</span>
              </span>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {short}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-foreground">{formatPrice(price)}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>25-35 min</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
