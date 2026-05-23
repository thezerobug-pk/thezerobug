import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight, Laptop, Heart, GraduationCap, Globe, Coffee, Dumbbell, Users, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const jobs = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote", type: "Full-time", desc: "Build and maintain scalable web applications using React, Node.js, and PostgreSQL. You'll own features end-to-end." },
  { title: "Senior ML Engineer", dept: "AI", location: "Remote / SF", type: "Full-time", desc: "Design and deploy production machine learning systems. Experience with LLMs and RAG pipelines preferred." },
  { title: "Staff Backend Engineer", dept: "Engineering", location: "Remote", type: "Full-time", desc: "Architect high-throughput backend systems. You'll define technical direction for our core platform." },
  { title: "Product Designer (UI/UX)", dept: "Design", location: "Remote / London", type: "Full-time", desc: "Own the design process from research to pixel-perfect specs. You'll work directly with clients and engineers." },
  { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Full-time", desc: "Manage Kubernetes clusters, CI/CD pipelines, and cloud infrastructure across AWS and GCP." },
  { title: "Engineering Manager", dept: "Engineering", location: "Remote / Singapore", type: "Full-time", desc: "Lead a team of 6-8 engineers. You'll drive execution, mentorship, and technical quality." },
];

const benefits = [
  { icon: Laptop, title: "Remote First", desc: "Work from anywhere. We have team members in 18 countries and we optimize for async collaboration.", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, title: "Premium Healthcare", desc: "Full medical, dental, and vision coverage for you and your family, wherever you are in the world.", color: "from-rose-500 to-pink-500" },
  { icon: GraduationCap, title: "$3,000 Learning Budget", desc: "Annual budget for courses, conferences, books, and anything else that makes you a sharper engineer.", color: "from-blue-500 to-sky-600" },
  { icon: Globe, title: "Annual Team Retreat", desc: "Once a year, we fly the entire company to an amazing destination for a week of work and fun.", color: "from-teal-500 to-emerald-500" },
  { icon: Coffee, title: "Home Office Stipend", desc: "$1,500 one-time budget to build the workspace that makes you most productive.", color: "from-amber-500 to-orange-500" },
  { icon: Dumbbell, title: "Wellness Allowance", desc: "$100/mo for gym memberships, sports clubs, therapy, meditation apps — your health, your choice.", color: "from-cyan-500 to-blue-500" },
  { icon: Users, title: "Equity Package", desc: "Competitive equity grants so you own a piece of what we're building together.", color: "from-blue-500 to-sky-600" },
  { icon: Zap, title: "4-Day Work Week", desc: "We pilot a 4-day work week every quarter. When it works, we ship more. The data keeps surprising us.", color: "from-emerald-500 to-teal-500" },
];

const process = [
  { num: "01", title: "Apply Online", desc: "Send us your work. A portfolio or GitHub speaks louder than a resume." },
  { num: "02", title: "Intro Call", desc: "30-minute call with our recruiter. We'll discuss your experience and what you're looking for." },
  { num: "03", title: "Technical Interview", desc: "A focused 90-minute technical session. No leetcode — we simulate real work." },
  { num: "04", title: "Offer & Onboarding", desc: "We move fast. Offer within 5 days. Day-one onboarding that actually works." },
];

const culture = [
  { title: "Ownership Culture", desc: "Engineers own their features end-to-end, from spec to production monitoring.", color: "from-blue-50 to-cyan-50", border: "border-blue-100", icon: Zap },
  { title: "High Standards", desc: "We hire slowly and care deeply about craft. You'll work with people who raise your bar.", color: "from-blue-50 to-sky-50", border: "border-blue-100", icon: Users },
  { title: "Move Fast, Ship Quality", desc: "Speed and quality aren't opposites. We prove that every two-week sprint.", color: "from-amber-50 to-orange-50", border: "border-amber-100", icon: ArrowRight },
  { title: "Radical Transparency", desc: "We share company financials, strategy, and decisions openly with every team member.", color: "from-rose-50 to-pink-50", border: "border-rose-100", icon: Globe },
];

export default function Careers() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Briefcase className="h-4 w-4" />
            Join the Team
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Work With the <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Best Engineers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're building a team of world-class engineers, designers, and product thinkers. If you obsess over quality and love shipping, you'll fit right in.
          </p>
        </AnimatedSection>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black">How We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Work</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {culture.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${c.color} rounded-2xl border ${c.border} p-6 h-full`}
                >
                  <div className="mb-3">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black">We Take <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Care of You</span></h2>
            <p className="mt-4 text-muted-foreground">Everything you need to do the best work of your career.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl border border-border p-5 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                  <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${b.color} mb-4`}>
                    <b.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black">Open <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Positions</span></h2>
            <p className="mt-4 text-muted-foreground">{jobs.length} roles currently open. All remote-friendly.</p>
          </AnimatedSection>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(99,102,241,0.08)" }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-4 transition-all cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-foreground text-lg">{job.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{job.desc}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button data-testid={`button-apply-${i}`} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 group-hover:shadow-md group-hover:shadow-blue-500/20">
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black">Our Hiring <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Process</span></h2>
            <p className="mt-4 text-muted-foreground">Transparent, fast, and respectful of your time.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-lg flex items-center justify-center mb-4 shadow-lg">
                    {p.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
