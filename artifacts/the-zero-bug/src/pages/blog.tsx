import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, BookOpen, Rss } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState } from "react";

const categories = ["All", "Engineering", "AI", "DevOps", "Design", "Product"];

const featured = {
  cat: "Engineering",
  title: "The Architecture Decisions That Let Us Scale to 10M Users Without Rewriting",
  excerpt: "Most startups hit a scaling wall and have to nuke their codebase. We didn't. Here's every architectural decision we made in year one that quietly saved us three years later.",
  author: "Alex Reynolds",
  authorRole: "CEO & Co-Founder",
  date: "May 20, 2026",
  readTime: "14 min read",
  gradient: "from-blue-600 to-cyan-500",
};

const articles = [
  { cat: "AI", title: "Building Production-Grade LLM Applications in 2026", excerpt: "Lessons learned from deploying AI systems for Fortune 500 clients — including the parts nobody talks about.", author: "Sara El-Amin", date: "May 12, 2026", time: "9 min", gradient: "from-blue-500 to-sky-600" },
  { cat: "DevOps", title: "Zero-Downtime Deployments with Kubernetes and GitOps", excerpt: "Our battle-tested approach to shipping features without user impact, even at 3am on a Friday.", author: "Tomás Vega", date: "Apr 28, 2026", time: "7 min", gradient: "from-slate-600 to-slate-800" },
  { cat: "Design", title: "Why Your UI/UX Process Is Costing You More Than You Think", excerpt: "Design debt is real, compounding, and invisible. Here's how we quantify it and fix it before it becomes a crisis.", author: "James Okonkwo", date: "Apr 15, 2026", time: "6 min", gradient: "from-orange-500 to-amber-500" },
  { cat: "Engineering", title: "TypeScript in 2026: What We Actually Use in Production", excerpt: "Not a tutorial. A real-world breakdown of the TypeScript features that make our codebases maintainable at scale.", author: "Nadia Kovacs", date: "Apr 2, 2026", time: "8 min", gradient: "from-blue-500 to-cyan-500" },
  { cat: "Product", title: "How to Run a Discovery Workshop That Actually Discovers Things", excerpt: "Most discovery workshops are just expensive meetings. Here's how we run them to extract real insights in 4 hours.", author: "Alex Reynolds", date: "Mar 22, 2026", time: "11 min", gradient: "from-rose-500 to-pink-500" },
  { cat: "AI", title: "Evaluating LLMs for Production: A Framework That Actually Works", excerpt: "Vibes-based LLM evaluation will get you burned in production. Here's a systematic approach that catches regressions before your users do.", author: "Sara El-Amin", date: "Mar 10, 2026", time: "12 min", gradient: "from-blue-500 to-sky-600" },
];

const trending = [
  "The Architecture Decisions That Let Us Scale to 10M Users",
  "Building Production-Grade LLM Applications in 2026",
  "Zero-Downtime Deployments with GitOps",
];

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  const filtered = articles.filter(a => {
    const matchCat = activeCat === "All" || a.cat === activeCat;
    const matchSearch = !searchVal || a.title.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <FloatingOrbs />
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <BookOpen className="h-4 w-4" />
            The Zero Bug Blog
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Engineering <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Insights</span> <br />From the Trenches
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Real lessons from 200+ projects. No fluff, no hot takes — just hard-won engineering wisdom.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              data-testid="input-blog-search"
              type="search"
              placeholder="Search articles..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm shadow-sm"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Featured */}
      <section className="py-16 bg-white dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-3xl overflow-hidden border border-border bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${featured.gradient} p-12 md:p-16 flex flex-col justify-end min-h-[280px]`}>
                <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-4 self-start">
                  Featured — {featured.cat}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white max-w-3xl leading-snug">{featured.title}</h2>
              </div>
              <div className="p-8 flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4 max-w-2xl leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                        AR
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-xs">{featured.author}</p>
                        <p className="text-muted-foreground text-xs">{featured.authorRole}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-xs">{featured.date}</span>
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="h-3.5 w-3.5" />{featured.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`blog-cat-${cat.toLowerCase()}`}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCat === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "bg-white text-foreground hover:text-primary border border-border"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer"
                >
                  <div className={`h-2 bg-gradient-to-r ${a.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{a.cat}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{a.time}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${a.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                          {a.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{a.author}</p>
                          <p className="text-xs text-muted-foreground">{a.date}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
