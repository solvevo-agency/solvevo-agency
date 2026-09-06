"use client";
import { motion } from "motion/react";
import { faqs } from "../../static-data/faq.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Everything you're probably wondering.
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <Accordion className="w-full">
            {faqs.slice(0, 6).map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-border/50 py-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <Link href="#contact" className="text-primary font-medium hover:underline">
              Still have questions? Let's talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
