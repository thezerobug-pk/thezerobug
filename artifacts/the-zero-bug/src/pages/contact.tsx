import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { useState } from "react";

const offices = [
  { city: "San Francisco", address: "548 Market St, Suite 940, San Francisco, CA 94104", flag: "🇺🇸", tz: "PST (UTC-8)" },
  { city: "London", address: "1 Canada Square, Canary Wharf, London E14 5AB", flag: "🇬🇧", tz: "GMT (UTC+0)" },
  { city: "Singapore", address: "1 Raffles Place, One Raffles Place, Singapore 048616", flag: "🇸🇬", tz: "SGT (UTC+8)" },
];

const faqs = [
  { q: "How much does a typical project cost?", a: "Projects vary widely based on scope, but most client engagements start from $50,000 for an MVP and go up from there. We're transparent about estimates from the first call." },
  { q: "How long does it take to start a project?", a: "After our discovery call, we can typically start within 2-3 weeks. For urgent projects, we can often accommodate faster starts." },
  { q: "Do you work with startups or enterprises?", a: "Both. About 60% of our work is with funded startups (Seed to Series C) and 40% is with enterprise clients. We adapt our process to each context." },
  { q: "Do you offer fixed-price or time-and-materials contracts?", a: "We offer both. For well-defined scopes, we can do fixed-price. For evolving products, time-and-materials with a monthly retainer works better." },
  { q: "Who owns the code?", a: "You do. Always. All IP is transferred to the client upon project completion or during the engagement depending on the contract structure." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <FloatingOrbs />
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Extraordinary</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tell us about your project. We'll respond within 24 hours with a plan to get started.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-border p-8 shadow-xl shadow-blue-500/5">
              <h2 className="text-2xl font-black text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name</label>
                    <input
                      data-testid="input-contact-name"
                      type="text"
                      placeholder="Alex Johnson"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address</label>
                    <input
                      data-testid="input-contact-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number</label>
                    <input
                      data-testid="input-contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company</label>
                    <input
                      data-testid="input-contact-company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Service Needed</label>
                  <select
                    data-testid="select-contact-service"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-foreground"
                  >
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>SaaS Development</option>
                    <option>AI Solutions</option>
                    <option>Cloud & DevOps</option>
                    <option>E-commerce Development</option>
                    <option>Custom Software</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Tell Us About Your Project</label>
                  <textarea
                    data-testid="input-contact-message"
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and budget range..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                  />
                </div>
                <motion.button
                  data-testid="button-contact-submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </motion.button>
                <p className="text-xs text-center text-muted-foreground">We respond within 24 hours on business days.</p>
              </form>
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">Email Us</h3>
                </div>
                <a href="mailto:hello@thezerobug.com" className="text-primary hover:underline text-sm">hello@thezerobug.com</a>
                <p className="text-xs text-muted-foreground mt-1">For general inquiries and project discussions</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">Call Us</h3>
                </div>
                <a href="tel:+14155550123" className="text-primary hover:underline text-sm">+1 (415) 555-0123</a>
                <p className="text-xs text-muted-foreground mt-1">Mon–Fri, 9am–6pm PST</p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Our Offices</h3>
                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="bg-white rounded-2xl border border-border p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-xl flex-shrink-0">
                        {o.flag}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{o.city}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{o.address}</p>
                        <p className="text-xs text-primary mt-1">{o.tz}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 h-40 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground/70">Interactive Map</p>
                  <p className="text-xs text-muted-foreground">3 global offices</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black">Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <button
                    data-testid={`faq-toggle-${i}`}
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
