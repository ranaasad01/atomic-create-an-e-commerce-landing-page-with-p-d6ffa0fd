"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/context/cart-context";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-indigo-600 font-medium uppercase tracking-wide mb-0.5">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-slate-900 mb-3">
          ${product.price.toFixed(2)}
          {product.originalPrice && (
            <span className="ml-2 text-xs text-slate-400 font-normal line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-900">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(product.id)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
