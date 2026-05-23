import { Link } from "wouter";
import { motion } from "framer-motion";
import { Rocket, Building2, Bot, CreditCard, HeartPulse, BarChart3, Users, LayoutDashboard, ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const solutions = [
  {
    icon: Rocket,
    title: "Startup Solutions",
    desc: "Go from idea to MVP in weeks, not months. We help startups move fast and build on a foundation that scales.",
    features: ["Rapid MVP Development", "Lean Architecture", "Investor-Ready Tech Stack", "Scalable from Day One"],
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    desc: "Complex, mission-critical systems that meet enterprise security, compliance, and scale requirements.",
    features: ["Legacy System Modernization", "Microservices Migration", "Enterprise Security (SOC2)", "24/7 SLA Support"],
    color: "from-slate-600 to-slate-800",
    bg: "from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-slate-200",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Replace repetitive workflows with intelligent systems. Save thousands of hours per year.",
    features: ["Document Processing AI", "Intelligent Routing", "Predictive Analytics", "LLM-Powered Workflows"],
    color: "from-blue-500 to-sky-600",
    bg: "from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-blue-100 dark:border-slate-700",
  },
  {
    icon: CreditCard,
    title: "FinTech Systems",
    desc: "Secure, compliant financial platforms built for regulatory scrutiny and high transaction volumes.",
    features: ["PCI-DSS Compliance", "Real-Time Payment Processing", "Fraud Detection", "Multi-Currency Support"],
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-emerald-100",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Platforms",
    desc: "HIPAA-compliant digital health solutions that improve patient outcomes and streamline clinical workflows.",
    features: ["HIPAA Compliance", "EHR Integration (HL7/FHIR)", "Telemedicine Platforms", "Patient Portals"],
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-rose-100",
  },
  {
    icon: BarChart3,
    title: "ERP Systems",
    desc: "Custom enterprise resource planning systems that unify your operations, finance, and supply chain.",
    features: ["Custom ERP Development", "SAP/Oracle Integration", "Supply Chain Management", "Real-Time Reporting"],
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-amber-100",
  },
  {
    icon: Users,
    title: "CRM Solutions",
    desc: "Customer relationship management platforms that turn data into revenue and conversations into deals.",
    features: ["Custom CRM Development", "Salesforce Integration", "Lead Scoring & Routing", "Pipeline Analytics"],
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-cyan-100",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    desc: "Real-time data visualization platforms that give your team the insights they need, when they need them.",
    features: ["Real-Time Data Streaming", "Custom Chart Libraries", "Role-Based Access Control", "Export & Reporting"],
    color: "from-blue-500 to-sky-600",
    bg: "from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-900",
    border: "border-indigo-100",
  },
];

const workflow = [
  { num: "01", title: "Discovery Workshop", desc: "We map your industry constraints, user needs, and technical landscape." },
  { num: "02", title: "Solution Architecture", desc: "Our architects design a system spec tailored to your exact requirements." },
  { num: "03", title: "Phased Delivery", desc: "Modular delivery in phases so you see value from day one." },
  { num: "04", title: "Integration & Testing", desc: "Rigorous testing against your real data and workflows." },
  { num: "05", title: "Deployment & Support", desc: "Zero-downtime go-live with ongoing SLA-backed support." },
];

const industries = ["FinTech", "Healthcare", "E-commerce", "SaaS", "Logistics", "Real Estate", "EdTech", "Media"];

export default function Solutions() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Building2 className="h-4 w-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Enterprise-Grade Solutions <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">For Every Industry</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just write code — we solve complex business problems. Our industry-specific solutions are built on deep domain expertise and engineering excellence.
          </p>
        </AnimatedSection>
      </section>

      {/* Industries */}
      <section className="py-10 bg-white dark:bg-slate-900 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span key={ind} className="px-5 py-2 rounded-full bg-secondary text-sm font-medium text-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-pointer">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* Solutions Bento Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(99,102,241,0.1)" }}
                  className={`bg-gradient-to-br ${s.bg} rounded-3xl border ${s.border} p-6 h-full flex flex-col transition-all`}
                >
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${s.color} mb-4 self-start`}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-foreground text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{s.desc}</p>
                  <ul className="space-y-1.5 mt-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-white/60">
                    <Link href="/contact">
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                        Explore Solution <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black">How We Deliver <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Solutions</span></h2>
            <p className="mt-4 text-muted-foreground">A structured approach that minimizes risk and maximizes value delivery.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflow.map((w, i) => (
              <AnimatedSection key={w.num} delay={i * 0.08}>
                <div className="relative text-center p-5">
                  {i < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-gradient-to-r from-primary/40 to-accent/40" />
                  )}
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center mb-4 shadow-lg z-10 relative">
                    {w.num}
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-2">{w.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Have a Complex Problem to Solve?</h2>
          <p className="text-white/80 mb-8">Our solution architects love challenges. Tell us what you're building and we'll show you how we'd approach it.</p>
          <Link href="/contact">
            <button data-testid="button-solutions-cta" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all">
              Talk to an Architect
            </button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
