import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "Classic Kettle Corn",
    description: "The original sweet and salty delight. Perfectly popped and utterly addictive!",
    image: "/rainbow-kettle-corn.jpg",
  },
  {
    name: "Honeybee Kettle Corn",
    description: "A delightful blend of sweet honey and our classic kettle corn. A truly buzz-worthy treat!",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    name: "Snickerdoodle Kettle Corn",
    description: "Your favorite cookie transformed! Cinnamon, sugar, and buttery notes on crunchy kettle corn.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    name: "Jalapeno Cheddar Kettle Corn",
    description: "A savory kick! Spicy jalapeno and sharp cheddar cheese meet sweet kettle corn for a bold flavor.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    name: "Classic Lemon Shake-Up",
    description: "The original thirst-quencher! Freshly squeezed lemons, perfectly sweetened and shaken to perfection.",
    image: "/placeholder.svg?width=400&height=300",
  },
  {
    name: "Strawberry Lemon Shake-Up",
    description: "A fruity twist on our classic! Real strawberries muddled into our refreshing lemon shake-up.",
    image: "/placeholder.svg?width=400&height=300",
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="w-full py-16 md:py-24 lg:py-32 bg-honeyrun-yellow-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-honeyrun-black sm:text-4xl md:text-5xl">
            Our Delicious <span className="text-honeyrun-red-dark">Offerings</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            Explore our signature kettle corn flavors and refreshing, hand-crafted Lemon Shake-Ups!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="flex flex-col overflow-hidden border-honeyrun-red/20 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-white transform hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 md:h-56"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-semibold text-honeyrun-black mb-2">{product.name}</CardTitle>
                <p className="text-gray-700 text-sm mb-3">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-700">
          Find these and more at our next event! We accept Cash and Venmo.
        </p>
      </div>
    </section>
  )
}
