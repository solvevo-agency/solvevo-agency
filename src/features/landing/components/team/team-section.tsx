"use client";

import { motion } from "motion/react";
import Image from "next/image";

const team = [
  {
    name: "Alex",
    role: "CEO",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah",
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Ryan",
    role: "Lead Engineer",
    image: "https://i.pravatar.cc/150?u=ryan"
  },
  {
    name: "Mike",
    role: "PM & QA",
    image: "https://i.pravatar.cc/150?u=mike"
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            The people who build your product.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Solvevo is backed by a trusted team of dedicated professionals.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/60 rounded-3xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
