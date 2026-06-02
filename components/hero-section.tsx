"use client";

import { ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Summer Sale — Up to 40% Off</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Discover Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                You&apos;ll Love
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Curated collections across electronics, fashion, home, sports, and beauty — all with free shipping on orders over $50.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#products">
                <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white gap-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white bg-white/10 hover:bg-white/20">
                  View All Deals
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-slate-400 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">&#10003;</span> Free Shipping $50+
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">&#10003;</span> 30-Day Returns
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">&#10003;</span> Secure Checkout
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0876.jpg?width=2048&quality=60&crop=2048:1365&auto=webp"
                  alt="Headphones"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-800">
                <img
                  src="https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500"
                  alt="Watch"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-800">
                <img
                  src="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/64/best-lightweight-running-shoes-001-22300149-main.jpg"
                  alt="Shoes"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg"
                  alt="Coffee Set"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
