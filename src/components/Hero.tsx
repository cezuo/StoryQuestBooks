import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import heroImage from "@/assets/Hero_image.png"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Children's book illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1F2942]/35 via-[#1F2942]/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(31,41,66,0.18)_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white mb-6">
            Children&apos;s Book Publishing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F6F5FC] leading-[1.1] mb-8 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]"
        >
          <span className="block">Begin your</span>
          <span className="block mt-2">
            children&apos;s book{" "}
            <span className="italic font-normal text-white">journey</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Expert guidance from story concept to published book. Transform your ideas into beautifully illustrated stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 text-[#F6F5FC] font-medium text-base md:text-lg px-8 py-4 border-2 border-[#546DB2] hover:border-[#96ACE8] hover:bg-[#546DB2]/20 rounded-full transition-all duration-300"
            >
              <span>Learn More</span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 bg-[#546DB2] hover:bg-[#8A98C1] text-[#F6F5FC] font-semibold text-base md:text-lg px-10 py-4 md:px-12 md:py-5 rounded-full transition-all duration-300 shadow-lg shadow-[#546DB2]/30"
            >
              <span className="relative z-10">Explore Programs</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-linear-to-b from-white to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
