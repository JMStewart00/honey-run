import { MapPin, CalendarDays, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FindUsSection() {
  return (
    <section
      id="find-us"
      className="w-full py-16 md:py-24 lg:py-32 bg-honeyrun-yellow-light"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-honeyrun-black sm:text-4xl md:text-5xl">
            Come <span className="text-honeyrun-red-dark">Find Us!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            We&apos;re always popping up at local events, farmers markets, and
            festivals. Follow us on Facebook for the latest updates on where to
            find our delicious treats!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl border border-honeyrun-red/20">
          <div className="space-y-8">
            {" "}
            {/* Increased spacing */}
            <div className="flex items-start gap-4">
              <div className="bg-honeyrun-red text-white p-3 rounded-full shrink-0">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-honeyrun-black">
                  Upcoming Events
                </h3>
                <p className="text-gray-700">
                  Check our Facebook page for the most current schedule of
                  events and locations. We post regular updates!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-honeyrun-red text-white p-3 rounded-full shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-honeyrun-black">
                  Typical Locations
                </h3>
                <p className="text-gray-700">
                  You can often find us at major local festivals, community
                  fairs, and select farmers markets in the region.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-honeyrun-red text-white p-3 rounded-full shrink-0">
                <Facebook className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-honeyrun-black">
                  Follow Us on Facebook
                </h3>
                <p className="text-gray-700 mb-4">
                  {" "}
                  {/* Increased margin-bottom */}
                  Stay connected and be the first to know about new flavors,
                  special offers, and where we&apos;ll be next!
                </p>
                <Button
                  asChild
                  size="lg" // Made button larger for emphasis
                  className="bg-honeyrun-red text-white hover:bg-honeyrun-red-dark shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-honeyrun-red-dark"
                >
                  <Link
                    href="https://www.facebook.com/profile.php?id=61561304030412"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Our Facebook Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
