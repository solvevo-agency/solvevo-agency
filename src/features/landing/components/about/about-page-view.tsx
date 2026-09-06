"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export function AboutPageView() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-24 md:py-32 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            We build like it's our own<br />product.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A senior team of design-minded builders making software that actually helps businesses grow—not stick around to maximize hours.
          </p>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-24 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6 max-w-lg">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Why Solvevo exists
              </h2>
              <div className="text-base text-muted-foreground leading-relaxed flex flex-col gap-4">
                <p>
                  Too many businesses get sold a prototype dressed up as a product—something that looks pretty but crumbles under pressure. We exist to do it right the first time.
                </p>
                <p>
                  We started Solvevo to be the opposite of traditional software agencies: fast, transparent, and focused on actual outcomes. No junior developers learning on your dime.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 justify-center">
              <div className="p-8 rounded-2xl border border-border/40 bg-card hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-bold text-foreground">
                  Build software that helps businesses grow.
                </h3>
              </div>
              <div className="p-8 rounded-2xl border border-border/40 bg-card hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-bold text-foreground">
                  Be the engineering partner founders and CTOs lean on, speed first.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principles Section */}
      <section className="py-24 border-b border-border/40 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              The principles we hire and build by.
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ownership", desc: "We act as if the software is our own. We take pride in the final product." },
              { title: "Craft", desc: "Code is a craft. We believe in high-quality architecture and stunning design." },
              { title: "Honesty", desc: "Radical transparency. If something isn't right, you'll know immediately." },
              { title: "Partnership", desc: "We're not order-takers. We are strategic partners driving your business." }
            ].map((principle, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-border/40 bg-card hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-foreground mb-3">{principle.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Approach Section */}
      <section className="py-24 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-md">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
                Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                How we think about building software.
              </h2>
            </div>
            
            <ul className="flex flex-col gap-6">
              {[
                "Fast, reliable tech stack—we optimize for shipping velocity.",
                "Senior engineers only. The people who scope it, build it.",
                "Ship true MVPs. No features that don't move the needle.",
                "You own everything. No lock-in, no hostage code.",
                "Weekly demos. You always know exactly where the project stands."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500 shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-base text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Founder Note */}
      <section className="py-24 border-b border-border/40 bg-muted/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-40 h-40 md:w-56 md:h-56 bg-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <Image 
                src="/images/solvevo-transparent.png" 
                alt="Solvevo" 
                width={120} 
                height={120} 
                className="object-contain brightness-0 invert drop-shadow-md"
              />
            </div>
            
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Founder Note
              </span>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                "Solvevo was built by engineers who grew tired of watching agencies burn through code. We've shipped complex systems, AI products, and mobile apps across industries—learning that quality is everything. When you work with us, you work directly with the people building your product."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <section className="py-24 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
              Proven Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              The numbers behind the partnership.
            </h2>
            <p className="text-base text-muted-foreground mt-4">
              We're built for long-term relationships—and most of our clients keep working with us long after launch.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/40 text-center">
            {[
              { num: "20+", label: "Apps Shipped" },
              { num: "5+", label: "Years in Business" },
              { num: "<1 day", label: "Avg Reply Time" },
              { num: "4.9", label: "Client Rating" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">{stat.num}</span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
