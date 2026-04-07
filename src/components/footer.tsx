import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Sadhakbj. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-sm font-medium text-muted-foreground">
          <Link href="https://twitter.com/sadhakbj" target="_blank" rel="noreferrer" className="hover:text-foreground">
            Twitter
          </Link>
          <Link href="https://github.com/sadhakbj" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
