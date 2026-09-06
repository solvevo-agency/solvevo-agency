"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  category?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function PageHeader({ category, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {category && <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
          {category}
        </span>}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
