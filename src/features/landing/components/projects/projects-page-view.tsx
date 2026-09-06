"use client";

import { motion } from "motion/react";
import { projects } from "../../static-data/projects.data";
import { ProjectCard } from "./project-card";

import { PageHeader } from "@/components/shared/page-header";

export function ProjectsPageView() {
  return (
    <div className="py-24 lg:py-32 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Page Header */}
        <PageHeader
          title="Our Work"
          description="A selection of products, platforms, websites, and digital experiences we've designed and built."
        />

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
