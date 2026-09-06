"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  const pathname = usePathname();

  if (pathname === '/careers') {
    return null;
  }

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

          {/* Brand Logo Watermark */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[800px] h-[800px] opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none z-0 grayscale">
            <Image
              src="/images/solvevo-transparent.png"
              alt="SV"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
