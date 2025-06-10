import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-honeyrun-yellow-light overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/rainbow-kettle-corn.jpg"
          alt="Abstract background of colorful kettle corn"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
          priority
        />
      </div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-honeyrun-red/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-honeyrun-yellow/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tighter text-honeyrun-black sm:text-5xl md:text-6xl lg:text-7xl">
            Taste the <span className="text-honeyrun-red-dark">Sweet & Salty</span> Perfection!
          </h1>
          <p className="mt-6 text-lg text-gray-700 md:text-xl max-w-xl mx-auto">
            Welcome to Honey Run Kettle Company! We craft irresistible, freshly popped kettle corn and serve up
            refreshing, hand-squeezed lemonades. Perfect for any occasion!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-honeyrun-red text-white hover:bg-honeyrun-red-dark shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-honeyrun-red-dark"
            >
              <Link href="#products">Our Delicious Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-honeyrun-red text-honeyrun-red bg-transparent hover:bg-honeyrun-red hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-honeyrun-red"
            >
              <Link href="#find-us">Find Our Next Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
