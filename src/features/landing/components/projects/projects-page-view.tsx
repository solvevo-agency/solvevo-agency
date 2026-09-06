"use client";

import { motion } from "motion/react";
import { projects } from "../../static-data/projects.data";
import { ProjectCard } from "./project-card";

export function ProjectsPageView() {
  return (
    <div className="py-24 lg:py-32 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6 block">
            A selection of projects
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Our Work
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A selection of products, platforms, websites, and digital experiences we've designed and built.
          </p>
        </div>

        {/* Grid Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-xl leading-[1.1]">
            Built to make complex work clearer.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
