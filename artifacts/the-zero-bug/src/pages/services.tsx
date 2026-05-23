import { Link } from "wouter";
import { motion } from "framer-motion";
import { Globe, Smartphone, Layers, Cloud, Brain, Server, ShoppingCart, Code, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "We build fast, scalable, and beautiful web applications that handle millions of users without breaking a sweat.",
    features: ["React & Next.js Applications", "Full-Stack Node.js APIs", "GraphQL & REST Services", "Performance Optimization", "PWA Development"],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-quality mobile apps for iOS and Android that users actually love to open.",
    features: ["React Native Cross-Platform", "Flutter Apps", "Native iOS & Android", "Offline-First Architecture", "App Store Optimization"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "Human-centered design that converts browsers into buyers and first-time users into power users.",
    features: ["User Research & Testing", "Interactive Prototyping", "Design Systems", "Brand Identity", "Accessibility (WCAG 2.2)"],
    tech: ["Figma", "Adobe XD", "Framer", "Storybook", "Lottie"],
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-orange-100",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "End-to-end SaaS platforms engineered to scale, retain customers, and grow ARR on autopilot.",
    features: ["Multi-Tenant Architecture", "Subscription Billing (Stripe)", "Admin Dashboards", "Usage Analytics", "Webhook Systems"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    color: "from-teal-500 to-emerald-500",
    bg: "from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-teal-100 dark:border-slate-700",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Intelligent systems that learn, adapt, and automate — from LLM integrations to custom ML models.",
    features: ["LLM Integration (GPT, Claude)", "RAG Pipelines", "Computer Vision Systems", "NLP & Text Analytics", "AI-powered Workflows"],
    tech: ["Python", "LangChain", "OpenAI", "Hugging Face", "Pinecone", "PyTorch"],
    color: "from-blue-500 to-sky-600",
    bg: "from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-indigo-100",
  },
  {
    icon: Server,
    title: "Cloud Engineering",
    desc: "Cloud-native infrastructure designed for resilience, security, and cost efficiency at any scale.",
    features: ["Multi-Cloud Architecture", "Serverless & Microservices", "Database Scaling", "Security & Compliance", "Cost Optimization"],
    tech: ["AWS", "GCP", "Azure", "Terraform", "Pulumi", "CloudFormation"],
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-cyan-100",
  },
  {
    icon: Code,
    title: "DevOps",
    desc: "Zero-downtime deployments, automated pipelines, and rock-solid monitoring so your team ships with confidence.",
    features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Alerting", "Site Reliability Engineering"],
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Datadog", "Prometheus", "ArgoCD"],
    color: "from-slate-600 to-slate-800",
    bg: "from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-slate-200",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "High-converting online stores built to sell more, handle peak traffic, and scale globally.",
    features: ["Custom Storefront Development", "Shopify & WooCommerce", "Payment Gateway Integration", "Inventory Management", "Analytics & A/B Testing"],
    tech: ["Shopify", "Next.js Commerce", "Stripe", "Algolia", "Contentful"],
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-rose-100",
  },
];

const process = [
  { num: "01", title: "Requirements Analysis", desc: "We map every user story, edge case, and technical constraint before writing a single line of code." },
  { num: "02", title: "Architecture Design", desc: "Senior architects design the system for your 5-year scale, not just today's MVP." },
  { num: "03", title: "Agile Development", desc: "Two-week sprints, daily standups, and weekly client demos. No surprises." },
  { num: "04", title: "Quality Assurance", desc: "Automated testing, code reviews, and manual QA on every feature before it ships." },
  { num: "05", title: "Launch & Beyond", desc: "Zero-downtime deployments, post-launch monitoring, and continuous improvement." },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Code className="h-4 w-4" />
            What We Do
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Full-Stack Services <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Built to Last</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From pixel-perfect interfaces to bulletproof backends — we cover every layer of the modern software stack with elite engineering talent.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(99,102,241,0.08)" }}
                className={`bg-gradient-to-br ${s.bg} rounded-3xl border ${s.border} p-8 transition-all`}
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${s.color} mb-4`}>
                      <s.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <Link href="/contact">
                      <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all cursor-pointer">
                        Start a Project <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">What's Included</p>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span key={t} className="bg-white/70 text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-white/80 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black">Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Engineering Process</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.08}>
                <div className="text-center p-5">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                    {p.num}
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/80 mb-8">Schedule a free 30-minute technical consultation. We'll assess your needs and recommend the right approach.</p>
          <Link href="/contact">
            <button data-testid="button-services-cta" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg">
              Book a Free Consultation
            </button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
