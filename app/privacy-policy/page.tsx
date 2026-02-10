import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-6">
      <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground"><strong>Effective Date:</strong> February 8, 2026</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Introduction</h2>
      <p className="mb-4 text-muted-foreground">
        EatWhat (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This policy explains how your information is collected, used, and disclosed by EatWhat.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Information We Collect</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">a. Location Data</h3>
      <p className="mb-4 text-muted-foreground">
        We collect your precise location data solely to identify nearby eateries and calculate distances. This data is processed in real-time using Google Maps API and is not stored on our servers.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">b. Advertising Data</h3>
      <p className="mb-4 text-muted-foreground">
        We use Google AdMob to display advertisements. AdMob may use your device&apos;s advertising identifier (IDFA) to serve personalized ads based on your interests. You can opt-out of tracking via your device settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Third-Party Services</h2>
      <p className="mb-4 text-muted-foreground">We may employ third-party companies and individuals due to the following reasons:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Google Maps Platform:</strong> For map rendering and place searches. (<a href="https://policies.google.com/privacy" className="text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)
        </li>
        <li>
          <strong className="text-foreground">Google AdMob:</strong> For advertising. (<a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">AdMob Privacy Policy</a>)
        </li>
        <li>
          <strong className="text-foreground">OneMap API:</strong> For Singapore location services.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Children&apos;s Privacy</h2>
      <p className="mb-4 text-muted-foreground">
        We do not knowingly collect personally identifiable information from children. We encourage all children to consult with their parents before submitting any information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Contact Us</h2>
      <p className="mb-4 text-muted-foreground">
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at nownmin57@gmail.com.
      </p>
    </div>
  );
}
