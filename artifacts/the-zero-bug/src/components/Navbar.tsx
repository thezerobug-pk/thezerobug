import { Link } from "wouter";
import { Bug, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/40 px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="p-1.5 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 group-hover:from-primary/30 group-hover:to-cyan-400/30 transition-colors">
            <Bug className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-base tracking-tight bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
            The Zero Bug
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-foreground/70 dark:text-slate-300/80 hover:text-primary transition-colors px-2.5 py-1.5 rounded-lg hover:bg-secondary dark:hover:bg-slate-800 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            data-testid="button-dark-mode"
            onClick={toggleDark}
            className="p-2 rounded-xl text-foreground/60 dark:text-slate-400 hover:text-foreground dark:hover:text-white hover:bg-secondary dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link href="/contact" className="hidden lg:block">
            <Button className="bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90 transition-opacity rounded-full px-5 h-9 text-sm shadow-md shadow-primary/20">
              Start a Project
            </Button>
          </Link>

          <button
            className="lg:hidden p-2 rounded-xl text-foreground dark:text-slate-300 hover:bg-secondary dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden"
          >
            <div className="p-3 grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/80 dark:text-slate-300 hover:bg-secondary dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="p-3 pt-0 border-t border-border dark:border-slate-700/50 mt-1">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 rounded-xl mt-2">
                  Start a Project
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
