"use client";

import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { services } from "../../static-data/services.data";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Services built around outcomes.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Tell us your goals, we'll tell you how we can build it together.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative h-full bg-card border border-border/60 rounded-3xl p-8 transition-all hover:border-primary/50 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-8 pt-4 border-t border-border/50">
                    <Link href="#contact" className="text-sm font-medium text-primary flex items-center gap-2 hover:underline">
                      Learn more <Icons.ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
