import { MapPin, Search, Star, Heart, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PhoneMockupProps {
  variant?: "home" | "search" | "detail";
  imageSrc?: string;
}

export function PhoneMockup({ variant = "home", imageSrc }: PhoneMockupProps) {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="w-[280px] h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Screen content */}
          {imageSrc ? (
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt="App screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ) : (
            <>
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground rounded-full z-20" />

              <div className="pt-14 px-4 pb-4 h-full flex flex-col">
                {variant === "home" && <HomeScreen />}
                {variant === "search" && <SearchScreen />}
                {variant === "detail" && <DetailScreen />}
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full z-20" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Good evening</p>
          <p className="font-semibold text-sm">What do you want to eat?</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-muted" />
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2 mb-4">
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          Search restaurants...
        </span>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-4 overflow-hidden">
        {["All", "Nearby", "Top Rated", "New"].map((cat) => (
          <div
            key={cat}
            className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
              cat === "All"
                ? "bg-foreground text-background"
                : "bg-muted text-foreground"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Restaurant cards */}
      <div className="space-y-3 flex-1 overflow-hidden">
        <RestaurantCard
          name="The Local Kitchen"
          cuisine="American • $$"
          rating="4.8"
          distance="0.3 mi"
        />
        <RestaurantCard
          name="Sakura Sushi"
          cuisine="Japanese • $$$"
          rating="4.9"
          distance="0.5 mi"
        />
        <RestaurantCard
          name="Bella Italia"
          cuisine="Italian • $$"
          rating="4.7"
          distance="0.8 mi"
        />
      </div>
    </>
  );
}

function SearchScreen() {
  return (
    <>
      <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2 mb-4">
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-foreground">Thai food</span>
      </div>

      <p className="text-xs text-muted-foreground mb-3">12 results found</p>

      <div className="space-y-3 flex-1 overflow-hidden">
        <RestaurantCard
          name="Thai Orchid"
          cuisine="Thai • $$"
          rating="4.6"
          distance="0.4 mi"
        />
        <RestaurantCard
          name="Bangkok Street"
          cuisine="Thai • $"
          rating="4.5"
          distance="0.7 mi"
        />
        <RestaurantCard
          name="Spice House"
          cuisine="Thai • $$"
          rating="4.8"
          distance="1.2 mi"
        />
      </div>
    </>
  );
}

function DetailScreen() {
  return (
    <>
      <div className="h-28 bg-muted rounded-xl mb-3" />

      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="font-semibold text-sm">The Local Kitchen</p>
          <p className="text-xs text-muted-foreground">American • $$</p>
        </div>
        <Heart className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-foreground text-foreground" />
          4.8
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          0.3 mi
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Open now
        </span>
      </div>

      <div className="bg-foreground text-background rounded-xl py-2 text-center text-xs font-medium">
        View Menu
      </div>
    </>
  );
}

function RestaurantCard({
  name,
  cuisine,
  rating,
  distance,
}: {
  name: string;
  cuisine: string;
  rating: string;
  distance: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-xl">
      <div className="w-14 h-14 bg-muted rounded-lg shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-xs truncate">{name}</p>
        <p className="text-xs text-muted-foreground">{cuisine}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center gap-0.5 text-xs">
            <Star className="w-3 h-3 fill-foreground text-foreground" />
            {rating}
          </span>
          <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {distance}
          </span>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </div>
  );
}
