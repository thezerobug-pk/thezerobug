import { Link } from "wouter";
import { Github, Linkedin, Dribbble, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiBase}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.error || "Failed to subscribe.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setIsSubmitting(false);
  };
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors flex items-center justify-center h-8 w-8">
                <img src="/logo.png" alt="The Zero Bug Logo" className="h-6 w-auto object-contain transition-transform group-hover:scale-105" />
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-black">
                The Zero Bug
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              We architect bulletproof software that scales, performs, and delights. Zero defects by design.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/thezerobug.pk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589831433874" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/thezerobug" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary dark:hover:bg-slate-800">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'SaaS Solutions', 'AI Integration', 'DevOps'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our engineering updates.</p>
            <form className="flex space-x-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="bg-secondary dark:bg-slate-800 text-sm rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-slate-200"
              />
              <button type="submit" disabled={isSubmitting} className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-50">
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
            {message && <p className={`text-xs mt-2 ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>{message}</p>}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Zero Bug Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
