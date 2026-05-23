import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Briefcase } from "lucide-react";

export default function Careers() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Briefcase className="h-4 w-4" />
            Careers
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are looking for exceptional talent to join our growing team of 20+ remote employees. Help us build software with zero critical bugs.
          </p>
        </AnimatedSection>
      </section>
      
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Open Positions</h2>
          <p className="text-muted-foreground mb-8">We have multiple remote positions open. Send your resume to careers@thezerobug.com</p>
        </div>
      </section>
    </div>
  );
}
