import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react" // Added X for close button
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet" // Added SheetClose

export default function Header() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Find Us", href: "#find-us" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-honeyrun-red/20 bg-honeyrun-yellow shadow-md h-24 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-honeyrun-red-dark rounded-sm"
        >
          <Image
            src="/honey-run-logo.png"
            alt="Honey Run Kettle Company Logo"
            width={200}
            height={50}
            priority
            className="h-auto w-auto max-h-[50px]" // Ensure logo scales correctly and respects max height
          />
        </Link>
        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-honeyrun-black hover:text-honeyrun-red-dark hover:underline underline-offset-4 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:text-honeyrun-red-dark focus-visible:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-honeyrun-red text-honeyrun-red hover:bg-honeyrun-red hover:text-white transition-colors duration-200 ease-in-out"
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-honeyrun-red text-honeyrun-yellow-light p-0 w-full max-w-xs sm:max-w-sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-honeyrun-yellow-light/30">
                  <Link
                    href="/"
                    className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    <Image
                      src="/honey-run-logo.png" // Consider a white version of logo for red background
                      alt="Honey Run Kettle Company Logo"
                      width={160}
                      height={40}
                      className="h-auto filter brightness-0 invert" // Makes logo white
                    />
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-honeyrun-yellow-light hover:bg-honeyrun-red-dark/50 hover:text-white"
                    >
                      <X className="h-7 w-7" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-6 space-y-3">
                  {navItems.map((item) => (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md px-4 py-3 text-lg font-medium hover:bg-honeyrun-red-dark hover:text-white focus:bg-honeyrun-red-dark focus:text-white focus:outline-none transition-colors duration-200 ease-in-out"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 mt-auto border-t border-honeyrun-yellow-light/30">
                  <p className="text-xs text-center text-honeyrun-yellow-light/70">
                    &copy; {new Date().getFullYear()} Honey Run
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
