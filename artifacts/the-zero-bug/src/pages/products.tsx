import { Link } from "wouter";
import { motion } from "framer-motion";
import { Workflow, Shield, Gauge, BarChart2, ShoppingBag, MessageSquareCode, ArrowRight, Check, Star } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState } from "react";

const categories = ["All", "SaaS", "AI", "E-commerce", "DevOps"];

const products = [
  {
    icon: Workflow,
    name: "ZeroFlow",
    tagline: "Project Management for Engineering Teams",
    desc: "A sleek, opinionated project management platform built specifically for software teams. No bloat, no confusion — just velocity.",
    features: ["Real-time sprint boards", "Automated time tracking", "CI/CD integration", "AI-powered estimates"],
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    price: "$29/mo",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
    category: "SaaS",
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Shield,
    name: "BugShield",
    tagline: "AI-Powered Code Quality & Security",
    desc: "Catch bugs before they reach production. BugShield analyzes your PRs, flags vulnerabilities, and suggests fixes in real time.",
    features: ["PR-level code review AI", "SAST vulnerability scanning", "Dependency audit", "GitHub & GitLab integration"],
    tech: ["Python", "OpenAI", "GitHub API", "Docker"],
    price: "$49/mo",
    color: "from-blue-500 to-sky-600",
    bg: "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
    category: "AI",
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Gauge,
    name: "CloudPilot",
    tagline: "DevOps Automation Dashboard",
    desc: "Unified visibility across your entire cloud infrastructure. Deploy, monitor, rollback, and scale from a single clean interface.",
    features: ["Multi-cloud cost analytics", "One-click rollback", "Incident management", "Kubernetes fleet view"],
    tech: ["React", "Go", "AWS SDK", "Prometheus"],
    price: "$99/mo",
    color: "from-slate-600 to-slate-800",
    bg: "bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-slate-200",
    category: "DevOps",
    badge: null,
    badgeColor: "",
  },
  {
    icon: BarChart2,
    name: "DataPulse",
    tagline: "Real-Time Analytics Platform",
    desc: "Connect any data source, build dashboards in minutes, and share insights with your entire organization without writing SQL.",
    features: ["100+ data connectors", "No-code dashboard builder", "Real-time streaming", "Scheduled reports & alerts"],
    tech: ["React", "Python", "ClickHouse", "Apache Kafka"],
    price: "$79/mo",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-emerald-100",
    category: "SaaS",
    badge: null,
    badgeColor: "",
  },
  {
    icon: ShoppingBag,
    name: "SwiftCart",
    tagline: "E-commerce Platform for Scaling Brands",
    desc: "A headless commerce platform engineered for high conversion, high traffic, and high margins. Built to handle your peak moments.",
    features: ["Headless storefront", "Multi-currency checkout", "AI product recommendations", "Advanced inventory sync"],
    tech: ["Next.js", "Shopify API", "Stripe", "Algolia"],
    price: "$149/mo",
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-amber-100",
    category: "E-commerce",
    badge: null,
    badgeColor: "",
  },
  {
    icon: MessageSquareCode,
    name: "NexBot",
    tagline: "AI Chatbot Platform for Businesses",
    desc: "Deploy intelligent AI chatbots trained on your documentation and data. Deflect 70% of support tickets, automatically.",
    features: ["Custom LLM fine-tuning", "Docs & knowledge base ingestion", "Live chat handoff", "Analytics dashboard"],
    tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
    price: "$59/mo",
    color: "from-rose-500 to-pink-500",
    bg: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-rose-100",
    category: "AI",
    badge: "Hot",
    badgeColor: "bg-rose-100 text-rose-700",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = products.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Star className="h-4 w-4" />
            Our Products
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Software We Built <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">For the World</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond client work, we build our own products. Each one solves a real problem we encountered while building for clients — and we use them ourselves.
          </p>
        </AnimatedSection>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-border sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                  : "bg-secondary text-foreground hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(99,102,241,0.12)" }}
                  className={`${p.bg} rounded-3xl border ${p.border} p-6 h-full flex flex-col transition-all`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${p.color}`}>
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    {p.badge && (
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-foreground">{p.name}</h3>
                  <p className="text-xs font-semibold text-primary mt-0.5 mb-3">{p.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                        <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs bg-white/70 text-foreground/70 px-2.5 py-1 rounded-full border border-white">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="text-lg font-black text-foreground">{p.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href="/contact">
                        <button className={`text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r ${p.color} text-white hover:opacity-90 transition-opacity`}>
                          View Demo
                        </button>
                      </Link>
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
          <h2 className="text-4xl font-black text-white mb-4">Need a Custom Product?</h2>
          <p className="text-white/80 mb-8">We can take an existing product, fork it, customize it, and deploy it for your specific use case.</p>
          <Link href="/contact">
            <button data-testid="button-products-cta" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all">
              Discuss Your Needs
            </button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
