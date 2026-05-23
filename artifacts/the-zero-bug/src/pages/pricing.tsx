import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, X, Zap, Building2, Rocket, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    icon: Rocket,
    desc: "Perfect for early-stage startups and small projects.",
    monthlyPrice: "$2,999",
    yearlyPrice: "$2,399",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    border: "border-blue-200",
    highlight: false,
    features: [
      { text: "2 dedicated engineers", included: true },
      { text: "Up to 40 hours/month", included: true },
      { text: "Web or mobile development", included: true },
      { text: "Weekly progress reports", included: true },
      { text: "Git-based code delivery", included: true },
      { text: "Basic QA testing", included: true },
      { text: "Email support", included: true },
      { text: "Architecture reviews", included: false },
      { text: "Dedicated project manager", included: false },
      { text: "SLA guarantee", included: false },
    ],
    cta: "Start with Starter",
  },
  {
    name: "Professional",
    icon: Zap,
    desc: "The most popular choice for growing companies.",
    monthlyPrice: "$7,999",
    yearlyPrice: "$6,399",
    color: "from-purple-600 to-indigo-600",
    bg: "bg-gradient-to-br from-purple-600 to-indigo-700",
    border: "border-purple-300",
    highlight: true,
    features: [
      { text: "5 dedicated engineers", included: true },
      { text: "Up to 160 hours/month", included: true },
      { text: "Full-stack development", included: true },
      { text: "Daily standups & demos", included: true },
      { text: "Git-based code delivery", included: true },
      { text: "Automated testing suite", included: true },
      { text: "Priority Slack support", included: true },
      { text: "Architecture reviews", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "SLA guarantee", included: false },
    ],
    cta: "Start with Professional",
  },
  {
    name: "Enterprise",
    icon: Building2,
    desc: "Custom solutions for large organizations.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    color: "from-slate-600 to-slate-800",
    bg: "bg-gradient-to-br from-slate-50 to-gray-100",
    border: "border-slate-200",
    highlight: false,
    features: [
      { text: "10+ dedicated engineers", included: true },
      { text: "Unlimited hours", included: true },
      { text: "Full-stack + AI + DevOps", included: true },
      { text: "24/7 standby support", included: true },
      { text: "Full IP transfer", included: true },
      { text: "Security & compliance audits", included: true },
      { text: "Dedicated Slack workspace", included: true },
      { text: "Architecture reviews", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "99.9% SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
  },
];

const compareRows = [
  { feature: "Engineers", starter: "2", pro: "5", enterprise: "10+" },
  { feature: "Monthly hours", starter: "40", pro: "160", enterprise: "Unlimited" },
  { feature: "Response time", starter: "48h", pro: "4h", enterprise: "1h" },
  { feature: "Code ownership", starter: "Yes", pro: "Yes", enterprise: "Yes" },
  { feature: "NDA included", starter: "Yes", pro: "Yes", enterprise: "Yes" },
  { feature: "Security audits", starter: "No", pro: "No", enterprise: "Yes" },
  { feature: "SLA guarantee", starter: "No", pro: "No", enterprise: "99.9%" },
];

const faqs = [
  { q: "Can I switch plans mid-project?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of the next billing cycle." },
  { q: "What's included in the hourly rate?", a: "Everything — engineering, project management, code reviews, testing, and deployment. No hidden fees." },
  { q: "Do you offer a free trial or discovery call?", a: "We offer a free 30-minute strategy call where we'll assess your project and give you a no-obligation estimate." },
  { q: "What happens if we go over the monthly hours?", a: "We'll notify you before going over. Any overages are billed at our standard hourly rate of $175/hr for Starter and $150/hr for Professional." },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <FloatingOrbs />
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Simple, Transparent <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">No surprise bills. No nickel-and-diming. Just great engineering at a fair price.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full p-1.5 border border-border">
            <button
              data-testid="toggle-monthly"
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              data-testid="toggle-yearly"
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Save 20%</span>
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: tier.highlight ? -4 : -8 }}
                  className={`rounded-3xl border p-7 h-full flex flex-col transition-all relative ${tier.highlight ? `${tier.bg} ${tier.border} shadow-2xl shadow-purple-500/20` : `bg-gradient-to-br ${tier.bg.replace('bg-', '')} ${tier.border}`}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${tier.color} mb-5 self-start`}>
                    <tier.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className={`text-xl font-black mb-1 ${tier.highlight ? 'text-white' : 'text-foreground'}`}>{tier.name}</h3>
                  <p className={`text-sm mb-5 ${tier.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>{tier.desc}</p>

                  <div className="mb-6">
                    <div className={`text-4xl font-black ${tier.highlight ? 'text-white' : 'text-foreground'}`}>
                      {yearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </div>
                    {tier.monthlyPrice !== "Custom" && (
                      <p className={`text-sm mt-1 ${tier.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>per month{yearly ? ", billed annually" : ""}</p>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {tier.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-2.5">
                        {f.included
                          ? <Check className={`h-4 w-4 flex-shrink-0 ${tier.highlight ? 'text-white' : 'text-emerald-500'}`} />
                          : <X className={`h-4 w-4 flex-shrink-0 ${tier.highlight ? 'text-white/30' : 'text-muted-foreground/30'}`} />
                        }
                        <span className={`text-sm ${f.included ? (tier.highlight ? 'text-white' : 'text-foreground') : (tier.highlight ? 'text-white/40' : 'text-muted-foreground/50')}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <button
                      data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                      className={`w-full py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        tier.highlight
                          ? 'bg-white text-purple-700 hover:bg-white/90 shadow-lg'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-md shadow-blue-500/20'
                      }`}
                    >
                      {tier.cta} <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-black">Feature Comparison</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left p-4 font-semibold text-foreground/70">Feature</th>
                    <th className="text-center p-4 font-semibold text-blue-600">Starter</th>
                    <th className="text-center p-4 font-semibold text-purple-600">Professional</th>
                    <th className="text-center p-4 font-semibold text-slate-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border ${i % 2 === 0 ? '' : 'bg-secondary/20'}`}>
                      <td className="p-4 text-foreground font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.pro}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-black text-white mb-2">Need Something Custom?</h2>
                <p className="text-white/60 text-sm">Enterprise plans include dedicated teams, SLA guarantees, and on-site availability. Let's design the right engagement for your organization.</p>
              </div>
              <Link href="/contact">
                <button className="flex-shrink-0 bg-white text-slate-900 font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all flex items-center gap-2">
                  Contact Sales <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-black">Pricing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FAQs</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <button
                    data-testid={`pricing-faq-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
