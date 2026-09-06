"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ROTATING_WORDS = [
  "Web App",
  "Mobile App",
  "Claude service",
  "Distributed System"
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
      )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="section-padding-x section-padding-y grid items-center gap-12 lg:grid-cols-2 overflow-hidden max-w-7xl mx-auto"
    >
      {/* Left side: content */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="hero-title text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground leading-[1.1]">
          We ship and build<br />
          <span className="text-primary inline-flex relative h-[1.1em] overflow-hidden align-top">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block whitespace-nowrap"
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="hero-desc text-lg text-muted-foreground mt-2">
          Solvevo is a premium development agency. We craft cutting-edge Next.js
          sites, mobile apps, and custom solutions with clean architecture and
          gorgeous designs.
        </p>
        <div className="hero-cta flex flex-wrap gap-4 mt-4">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] rounded-full px-8",
            )}
          >
            Start project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right side: image */}
      <div className="hero-image relative flex justify-center items-center h-full w-full min-h-[400px]">
        <div className="relative w-full h-full max-w-lg mx-auto">
          {/* Soft blue glow behind the new illustration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-400/30 to-indigo-400/20 rounded-full blur-[100px] -z-10" />
          
          <Image
            src="/images/hero-illustration.svg"
            alt="Solvevo Hero Illustration"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
