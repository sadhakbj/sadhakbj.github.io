"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function ArticleLayout({ children, meta }: any) {
  const router = useRouter();
  
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 sm:py-24 max-w-3xl">
      <Button variant="ghost" className="mb-8" onClick={() => router.push('/articles')}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Go back
      </Button>
      <article>
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
            {meta.title}
          </h1>
          <time dateTime={meta.date} className="order-first flex items-center text-sm text-muted-foreground mr-3">
            <span className="h-4 w-0.5 rounded-full bg-primary mr-3" />
            {new Date(meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </header>
        <div className="mt-12 prose dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
          {children}
        </div>
      </article>
    </div>
  )
}
