import type { Metadata } from "next";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ProductsSection from "@/components/products-section";
import TestimonialsSection from "@/components/testimonials-section";
import FindUsSection from "@/components/find-us-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Honey Run Kettle Company - Fresh Kettle Corn & Lemonade",
  description:
    "Discover delicious, freshly popped kettle corn and refreshing hand-squeezed lemonades from Honey Run Kettle Company. Find us at local events, festivals, and fairs!",
  keywords: [
    "kettle corn",
    "lemonade",
    "fresh popcorn",
    "local events",
    "festivals",
    "Honey Run",
    "sweet and salty",
    "food vendor",
    "Ohio kettle corn",
  ],
  openGraph: {
    title: "Honey Run Kettle Company - Sweet & Salty Perfection",
    description:
      "The best kettle corn and fresh lemonades! Perfect for your next event or a tasty treat.",
    url: "https://your-actual-domain.com", // Replace with actual domain when deployed
    siteName: "Honey Run Kettle Company",
    images: [
      {
        url: "/honey-run-logo.png", // Path to your logo in the public folder
        width: 1200, // Adjust if you know the exact logo dimensions
        height: 630, // Adjust for Open Graph aspect ratio
        alt: "Honey Run Kettle Company Logo",
      },
      {
        url: "/rainbow-kettle-corn.jpg", // A nice product shot
        width: 800,
        height: 600,
        alt: "Colorful Rainbow Kettle Corn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Run Kettle Company - Fresh Treats!",
    description:
      "Get your fresh kettle corn and lemonade from Honey Run Kettle Company.",
    images: ["/honey-run-logo.png"], // Replace with actual domain + path
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FindUsSection />
      </main>
      <Footer />
    </div>
  );
}
