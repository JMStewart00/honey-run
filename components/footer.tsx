import Link from "next/link";
import { Facebook } from "lucide-react"; // Assuming Twitter/X and Instagram might be added later
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-honeyrun-red text-honeyrun-yellow-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-2">
              <Image
                src="/logo.png"
                alt="Honey Run Kettle Company Logo"
                width={180} // Adjust as needed
                height={45} // Adjust as needed
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-center md:text-left">
              Freshly Popped, Simply Delicious.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-start gap-1">
              <Link href="#products" className="hover:underline">
                Products
              </Link>
              <Link href="#features" className="hover:underline">
                Why Us
              </Link>
              <Link href="#find-us" className="hover:underline">
                Find Us
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61561304030412"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-7 w-7 hover:text-honeyrun-yellow transition-colors" />
              </Link>
              {/* Placeholder for other social media */}
              {/* <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-7 w-7 hover:text-honeyrun-yellow transition-colors" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-7 w-7 hover:text-honeyrun-yellow transition-colors" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-honeyrun-yellow-light/30 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Honey Run Kettle Company. All
            Rights Reserved.
          </p>
          <p className="mt-2">Crafted in Washington, IN</p>
        </div>
      </div>
    </footer>
  );
}
