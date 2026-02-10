import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-semibold">
              EatWhat
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EatWhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
