"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          EatWhat
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#preview"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Preview
          </Link>
          <Link
            href="#download"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Download
          </Link>
        </nav>
        <Button size="sm" asChild>
          <a href="#download">Get the App</a>
        </Button>
      </div>
    </header>
  );
}
