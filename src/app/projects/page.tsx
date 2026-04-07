import { LinkIcon } from 'lucide-react'
import Image from 'next/image'

import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in"

const projects = [
  { name: 'Planetaria', description: 'Creating technology to empower civilians to explore space on their own terms.', link: { href: 'http://planetaria.tech', label: 'planetaria.tech' }, logo: logoPlanetaria },
  { name: 'Animaginary', description: 'High performance web animation library, hand-written in optimized WASM.', link: { href: '#', label: 'github.com' }, logo: logoAnimaginary },
  { name: 'HelioStream', description: 'Real-time video streaming library, optimized for interstellar transmission.', link: { href: '#', label: 'github.com' }, logo: logoHelioStream },
  { name: 'cosmOS', description: 'The operating system that powers our Planetaria space shuttles.', link: { href: '#', label: 'github.com' }, logo: logoCosmos },
  { name: 'OpenShuttle', description: 'The schematics for the first rocket I designed that successfully made it to orbit.', link: { href: '#', label: 'github.com' }, logo: logoOpenShuttle },
]

export default function Projects() {
  return (
    <FadeInStagger className="container mx-auto px-4 md:px-8 py-16 sm:py-24 max-w-screen-xl">
      <FadeInStaggerItem className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </FadeInStaggerItem>
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <FadeInStaggerItem key={project.name}>
            <li className="h-full hover:shadow-2xl transition-all group flex flex-col items-start bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/10 hover:border-primary/20 hover:bg-white/10 dark:hover:bg-white/5 p-8 rounded-3xl cursor-pointer">
              <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-lg ring-1 ring-border mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">{project.description}</p>
                <p className="relative z-10 flex items-center text-sm font-medium text-muted-foreground transition group-hover:text-primary">
                  <LinkIcon className="h-4 w-4 flex-none mr-2" />
                  <span>{project.link.label}</span>
                </p>
              </a>
            </li>
          </FadeInStaggerItem>
        ))}
      </ul>
    </FadeInStagger>
  )
}
