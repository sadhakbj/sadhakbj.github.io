"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { path: "/projects", label: "Projects" },
  { path: "/speaking", label: "Speaking" },
  { path: "/articles", label: "Blog" },
  { path: "/uses", label: "Uses" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="flex h-12 md:h-14 items-center px-4 md:px-6 rounded-full border border-border/40 bg-background/50 dark:bg-black/40 backdrop-blur-2xl shadow-xl shadow-black/5 pointer-events-auto gap-4 md:gap-8">
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

        <div className="flex items-center pl-2 md:pl-0 border-l border-border/40 md:border-none">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
