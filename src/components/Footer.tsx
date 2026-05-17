import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const footerLinks = {
  info: [
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Story Development", href: "/author-coaching" },
    { label: "Illustration", href: "/author-coaching" },
    { label: "AI Art Training", href: "/author-coaching" },
    { label: "Book Production", href: "/author-coaching" },
  ],
}

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1F2942] text-[#F6F5FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-light tracking-tight mb-6 text-[#F6F5FC]">
                  Story Quest
                </h3>
                <p className="text-[#8A98C1] text-sm leading-relaxed max-w-xs">
                  Helping authors and creators bring their children&apos;s book dreams to life.
                </p>
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Info Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#546DB2] mb-4">
                    Info
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {footerLinks.info.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-sm text-[#ADBFF2] hover:text-[#F6F5FC] transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#546DB2] mb-4">
                    Services
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={`${link.label}-${index}`}>
                        <Link
                          to={link.href}
                          className="text-sm text-[#ADBFF2] hover:text-[#F6F5FC] transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#546DB2] mb-4">
                    Connect
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#ADBFF2] hover:text-[#F6F5FC] transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#333948] py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-[#8A98C1]">
            &copy; {new Date().getFullYear()} Story Quest. All rights reserved.
          </p>
          <a
            href="mailto:hello@storyquest.com"
            className="text-xs text-[#8A98C1] hover:text-[#ADBFF2] transition-colors duration-200"
          >
            hello@storyquest.com
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer