import { PhoneMockup } from "@/components/phone-mockup";

export function AppPreview() {
  return (
    <section id="preview" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            App Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Designed for simplicity
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            A clean, intuitive interface that helps you find great food without
            the clutter.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="relative scale-90 md:scale-100">
            <PhoneMockup variant="search" imageSrc="/screenshots/list.png" />
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Search & Filter
            </p>
          </div>
          <div className="relative scale-100 md:scale-110 z-10">
            <PhoneMockup variant="home" imageSrc="/screenshots/home.png" />
            <p className="text-center mt-6 text-sm font-medium">Home Screen</p>
          </div>
          <div className="relative scale-90 md:scale-100">
            <PhoneMockup variant="detail" imageSrc="/screenshots/detail.png" />
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Restaurant Details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
