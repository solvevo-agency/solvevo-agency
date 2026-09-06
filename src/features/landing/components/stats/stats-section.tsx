"use client";

import { motion } from "motion/react";
import { stats } from "../../static-data/stats.data";

export function StatsSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-background">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <div className="w-8 h-[2px] bg-primary/20 my-3 rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
