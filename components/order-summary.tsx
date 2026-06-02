"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export default function OrderSummary() {
  const { subtotal, totalItems, clearCart } = useCart();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-5">Order Summary</h2>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="text-emerald-600 font-medium">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Estimated Tax</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-slate-100 pt-3 flex justify-between">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-bold text-xl text-slate-900">${total.toFixed(2)}</span>
        </div>
      </div>

      {shipping > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-sm text-amber-800 flex items-center gap-2">
          <Truck className="w-4 h-4 shrink-0" />
          Add ${(50 - subtotal).toFixed(2)} more for free shipping!
        </div>
      )}

      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-12 text-base font-semibold mb-3">
        Proceed to Checkout <ArrowRight className="w-4 h-4" />
      </Button>

      <Link href="/">
        <Button variant="outline" className="w-full gap-2 h-10">
          Continue Shopping
        </Button>
      </Link>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        Secure 256-bit SSL encrypted checkout
      </div>

      <button
        onClick={clearCart}
        className="mt-4 w-full text-xs text-slate-400 hover:text-red-500 transition-colors text-center"
      >
        Clear cart
      </button>
    </div>
  );
}
