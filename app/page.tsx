"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProductGrid from "@/components/product-grid";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <HeroSection />
        <ProductGrid searchQuery={searchQuery} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
