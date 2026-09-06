"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    date: "Day 1-3",
    description: "We dive deep to understand your goals, target audience, and the technical requirements of your product."
  },
  {
    id: 2,
    title: "Design & Prototype",
    date: "Week 1-2",
    description: "Our UX/UI experts create wireframes and high-fidelity prototypes to visualize the final product."
  },
  {
    id: 3,
    title: "Build",
    date: "Week 2-6",
    description: "We write clean, scalable code. You get weekly updates and access to a staging environment."
  },
  {
    id: 4,
    title: "Launch",
    date: "Week 6",
    description: "Thorough testing, optimization, and finally, deploying your product to production."
  },
  {
    id: 5,
    title: "Scale & Support",
    date: "Ongoing",
    description: "We don't just hand over the code. We offer maintenance and scaling solutions as you grow."
  }
];

export function ProcessSection() {
  return (
    <section className="relative py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            A clear path from idea to production.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We have a refined process that guarantees delivery on time and on budget.
          </motion.p>
        </div>

        {/* Vertical Stepper */}
        <div className="relative mt-12">
          {/* Main vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border/80 md:left-[50%] md:-ml-px" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 md:left-1/2 mt-1.5 md:mt-0 ring-4 ring-background" />

                  {/* Content Container */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-primary">{step.date}</span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other half on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
           <button className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2.5 rounded-full font-medium transition-colors">
              Book a consultation
           </button>
        </div>
      </div>
    </section>
  );
}
