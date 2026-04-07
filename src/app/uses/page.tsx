import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";

function ToolsSection({ title, children }: any) {
  return (
    <section className="md:border-l md:border-muted/30 md:pl-10 relative">
      <div className="absolute left-[-1px] top-4 w-0.5 h-10 bg-primary hidden md:block rounded-full"></div>
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">{children}</ul>
        </div>
      </div>
    </section>
  )
}

function Tool({ title, children }: any) {
  return (
    <FadeInStaggerItem className="flex flex-col items-start group">
      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="relative z-10 text-base text-muted-foreground leading-relaxed">{children}</p>
    </FadeInStaggerItem>
  )
}

export default function Uses() {
  return (
    <FadeInStagger speed={0.05} className="container mx-auto px-4 md:px-8 py-16 sm:py-24 max-w-screen-xl">
      <FadeInStaggerItem className="max-w-3xl mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
        </p>
      </FadeInStaggerItem>

      <div className="space-y-24 border-l border-muted/30 md:border-none pl-6 md:pl-0 ml-4 md:ml-0 relative">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </FadeInStagger>
  )
}
