import { MapPin, Sparkles, Heart, Compass } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Discover Nearby",
    description:
      "Find restaurants, cafes, and hidden gems within walking distance of your location.",
  },
  {
    icon: Sparkles,
    title: "Personalized Picks",
    description:
      "Get recommendations tailored to your taste preferences and dining history.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Build your own collection of go-to spots and share them with friends.",
  },
  {
    icon: Compass,
    title: "Explore Cuisines",
    description:
      "Browse by cuisine type, price range, or dietary requirements with ease.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Everything you need to find
            <br />
            your next meal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
