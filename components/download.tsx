import { Button } from "@/components/ui/button";

export function Download() {
  return (
    <section id="download" className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
            Ready to discover?
          </h2>
          <p className="text-background/70 mb-10 text-lg">
            Download EatWhat now and never wonder what to eat again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-background text-foreground px-6 py-3 rounded-xl hover:bg-background/90 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-current"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-background text-foreground px-6 py-3 rounded-xl hover:bg-background/90 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-current"
                aria-hidden="true"
              >
                <path d="M3 20.5v-17c0-.83.52-1.28 1.13-.95l14.54 8.5a1.02 1.02 0 0 1 0 1.76l-14.54 8.5c-.61.33-1.13-.12-1.13-.81z" />
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm text-background/50">
            Available for iOS 15+ and Android 10+
          </p>
        </div>
      </div>
    </section>
  );
}
