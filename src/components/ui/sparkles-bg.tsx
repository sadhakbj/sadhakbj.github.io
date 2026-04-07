"use client";

import { motion } from "framer-motion";

export function SparklesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 opacity-50 blur-3xl"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-full h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
      ></motion.div>
      {/* Soft spotlight behind hero */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[100px]" 
      />
    </div>
  );
}
