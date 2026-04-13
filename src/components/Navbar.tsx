import { useState } from "react"
import { Link } from "react-router-dom"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/author-coaching", label: "Services" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mx-auto">
            <span className="text-lg font-semibold tracking-tight">
              Story Quest
            </span>
          </Link>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                IG
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FB
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-primary-foreground/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                IG
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FB
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
