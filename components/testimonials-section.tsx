import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote: "Absolutely addictive! The best kettle corn I've ever had. The perfect balance of sweet and salty.",
    name: "Sarah K.",
    avatar: "/placeholder.svg?width=100&height=100",
    rating: 5,
  },
  {
    quote: "The lemonade was so refreshing on a hot day, and the kettle corn? Simply amazing! Honey Run is a must-try.",
    name: "Mike B.",
    avatar: "/placeholder.svg?width=100&height=100",
    rating: 5,
  },
  {
    quote: "We hired Honey Run for our company picnic, and it was a huge hit! Everyone loved the fresh kettle corn.",
    name: "Linda P., Event Organizer",
    avatar: "/placeholder.svg?width=100&height=100",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-honeyrun-black sm:text-4xl md:text-5xl">
            What Our <span className="text-honeyrun-red-dark">Customers</span> Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            We love our customers, and they love us! Here's some of the sweet things they've shared:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-honeyrun-yellow-light border-honeyrun-yellow shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2 pt-6 px-6">
                {" "}
                {/* Adjusted padding */}
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-honeyrun-yellow"
                />
                <div>
                  <h3 className="text-lg font-semibold text-honeyrun-black">{testimonial.name}</h3>
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-honeyrun-red-dark fill-honeyrun-red-dark" />
                      ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                {" "}
                {/* Adjusted padding */}
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
