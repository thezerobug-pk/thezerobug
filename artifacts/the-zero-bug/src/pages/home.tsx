import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, Smartphone, Layers, Cloud, Brain, Server, ShoppingCart, Code,
  CheckCircle, Star, ChevronRight, TrendingUp, Users, Award, Zap
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const services = [
  { icon: Globe, title: "Web Development", desc: "Blazing-fast web apps built with modern frameworks that scale to millions.", color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps that delight users on every device.", color: "from-rose-500 to-pink-500" },
  { icon: Layers, title: "UI/UX Design", desc: "Human-centered design that converts visitors into loyal customers.", color: "from-orange-500 to-amber-500" },
  { icon: Cloud, title: "SaaS Products", desc: "End-to-end SaaS platforms built to scale and monetize.", color: "from-teal-500 to-emerald-500" },
  { icon: Brain, title: "AI Solutions", desc: "Intelligent systems powered by the latest in machine learning and LLMs.", color: "from-blue-500 to-sky-600" },
  { icon: Server, title: "Cloud & DevOps", desc: "Infrastructure that never sleeps — resilient, automated, and cost-efficient.", color: "from-cyan-500 to-blue-500" },
  { icon: ShoppingCart, title: "E-commerce", desc: "High-converting online stores engineered to sell more, automatically.", color: "from-rose-500 to-pink-500" },
  { icon: Code, title: "Custom Software", desc: "Bespoke solutions built precisely to your business requirements.", color: "from-amber-500 to-orange-500" },
];

const stats = [
  { value: "200+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "50+", label: "Expert Engineers", icon: Users },
  { value: "12+", label: "Years Experience", icon: Award },
];

const process = [
  { step: "01", title: "Discovery", desc: "Deep dive into your goals, challenges, and technical requirements." },
  { step: "02", title: "Design", desc: "Wireframes, prototypes, and pixel-perfect UI systems." },
  { step: "03", title: "Development", desc: "Agile sprints with daily standups and weekly demos." },
  { step: "04", title: "Testing", desc: "Automated tests, QA audits, and performance benchmarking." },
  { step: "05", title: "Launch", desc: "Zero-downtime deployment with monitoring and alerting." },
  { step: "06", title: "Scale", desc: "Continuous improvement, feature releases, and growth support." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Meridian Labs", text: "The Zero Bug delivered our platform 3 weeks ahead of schedule with zero critical bugs. Their engineering rigor is unmatched.", rating: 5 },
  { name: "Marcus Hoffmann", role: "CEO, NovaPay", text: "We've worked with 6 agencies. None come close to the quality and communication level of The Zero Bug team.", rating: 5 },
  { name: "Priya Sharma", role: "Head of Product, CloudForge", text: "They transformed our outdated monolith into a modern microservices architecture seamlessly. Incredible work.", rating: 5 },
];

const blogs = [
  { cat: "Engineering", title: "Why We Switched to React Server Components in Production", time: "6 min read", date: "May 12, 2026", excerpt: "A deep dive into our migration journey and the performance wins we achieved." },
  { cat: "AI", title: "Building Production-Grade LLM Applications in 2026", time: "9 min read", date: "Apr 28, 2026", excerpt: "Lessons learned from deploying AI systems for Fortune 500 clients." },
  { cat: "DevOps", title: "Zero-Downtime Deployments with Kubernetes and GitOps", time: "7 min read", date: "Apr 15, 2026", excerpt: "Our battle-tested approach to shipping features without user impact." },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter",
  "AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"
];

const trustedBy = ["Meridian Labs", "NovaPay", "CloudForge", "Apex Systems", "DataStream", "FutureTech", "NexGen", "Vortex AI"];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
        <FloatingOrbs />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/30 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <Zap className="h-4 w-4" />
              200+ Projects Delivered
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.05]"
            >
              Building Digital
              <br />
              Products With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Zero Bugs.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              We architect bulletproof software that scales, performs, and delights — powered by elite engineers who ship on time, every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <button data-testid="button-start-project" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button data-testid="button-view-portfolio" className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 rounded-full hover:border-primary/40 hover:bg-secondary transition-all hover:-translate-y-0.5">
                  View Portfolio
                  <ChevronRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["SC", "MH", "PS", "AK"].map((initials, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">Rated 4.9/5 by 150+ clients</p>
              </div>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-md border border-white/60 shadow-2xl shadow-blue-500/10 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 h-7 bg-secondary rounded-lg mx-4 text-xs flex items-center px-3 text-muted-foreground">dashboard.thezerobug.com</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Projects Live", value: "47", trend: "+12%", color: "bg-blue-50 text-blue-700" },
                  { label: "Deploy Success", value: "99.9%", trend: "+0.2%", color: "bg-emerald-50 text-emerald-700" },
                  { label: "Bugs Fixed", value: "2.4k", trend: "↑ this month", color: "bg-blue-50 text-blue-700" },
                ].map((stat, i) => (
                  <div key={i} className={`${stat.color} rounded-2xl p-3`}>
                    <p className="text-xs font-medium opacity-70">{stat.label}</p>
                    <p className="text-xl font-black mt-1">{stat.value}</p>
                    <p className="text-xs mt-0.5 opacity-60">{stat.trend}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-secondary/60 p-4 mb-3">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Deployment Activity</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.05, ease: "easeOut" }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-cyan-400 opacity-80"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Frontend Deploy", status: "Completed", dot: "bg-emerald-500" },
                  { name: "API Gateway", status: "Running", dot: "bg-blue-500 animate-pulse" },
                  { name: "DB Migration", status: "Queued", dot: "bg-amber-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-white/80">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.dot}`}></div>
                      <span className="text-xs font-medium text-foreground">{item.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-border p-3 flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-xs font-semibold">Zero critical bugs</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-border p-3 flex items-center gap-2"
            >
              <Zap className="h-5 w-5 text-amber-500" />
              <span className="text-xs font-semibold">Shipped 3 weeks early</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBy.map((name) => (
              <div key={name} className="px-5 py-2.5 bg-white dark:bg-slate-900 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">What We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Build</span></h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From zero to production-ready. We cover every layer of the modern software stack.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(99,102,241,0.12)" }}
                  transition={{ duration: 0.2 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-border p-6 cursor-pointer h-full"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-4`}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Numbers That Define Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <s.icon className="h-8 w-8 text-white/60 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-black text-white">{s.value}</div>
                  <div className="text-white/70 mt-1 text-sm font-medium">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">How We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Deliver</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">A battle-tested process refined across 200+ projects.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/20">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black">Technologies We Master</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech} delay={i * 0.04}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-secondary rounded-full text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border hover:border-primary/30 cursor-default"
                >
                  {tech}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">What Clients <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Say</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-foreground/80 leading-relaxed flex-1 text-sm italic">"{t.text}"</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black">Latest Insights</h2>
            <Link href="/blog">
              <button className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="h-4 w-4" /></button>
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{b.cat}</span>
                      <span className="text-xs text-muted-foreground">{b.time}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{b.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{b.date}</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Read more <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to build something great?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Let's turn your vision into a product your users love. Schedule a free strategy call today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button data-testid="button-cta-contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5">
                Start a Project
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white/80 hover:bg-white/10 transition-all">
                View Our Work
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
