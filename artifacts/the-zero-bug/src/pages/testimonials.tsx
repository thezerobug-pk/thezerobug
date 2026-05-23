import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "200+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "150+", label: "Happy Clients", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Award },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Meridian Labs",
    initials: "SC",
    gradient: "from-blue-500 to-cyan-500",
    rating: 5,
    quote: "The Zero Bug delivered our entire banking platform 3 weeks ahead of schedule with zero critical bugs in production. I've worked with five other agencies. None of them come close. The engineering rigor is unlike anything I've seen.",
    result: "47% performance improvement",
    projectType: "FinTech Platform",
  },
  {
    name: "Marcus Hoffmann",
    role: "CEO",
    company: "NovaPay",
    initials: "MH",
    gradient: "from-rose-500 to-pink-500",
    rating: 5,
    quote: "We hired The Zero Bug to rescue a project that two other agencies had failed to deliver. They came in, assessed the codebase in 48 hours, gave us a clear plan, and shipped in 6 weeks. Absolute lifesavers.",
    result: "2M+ app downloads",
    projectType: "Mobile Wallet App",
  },
  {
    name: "Priya Sharma",
    role: "Head of Product",
    company: "CloudForge",
    initials: "PS",
    gradient: "from-teal-500 to-emerald-500",
    rating: 5,
    quote: "They modernized our entire infrastructure from a monolithic Rails app to a microservices architecture without a single hour of downtime. The technical leadership was exceptional. They felt like our own team.",
    result: "99.99% uptime achieved",
    projectType: "DevOps Platform",
  },
  {
    name: "James Ofosu",
    role: "Founder",
    company: "Apex Retail",
    initials: "JO",
    gradient: "from-orange-500 to-amber-500",
    rating: 5,
    quote: "Our Shopify store couldn't handle our flash sales. We were losing $50k/hour during peak traffic. The Zero Bug rebuilt our storefront in 8 weeks. Last Black Friday was our smoothest ever — $2.1M in 24 hours, zero crashes.",
    result: "64% conversion improvement",
    projectType: "E-commerce Platform",
  },
  {
    name: "Dr. Elena Park",
    role: "CTO",
    company: "HealthCore Systems",
    initials: "EP",
    gradient: "from-rose-500 to-pink-500",
    rating: 5,
    quote: "Building a HIPAA-compliant telehealth platform is enormously complex. The Zero Bug navigated every compliance requirement while still shipping a product our patients and doctors love. Outstanding work.",
    result: "92% patient satisfaction",
    projectType: "Healthcare Platform",
  },
  {
    name: "Tomás Rivera",
    role: "VP Engineering",
    company: "DataStream",
    initials: "TR",
    gradient: "from-indigo-500 to-violet-500",
    rating: 5,
    quote: "The AI analytics platform they built processes 50 million events per day and surfaces insights our data team would have taken weeks to find manually. The LangChain work they did is genuinely impressive.",
    result: "70% analyst time saved",
    projectType: "AI Analytics",
  },
];

const logos = ["Meridian Labs", "NovaPay", "CloudForge", "Apex Systems", "HealthCore", "DataStream", "FutureTech", "NexGen"];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <MessageSquare className="h-4 w-4" />
            Client Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            What Our Clients <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Actually Say</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real reviews from real clients. No PR polish, no cherry-picking — just honest feedback from people who trusted us with their products.</p>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="text-center p-6 rounded-2xl bg-secondary/40 border border-border">
                <s.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <div className="text-4xl font-black text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Auto Carousel */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <Quote className="h-12 w-12 text-white/20 mx-auto mb-6" />
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed italic mb-8">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold`}>
                {testimonials[current].initials}
              </div>
              <div className="text-left">
                <p className="font-bold text-white">{testimonials[current].name}</p>
                <p className="text-white/60 text-sm">{testimonials[current].role}, {testimonials[current].company}</p>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-testid={`carousel-dot-${i}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black">All Client Reviews</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array(t.rating).fill(0).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">{t.projectType}</span>
                  </div>
                  <Quote className="h-6 w-6 text-primary/20 mb-3" />
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">"{t.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {t.result}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Companies that trust The Zero Bug</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((logo) => (
              <div key={logo} className="px-6 py-3 bg-white dark:bg-slate-900 rounded-full border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-cyan-600">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-white/80 mb-8">Join 150+ companies that ship exceptional software with The Zero Bug.</p>
          <Link href="/contact">
            <button data-testid="button-testimonials-cta" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all">
              Start Your Project
            </button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
