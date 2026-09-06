"use client";

import { motion } from "motion/react";
import { JobCard, type Job } from "./job-card";

const jobs: Job[] = [
  {
    id: "1",
    title: "Python Web Scraping Developer",
    location: "Remote",
    time: "Internship",
    type: "Internship (Paid)",
    isOpen: true,
    description: "We are looking for a highly motivated Python Web Scraping Developer to join our team. You will be responsible for extracting data from various websites using Python and frameworks like Scrapy or BeautifulSoup. You should have a strong understanding of HTTP protocols, HTML parsing, and data structuring. Experience with handling rate limits, proxies, and CAPTCHAs is a huge plus.",
  },
  {
    id: "2",
    title: "Full-Stack Developer Intern",
    location: "Remote",
    time: "3 Months",
    type: "Internship",
    isOpen: false,
    description: "Join us for a 3-month intensive internship where you will work on production-level Next.js and Node.js applications. You'll be paired with a senior mentor, reviewing code, and shipping features directly to our clients. A strong grasp of React fundamentals and REST APIs is required.",
  },
];

export function CareersPageView() {
  return (
    <div className="bg-background min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> CAREERS
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1] max-w-2xl"
          >
            Build real products with us.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            We're a team of freshers and experienced professionals building software that creates real value. Join us to grow through mentorship, ownership, and leadership. We value the impact of your work - not where you work from - and foster a culture of ethics, accountability, appreciation, and continuous learning.
          </motion.p>
        </div>

        {/* Roles Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> ROLES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            One opening, right now.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            If this sounds like you, we'd love to hear from you.
          </p>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
