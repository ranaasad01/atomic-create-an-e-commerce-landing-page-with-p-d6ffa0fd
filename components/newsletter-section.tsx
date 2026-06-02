"use client";

import { useState } from "react";
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
          Get Exclusive Deals First
        </h2>
        <p className="text-indigo-200 text-lg mb-8">
          Join 50,000+ shoppers and be the first to know about new arrivals, flash sales, and members-only discounts.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-2xl px-8 py-6 inline-block">
            <p className="text-white font-semibold text-lg">
              &#10003; You&apos;re on the list! Check your inbox for a welcome gift.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-0 text-slate-900 placeholder:text-slate-400 h-12"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold gap-2 shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        )}

        <p className="text-indigo-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
