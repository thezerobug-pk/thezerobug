import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState } from "react";

const categories = ["All", "Web", "Mobile", "SaaS", "AI", "E-commerce"];

const projects = [
  {
    title: "Meridian Banking Platform",
    client: "Meridian Labs",
    category: "SaaS",
    desc: "Full-stack fintech platform serving 200k+ users with real-time payment processing and fraud detection.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    stat: "47% faster transaction processing",
    gradient: "from-blue-500 to-cyan-600",
    result: "3.2M processed monthly",
  },
  {
    title: "NovaPay Mobile Wallet",
    client: "NovaPay",
    category: "Mobile",
    desc: "Cross-platform mobile payment app with biometric authentication and instant transfers.",
    tech: ["React Native", "Node.js", "Stripe", "Firebase"],
    stat: "2M+ downloads in 6 months",
    gradient: "from-rose-500 to-pink-600",
    result: "4.8★ App Store rating",
  },
  {
    title: "CloudForge DevOps Suite",
    client: "CloudForge",
    category: "Web",
    desc: "Enterprise DevOps platform for multi-cloud deployment orchestration and monitoring.",
    tech: ["React", "Go", "Kubernetes", "Prometheus"],
    stat: "99.99% uptime achieved",
    gradient: "from-slate-600 to-slate-800",
    result: "80% incident reduction",
  },
  {
    title: "LuxStore E-commerce",
    client: "Apex Retail",
    category: "E-commerce",
    desc: "Headless commerce platform for a luxury fashion brand handling 50k concurrent shoppers on sale days.",
    tech: ["Next.js", "Shopify", "Algolia", "Stripe"],
    stat: "64% conversion improvement",
    gradient: "from-amber-500 to-orange-600",
    result: "$12M revenue in first quarter",
  },
  {
    title: "HealthCore Patient Portal",
    client: "HealthCore Systems",
    category: "Web",
    desc: "HIPAA-compliant telehealth platform connecting 50k patients with 2k+ healthcare providers.",
    tech: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    stat: "92% patient satisfaction",
    gradient: "from-rose-500 to-pink-600",
    result: "50k monthly active patients",
  },
  {
    title: "AInsight Analytics AI",
    client: "DataStream",
    category: "AI",
    desc: "AI-powered business intelligence platform with natural language querying and predictive forecasting.",
    tech: ["Python", "LangChain", "React", "ClickHouse"],
    stat: "10x faster insights",
    gradient: "from-blue-500 to-sky-600",
    result: "70% analyst time saved",
  },
  {
    title: "LogiTrack Supply Chain",
    client: "Apex Systems",
    category: "SaaS",
    desc: "Real-time supply chain visibility platform tracking 500k+ shipments daily across 40 countries.",
    tech: ["React", "Node.js", "Kafka", "MongoDB"],
    stat: "31% logistics cost reduction",
    gradient: "from-teal-500 to-emerald-600",
    result: "500k daily shipments tracked",
  },
  {
    title: "FutureFit Fitness App",
    client: "FutureTech",
    category: "Mobile",
    desc: "AI-powered fitness coaching app with personalized workout plans and real-time form correction.",
    tech: ["Flutter", "Python", "TensorFlow", "Firebase"],
    stat: "89% user retention at 90 days",
    gradient: "from-cyan-500 to-blue-600",
    result: "500k active subscribers",
  },
  {
    title: "NexLearn Education Platform",
    client: "NexGen",
    category: "Web",
    desc: "Enterprise learning management system for Fortune 500 companies with interactive video courses.",
    tech: ["Next.js", "Node.js", "FFmpeg", "AWS"],
    stat: "40% faster employee onboarding",
    gradient: "from-violet-500 to-indigo-600",
    result: "1M+ course completions",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter(p => active === "All" || p.category === active);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <TrendingUp className="h-4 w-4" />
            Our Work
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            200+ Projects. <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Zero Critical Bugs.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of our most impactful work — startups we helped scale, enterprises we modernized, and products we helped bring to life.
          </p>
        </AnimatedSection>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-border sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`portfolio-filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                  : "bg-secondary text-foreground hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-border overflow-hidden bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer"
                >
                  {/* Gradient Preview */}
                  <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-end p-6`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="relative z-10">
                      <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm mb-2 inline-block">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-black text-white leading-tight">{p.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary mb-2">{p.client}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs bg-secondary text-foreground/70 px-2 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">Key Result</p>
                        <p className="text-xs font-bold text-emerald-600 mt-0.5">{p.result}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-semibold flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {p.stat}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-white/80 mb-8">Let's discuss your idea and see how we can make it a standout case study.</p>
          <Link href="/contact">
            <button data-testid="button-portfolio-cta" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 mx-auto">
              Start a Project <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
