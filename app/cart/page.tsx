"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, Sparkles } from 'lucide-react';
import { useCart } from "@/context/cart-context";
import CartItem from "@/components/cart-item";
import OrderSummary from "@/components/order-summary";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock-products";
import ProductCard from "@/components/product-card";

export default function CartPage() {
  const { items, totalItems } = useCart();

  const suggestedProducts = products
    .filter((p) => !items.some((item) => item.product.id === p.id))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Lumière</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page header */}
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-7 h-7 text-indigo-600" />
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Cart
          </h1>
          {totalItems > 0 && (
            <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full">
              {totalItems} item{totalItems !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm">
              Looks like you haven&apos;t added anything yet. Browse our curated collection and find something you love.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
                Start Shopping <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        ) : (
          /* Cart content */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-base font-semibold text-slate-700 mb-2 pb-4 border-b border-slate-100">
                  Cart Items ({totalItems})
                </h2>
                <div>
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Shipping info */}
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
                  { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
                  { icon: "🔒", title: "Secure Payment", desc: "SSL encrypted checkout" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}

        {/* You may also like */}
        {suggestedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-bold">Lumière</span>
          </Link>
          <p className="text-sm">&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
