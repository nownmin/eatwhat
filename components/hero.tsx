import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Local Food Discovery
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-tight">
                Find your next
                <br />
                favorite meal
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Discover hidden gems and local favorites in your neighborhood.
                Let us help you answer the daily question.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="h-12 px-8">
                <a href="#download">Download Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-8 bg-transparent"
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-semibold">10K+</p>
                <p className="text-sm text-muted-foreground">Restaurants</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup variant="home" imageSrc="/screenshots/home.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
