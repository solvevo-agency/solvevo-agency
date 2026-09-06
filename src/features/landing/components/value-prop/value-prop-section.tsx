"use client";

import { motion } from "motion/react";
import { ArrowRight, Code, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Built for scaling",
    description: "Our architecture ensures your application handles millions of users without breaking a sweat.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Modern tech stack",
    description: "We use Next.js, React, and modern CSS to deliver fast, responsive, and SEO-friendly experiences.",
    icon: <Code className="w-5 h-5 text-primary" />
  },
  {
    title: "Enterprise security",
    description: "Bank-grade security protocols implemented from day one to protect you and your users.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />
  }
];

export function ValuePropSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]"
            >
              Most studios sell you a prototype.<br />
              We hand over a product.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              We don't just stop at pretty designs. We engineer robust, scalable software that drives real business value. Our team handles everything from infrastructure to front-end execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full group"
                )}
              >
                Our services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side Cards */}
          <div className="relative space-y-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
              >
                <div className="mt-1 bg-primary/10 p-2.5 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
