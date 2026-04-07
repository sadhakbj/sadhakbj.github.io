"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { path: "/projects", label: "Projects" },
  { path: "/speaking", label: "Speaking" },
  { path: "/articles", label: "Blog" },
  { path: "/uses", label: "Uses" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="flex h-12 md:h-14 items-center px-4 md:px-6 rounded-full border border-border/40 bg-background/50 dark:bg-black/40 backdrop-blur-2xl shadow-xl shadow-black/5 pointer-events-auto gap-4 md:gap-8 transition-colors">
          <Link href="/" className="flex items-center group">
            <div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
              <span className="font-bold text-background text-xs">B</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
              return (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-all rounded-full hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="header-active-tab" 
                      className="absolute inset-0 bg-foreground/5 dark:bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 pl-2 md:pl-0 border-l border-border/40 md:border-none">
            <ThemeToggle />
            <button 
              className="md:hidden flex items-center justify-center h-8 w-8 rounded-full hover:bg-foreground/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-24 z-40 bg-background/90 dark:bg-black/90 backdrop-blur-3xl border border-border/40 rounded-[2rem] p-4 shadow-2xl flex flex-col md:hidden overflow-hidden"
          >
            {navItems.map((item, idx) => {
              const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.path}
                >
                  <Link 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-foreground text-lg py-3 px-6 rounded-xl transition-colors",
                      isActive ? "bg-foreground/5 font-semibold" : "hover:bg-foreground/5 font-medium text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
