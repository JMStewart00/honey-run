import { Zap, Leaf, GlassWater, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-honeyrun-red-dark" />,
    title: "Kettle-Popped Freshness",
    description:
      "Experience the magic of authentic kettle corn, popped fresh on-site in traditional kettles for that irresistible crunch and aroma.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-honeyrun-red-dark" />,
    title: "Premium Quality Ingredients",
    description:
      "We use only the finest corn, pure cane sugar, a touch of salt, and quality flavorings to create a taste you'll crave.",
  },
  {
    icon: <GlassWater className="h-10 w-10 text-honeyrun-red-dark" />,
    title: "Lemonade Shake-Ups",
    description:
      "Quench your thirst with our zesty, handcrafted lemonades, made with real lemons and bursting with natural flavor.",
  },
  {
    icon: <Award className="h-10 w-10 text-honeyrun-red-dark" />,
    title: "Perfect for Any Occasion",
    description:
      "From local festivals and farmers markets to private parties and corporate events, our treats are sure to delight!",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-honeyrun-black sm:text-4xl md:text-5xl">
            Why You&apos;ll <span className="text-honeyrun-red-dark">Love</span>{" "}
            Honey Run
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            We&apos;re passionate about creating delicious, high-quality treats
            that bring smiles to faces. Here&apos;s what makes us special:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-honeyrun-yellow-light border-honeyrun-yellow shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <CardHeader className="items-center text-center pt-8">
                {" "}
                {/* Added padding top */}
                <div className="mb-4 p-4 bg-honeyrun-yellow rounded-full inline-block shadow-inner w-18 h-18 mx-auto">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-honeyrun-black">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                {" "}
                {/* Added padding bottom */}
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
