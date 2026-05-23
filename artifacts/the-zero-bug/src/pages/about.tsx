import { Link } from "wouter";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Shield, Users, Award, Linkedin, Twitter } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const team = [
  { name: "Alex Reynolds", role: "CEO & Co-Founder", initials: "AR", gradient: "from-blue-500 to-cyan-500", bio: "Ex-Google engineer with 15 years shipping at scale." },
  { name: "Nadia Kovacs", role: "CTO", initials: "NK", gradient: "from-rose-500 to-pink-500", bio: "Distributed systems expert. Led engineering at 3 unicorns." },
  { name: "James Okonkwo", role: "Head of Design", initials: "JO", gradient: "from-amber-500 to-orange-500", bio: "Former Figma designer. Obsessed with pixel-perfect craft." },
  { name: "Lin Wei", role: "VP Engineering", initials: "LW", gradient: "from-teal-500 to-emerald-500", bio: "Built the infrastructure behind 2 billion-dollar platforms." },
  { name: "Sara El-Amin", role: "Head of AI", initials: "SE", gradient: "from-blue-500 to-sky-600", bio: "PhD in ML. Published researcher, now building real AI products." },
  { name: "Tomás Vega", role: "Head of DevOps", initials: "TV", gradient: "from-rose-500 to-pink-500", bio: "Kubernetes wizard. 99.99% uptime is his personal minimum." },
];

const timeline = [
  { year: "2025", event: "Founded", desc: "Started the company in Karachi, Pakistan with 6 computer science students and a bold promise." },
  { year: "2026", event: "Today", desc: "Completed 50+ projects, expanded to a team of 20+ remote employees, and just getting started." },
];

const values = [
  { icon: Shield, title: "Zero Defect Standard", desc: "We don't ship bugs. Every line of code is reviewed, tested, and battle-hardened.", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Velocity Without Compromise", desc: "Speed matters. We deliver fast without cutting corners on quality.", color: "from-amber-500 to-orange-500" },
  { icon: Heart, title: "Client Partnership", desc: "We treat your product like our own. Your success metrics are our metrics.", color: "from-rose-500 to-pink-500" },
  { icon: Users, title: "Radical Transparency", desc: "Daily standups, weekly demos, full code ownership. No black boxes.", color: "from-teal-500 to-emerald-500" },
  { icon: Target, title: "Engineering Excellence", desc: "We hire the top 1% of engineers and invest in their continuous growth.", color: "from-blue-500 to-sky-600" },
  { icon: Award, title: "Long-term Thinking", desc: "We optimize for the 5-year outcome, not just the next sprint.", color: "from-emerald-500 to-teal-500" },
];

const awards = [
  { name: "Clutch Global Leader 2025", cat: "Software Development" },
  { name: "G2 Top Performer 2025", cat: "Custom Software" },
  { name: "ISO 27001 Certified", cat: "Security Standard" },
  { name: "AWS Advanced Partner", cat: "Cloud Infrastructure" },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Users className="h-4 w-4" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            The Agency Built on a <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Bold Promise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In late 2025, we made a promise: deliver software with zero critical bugs. Today, that promise has held through 50+ projects and a growing team of 20+ remote employees.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 h-full"
            >
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-5">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted software engineering partner on the planet — a place where elite engineers solve hard problems and ship products that genuinely change industries. We exist to make ambitious founders and enterprises look brilliant.
              </p>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 h-full"
            >
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 mb-5">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where great software is the norm, not the exception. We're building toward a future where any company — startup or enterprise — can access world-class engineering without compromise.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Meet the <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Team</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">The people behind our zero-defect engineering.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                >
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-xl font-black mb-4 shadow-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Journey</span></h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-400 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.08}>
                  <div className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.event}</span>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xs shadow-lg z-10">
                      {item.year.slice(2)}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">What We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Stand For</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${v.color} mb-4`}>
                    <v.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      {/* <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-black">Awards & Certifications</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.08}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 p-5 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-bold text-sm text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.cat}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Want to Build With Us?</h2>
          <p className="text-white/80 mb-8">We're always looking for exceptional talent and ambitious clients.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/careers">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all">Join the Team</button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white/80 hover:bg-white/10 transition-all">Start a Project</button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
