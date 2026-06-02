"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/lib/mock-products";
import ProductCard from "@/components/product-card";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

type ProductGridProps = {
  searchQuery: string;
};

export default function ProductGrid({ searchQuery }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Products</h2>
          <p className="text-slate-500 mt-1">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "px-4 py-2 rounded-full text-sm font-semibold bg-indigo-600 text-white shadow-sm transition-all"
                : "px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Search className="w-12 h-12 text-slate-300 mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-1">No products found</h3>
          <p className="text-slate-400 text-sm">
            Try adjusting your search or selecting a different category.
          </p>
        </div>
      )}
    </section>
  );
}
