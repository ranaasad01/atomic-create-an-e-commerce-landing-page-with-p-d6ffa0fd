"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "sale" | "featured" | "new" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-indigo-600 text-white",
    sale: "bg-red-500 text-white",
    featured: "bg-amber-400 text-slate-900",
    new: "bg-emerald-500 text-white",
    outline: "border border-slate-300 text-slate-700 bg-transparent",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
