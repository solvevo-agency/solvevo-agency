"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types/project.types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full overflow-hidden rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-border/40">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <div>
          {/* Category */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-3">
            {project.category}
          </span>

          {/* Title & Description */}
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-foreground border border-border px-3 py-1 rounded-full bg-background"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors pt-4 border-t border-border/40">
            View project 
            <motion.div
              variants={{
                rest: { x: 0 },
                hover: { x: 5 }
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
