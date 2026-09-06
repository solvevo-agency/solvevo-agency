"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, Briefcase, ChevronDown, ArrowRight, Ban } from "lucide-react";

export type Job = {
  id: string;
  title: string;
  location: string;
  time: string;
  type: string;
  isOpen: boolean;
  description: string;
};

export function JobCard({ job }: { job: Job }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-border/60 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {job.title}
            </h3>
            {!job.isOpen && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold tracking-widest uppercase border border-orange-500/20">
                <Ban className="w-3 h-3" />
                Applications Closed
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {job.time}
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              {job.type}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 self-start md:self-center shrink-0">
          <div 
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border border-transparent ${
              job.isOpen 
                ? "bg-[#1E3A2F] text-white hover:bg-[#152B22] shadow-sm" 
                : "bg-secondary text-muted-foreground opacity-50 cursor-not-allowed"
            }`}
          >
            Apply now
            <ArrowRight className="w-4 h-4" />
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/40"
          >
            <div className="p-6 lg:p-8 text-muted-foreground text-sm leading-relaxed max-w-3xl">
              {job.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
