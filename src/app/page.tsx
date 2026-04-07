import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";
import portraitImage from "@/images/portrait.jpg";
import { ArrowRight, Braces, Briefcase, Cpu, ExternalLink, GitBranch, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const projects = [
  {
    title: "Planetaria",
    description: "Modernizing civilian space travel interfaces. Built with a deeply optimized Next.js edge architecture and a Rust physics compiler yielding massive performance gains.",
    href: "https://planetaria.tech",
    icon: <Rocket className="h-5 w-5 text-zinc-400" />,
  },
  {
    title: "Animaginary",
    description: "A 120fps WASM-driven web animation library. Replaces standard JS animation frames with low-level memory arrays for hyper-fluid structural shifts.",
    href: "https://github.com/sadhakbj",
    icon: <Braces className="h-5 w-5 text-zinc-400" />,
  }
];

const experience = [
  { company: "Mercari", role: "Software Engineer", duration: "2022 — Present", description: "Architecting zero-latency merchant dashboards and scaling macro-services to handle millions of daily active transactions." },
  { company: "Proshore", role: "Senior Software Developer", duration: "2020 — 2022", description: "Led a squad of 6 engineers migrating a massive legacy monolith into a robust microservice mesh network." },
  { company: "Smartmobe", role: "Software Developer", duration: "2018 — 2020", description: "Built and maintained high-performance native mobile applications and their corresponding RESTful gateways." },
];

function Rocket(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      
      {/* Background Architectural Grid (Visible on both Light/Dark) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(150,150,150,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(150,150,150,0.06)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-20%] z-[-1] mt-0 h-[600px] w-full bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.15),transparent_60%)] blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32">
        
        {/* --- HERO --- */}
        <FadeInStagger speed={0.15} className="flex flex-col items-start gap-8">
          
          <FadeInStaggerItem className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-2">
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl md:rounded-[2rem] overflow-hidden border border-border/60 shadow-[0_0_40px_rgba(var(--primary),0.05)] bg-card flex-shrink-0 group">
              <Image src={portraitImage} fill alt="Bijaya Prasad Kuikel" className="object-cover saturate-0 group-hover:saturate-100 transition-all duration-700" priority />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-muted/30 text-muted-foreground text-xs font-mono font-semibold tracking-tight shadow-sm backdrop-blur-sm self-start sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYS.STATUS = [AVAILABLE]
            </div>
          </FadeInStaggerItem>
          
          <FadeInStaggerItem>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium tracking-tighter leading-[1.05] text-foreground lowercase mt-[-1rem]">
              Bijaya Prasad
            </h1>
          </FadeInStaggerItem>
          
          <FadeInStaggerItem>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              I engineer resilient backend architectures and craft hypersmooth frontend interfaces. Obsessed with <span className="text-foreground font-medium">Rust</span>, <span className="text-foreground font-medium">React</span>, and systems design.
            </p>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="flex flex-wrap gap-4 mt-6">
            <Link href="https://github.com/sadhakbj" target="_blank" className="h-12 inline-flex items-center justify-center px-6 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity shadow-sm">
              <FaGithub className="mr-2 h-4 w-4" /> Explore Repositories
            </Link>
            <Link href="mailto:sadhakbj@gmail.com" className="h-12 inline-flex items-center justify-center px-6 rounded-lg border border-border bg-card/50 hover:bg-muted text-foreground font-medium transition-colors backdrop-blur-sm shadow-sm">
              <Terminal className="mr-2 h-4 w-4 text-muted-foreground" /> Initialise Contact
            </Link>
          </FadeInStaggerItem>
          
          <FadeInStaggerItem className="flex gap-6 mt-4 opacity-60">
             <Link href="https://twitter.com/sadhakbj" target="_blank" className="hover:text-primary hover:opacity-100 transition-all text-sm font-mono flex items-center gap-2 uppercase tracking-widest"><FaTwitter /> Twitter</Link>
             <Link href="https://linkedin.com/in/sadhakbj" target="_blank" className="hover:text-primary hover:opacity-100 transition-all text-sm font-mono flex items-center gap-2 uppercase tracking-widest"><FaLinkedin /> LinkedIn</Link>
          </FadeInStaggerItem>
        </FadeInStagger>

        {/* --- PROJECTS --- */}
        <section className="mt-32 sm:mt-48">
          <FadeIn className="flex items-center gap-4 mb-12">
            <Cpu className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground lowercase">Systems Engineered</h2>
            <div className="h-px flex-1 bg-border/60 ml-4"></div>
          </FadeIn>
          
          <FadeInStagger speed={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <FadeInStaggerItem key={i} className="h-full">
                <Link href={p.href} target="_blank" className="h-full group flex flex-col p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 backdrop-blur-sm transition-all hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {p.description}
                  </p>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="mt-32 sm:mt-48 mb-24">
          <FadeIn className="flex items-center gap-4 mb-16">
            <GitBranch className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground lowercase">Operating History</h2>
            <div className="h-px flex-1 bg-border/60 ml-4"></div>
          </FadeIn>

          <FadeInStagger speed={0.1} className="relative border-l border-border/60 sm:ml-4 space-y-16">
             {experience.map((exp, i) => (
               <FadeInStaggerItem key={i} className="relative pl-8 sm:pl-12 group">
                 <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background ring-4 ring-background group-hover:bg-primary transition-colors"></div>
                 
                 <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                   <h3 className="text-xl font-medium text-foreground">{exp.company}</h3>
                   <span className="text-sm font-mono text-muted-foreground/80 tracking-tight">{exp.duration}</span>
                 </div>
                 
                 <div className="inline-flex items-center gap-2 mb-4">
                   <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                   <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{exp.role}</span>
                 </div>
                 
                 <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm md:text-base">
                   {exp.description}
                 </p>
               </FadeInStaggerItem>
             ))}
          </FadeInStagger>
        </section>
        
        {/* --- WRITING / FOOTER LINK --- */}
        <section className="mt-32 sm:mt-48 border-t border-border/50 pt-16 flex flex-col items-center justify-center text-center">
          <FadeIn>
            <h2 className="text-3xl font-medium tracking-tight mb-6">I also write occasionally.</h2>
            <Link href="/articles" className="inline-flex h-12 items-center justify-center rounded-md bg-transparent px-8 text-sm font-medium text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
              Read My Journals <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
