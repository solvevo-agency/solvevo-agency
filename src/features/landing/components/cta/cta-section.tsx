"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card dark:bg-[#0A1612] text-card-foreground dark:text-white rounded-[2rem] p-12 md:p-20 text-center border border-border/10 shadow-2xl overflow-hidden relative"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-50" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Let's build something your users rely on.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Join the dozens of companies that trust us to deliver exceptional software solutions.
            </p>
            
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-10 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              )}
            >
              Start project
            </Link>
          </div>
          
          {/* Subtle watermark */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-foreground/[0.02] dark:text-white/[0.02] pointer-events-none select-none leading-none z-0">
            OK
          </div>
        </motion.div>
      </div>
    </section>
  );
}
