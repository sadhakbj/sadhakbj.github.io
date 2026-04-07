import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";

function Appearance({ title, description, event, cta, href }: any) {
  return (
    <Card className="hover:shadow-2xl transition-all duration-500 flex flex-col h-full bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/10 hover:border-primary/20 rounded-3xl group">
      <CardHeader className="pt-8 px-8">
        <div className="text-sm font-bold text-primary mb-3 tracking-wider uppercase group-hover:-translate-y-0.5 transition-transform">{event}</div>
        <CardTitle className="leading-snug text-xl">{title}</CardTitle>
      </CardHeader>
      <CardDescription className="px-8 flex-grow text-base text-muted-foreground leading-relaxed mt-2 mb-4">
        {description}
      </CardDescription>
      <CardFooter className="px-8 pb-8">
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "link" })} px-0 font-medium group-hover:text-primary`}>
          {cta} <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
        </a>
      </CardFooter>
    </Card>
  )
}

export default function Speaking() {
  return (
    <FadeInStagger speed={0.1} className="container mx-auto px-4 md:px-8 py-16 sm:py-24 max-w-screen-xl">
      <FadeInStaggerItem className="max-w-3xl mb-24">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          I’ve spoken at events all around the world and been interviewed for many podcasts.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
        </p>
      </FadeInStaggerItem>

      <div className="space-y-24">
        <section>
          <FadeInStaggerItem>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-6 text-foreground">
              <span className="w-16 h-1 rounded-full bg-primary" /> Conferences
            </h2>
          </FadeInStaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInStaggerItem>
              <Appearance
                href="#"
                title="In space, no one can watch you stream — until now"
                description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
                event="SysConf 2021"
                cta="Watch video"
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <Appearance
                href="#"
                title="Lessons learned from our first product recall"
                description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
                event="Business of Startups 2020"
                cta="Watch video"
              />
            </FadeInStaggerItem>
          </div>
        </section>

        <section>
          <FadeInStaggerItem>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-6 text-foreground">
              <span className="w-16 h-1 rounded-full bg-primary" /> Podcasts
            </h2>
          </FadeInStaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInStaggerItem>
              <Appearance
                href="#"
                title="Using design as a competitive advantage"
                description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                event="Encoding Design, July 2022"
                cta="Listen to podcast"
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <Appearance
                href="#"
                title="Bootstrapping an aerospace company to $17M ARR"
                description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
                event="The Escape Velocity Show, March 2022"
                cta="Listen to podcast"
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <Appearance
                href="#"
                title="Programming your company operating system"
                description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
                event="How They Work Radio, September 2021"
                cta="Listen to podcast"
              />
            </FadeInStaggerItem>
          </div>
        </section>
      </div>
    </FadeInStagger>
  )
}
