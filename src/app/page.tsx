import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";
import { SparklesBackground } from "@/components/ui/sparkles-bg";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import mercariLogo from "@/images/logos/mercari.svg";
import portraitImage from "@/images/portrait.jpg";

export default function Home() {
  return (
    <>
      <SparklesBackground />
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 max-w-6xl relative z-10">
        
        <FadeInStagger speed={0.1} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[140px] md:auto-rows-[180px]">
          
          {/* Main Hero Bento Box */}
          <FadeInStaggerItem className="md:col-span-4 lg:col-span-4 row-span-2 group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/10 hover:border-primary/30 transition-colors relative flex flex-col justify-end p-8 md:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors duration-1000 group-hover:bg-primary/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                Hey, I'm Bijaya.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                A software engineer, maker, and technical leader focused on building world-class aesthetic digital experiences.
              </p>
            </div>
          </FadeInStaggerItem>

          {/* Portrait Box */}
          <FadeInStaggerItem className="md:col-span-4 lg:col-span-2 row-span-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-white/10 group shadow-2xl">
            <Image 
              src={portraitImage} 
              alt="Bijaya Prasad Kuikel" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="h-5 w-5 text-primary" /> Tokyo, JP
              </div>
            </div>
          </FadeInStaggerItem>

          {/* Work Box */}
          <FadeInStaggerItem className="md:col-span-4 lg:col-span-3 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-white/5 dark:bg-black/20 border border-white/10 hover:border-primary/30 backdrop-blur-3xl p-8 flex items-center justify-between group shadow-xl">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-white border border-border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                 <Image src={mercariLogo} alt="Mercari" unoptimized className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Software Engineer</h3>
                <p className="text-muted-foreground font-medium">Building at Mercari</p>
              </div>
            </div>
            <div className="hidden sm:block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
              2022 — Var
            </div>
          </FadeInStaggerItem>

          {/* Social / Contact Boxes */}
          <FadeInStaggerItem className="md:col-span-2 lg:col-span-1 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 backdrop-blur-3xl flex items-center justify-center group hover:bg-[#1DA1F2]/20 transition-all cursor-pointer shadow-xl relative overflow-hidden">
            <Link href="https://twitter.com/sadhakbj" target="_blank" className="absolute inset-0 flex items-center justify-center">
              <FaTwitter className="h-12 w-12 text-[#1DA1F2] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
            </Link>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="md:col-span-2 lg:col-span-1 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-foreground/5 border border-white/10 backdrop-blur-3xl flex items-center justify-center group hover:bg-foreground/10 transition-all cursor-pointer shadow-xl relative overflow-hidden">
            <Link href="https://github.com/sadhakbj" target="_blank" className="absolute inset-0 flex items-center justify-center">
              <FaGithub className="h-12 w-12 text-foreground group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
            </Link>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="md:col-span-2 lg:col-span-1 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-[#0077B5]/10 border border-[#0077B5]/20 backdrop-blur-3xl flex items-center justify-center group hover:bg-[#0077B5]/20 transition-all cursor-pointer shadow-xl relative overflow-hidden">
            <Link href="https://linkedin.com/in/sadhakbj" target="_blank" className="absolute inset-0 flex items-center justify-center">
              <FaLinkedin className="h-12 w-12 text-[#0077B5] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
            </Link>
          </FadeInStaggerItem>

          {/* Navigational Bento Boxes */}
          <FadeInStaggerItem className="md:col-span-2 lg:col-span-3 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-3xl p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative text-foreground shadow-2xl">
             <Link href="/projects" className="absolute inset-0 flex items-center justify-between px-8 md:px-10">
               <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
               <div className="h-14 w-14 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-background transition-colors group-hover:scale-110 shadow-lg">
                 <ArrowRight className="h-6 w-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
               </div>
             </Link>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="md:col-span-4 lg:col-span-3 row-span-1 rounded-[2rem] md:rounded-[3rem] bg-white/5 dark:bg-black/20 border border-white/10 hover:border-primary/20 backdrop-blur-3xl p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-2xl">
             <Link href="/articles" className="absolute inset-0 flex items-center justify-between px-8 md:px-10">
               <div>
                 <div className="text-primary font-bold text-sm tracking-widest uppercase mb-1">Writing</div>
                 <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
               </div>
               <div className="h-14 w-14 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-background transition-colors group-hover:scale-110 shadow-lg">
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-500" />
               </div>
             </Link>
          </FadeInStaggerItem>

        </FadeInStagger>

      </div>
    </>
  );
}
