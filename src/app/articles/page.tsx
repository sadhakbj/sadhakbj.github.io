import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";
import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

export const metadata = {
  title: 'Articles - Bijaya Prasad Kuikel',
  description: 'Writing on software design, company building, and the aerospace industry.',
};

export default async function ArticlesPage() {
  const articlesDir = path.join(process.cwd(), 'src/app/articles');
  let slugs: string[] = [];
  try {
    slugs = await fs.readdir(articlesDir);
  } catch (e) { }

  const articles = [];

  for (const slug of slugs) {
    if (slug.includes('.')) continue; // skip files like page.tsx
    
    // Read the MDX file directly to extract simple frontmatter equivalent
    const filePath = path.join(articlesDir, slug, 'page.mdx');
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      
      const titleMatch = content.match(/title:\s*['"](.*)['"]/);
      const descriptionMatch = content.match(/description:\s*['"]([\s\S]*?)['"]/) || content.match(/description:\s*['"](.*)['"]/);
      const dateMatch = content.match(/date:\s*['"](.*)['"]/);
      
      if (titleMatch) {
        articles.push({
          slug,
          title: titleMatch[1],
          description: descriptionMatch ? descriptionMatch[1].replace(/\n/g, ' ') : "",
          date: dateMatch ? dateMatch[1] : "",
        });
      }
    } catch (e) { }
  }

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <FadeInStagger speed={0.1} className="container mx-auto px-4 md:px-8 py-16 sm:py-24 max-w-screen-xl">
      <FadeInStaggerItem className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </FadeInStaggerItem>

      <div className="flex flex-col space-y-8">
        {articles.map((article) => (
          <FadeInStaggerItem key={article.slug}>
            <Card className="flex flex-col hover:shadow-2xl transition-all duration-500 border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-3xl hover:border-primary/20 rounded-3xl group">
              <CardHeader className="p-8 pb-4">
                <div className="text-sm font-semibold tracking-wider text-primary mb-3">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
                <CardTitle className="leading-snug text-2xl font-bold group-hover:text-primary transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardDescription className="px-8 py-2 flex-grow text-base text-muted-foreground leading-relaxed">
                {article.description}
              </CardDescription>
              <CardFooter className="px-8 pb-8 pt-4">
                <Link href={`/articles/${article.slug}`} className={`${buttonVariants({ variant: "link" })} px-0 font-medium group-hover:text-primary transition-colors`}>Read article <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
              </CardFooter>
            </Card>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
