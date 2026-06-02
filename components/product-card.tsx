"use client";

import { ShoppingCart, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Product } from "@/lib/mock-products";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const buttonClass = added
    ? "w-full gap-2 bg-emerald-500 hover:bg-emerald-500 text-white"
    : "w-full gap-2 bg-indigo-600 hover:bg-indigo-700 text-white";

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden bg-slate-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge === "sale" && (
            <Badge variant="sale">
              {discount ? "-" + discount + "%" : "Sale"}
            </Badge>
          )}
          {product.badge === "featured" && (
            <Badge variant="featured">Featured</Badge>
          )}
          {product.badge === "new" && (
            <Badge variant="new">New</Badge>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-xs text-indigo-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i < Math.floor(product.rating);
              const half = !filled && i < product.rating;
              return (
                <Star
                  key={i}
                  className={
                    filled
                      ? "w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      : half
                      ? "w-3.5 h-3.5 text-amber-400 fill-amber-200"
                      : "w-3.5 h-3.5 text-slate-300 fill-slate-100"
                  }
                />
              );
            })}
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button onClick={handleAddToCart} className={buttonClass} size="sm">
          <ShoppingCart className="w-4 h-4" />
          {added ? "Added!" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
