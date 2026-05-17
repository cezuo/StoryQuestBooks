import { Link } from "react-router-dom"
import { Hero } from "@/components/Hero"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { useRef, type ReactNode, type MouseEvent, type ComponentPropsWithoutRef } from "react"
import { 
  Rocket, 
  Wand2, 
  BookOpen, 
  Star,
  Sparkles,
  ArrowRight,
  Heart,
  Zap,
  PenTool,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  Crown
} from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Flexible Approach",
    description: "From traditional illustration to AI-powered art, choose the path that fits your vision.",
    color: "from-[#96ACE8] to-[#546DB2]",
    bgColor: "bg-[#EEF2FC]",
  },
  {
    icon: Wand2,
    title: "Expert Guidance",
    description: "Work with experienced children's book professionals who support you at every stage.",
    color: "from-[#546DB2] to-[#2A3659]",
    bgColor: "bg-[#F6F8FD]",
  },
  {
    icon: BookOpen,
    title: "Complete Support",
    description: "From story development to printing, I guide you through the entire process.",
    color: "from-[#ADBFF2] to-[#8A98C1]",
    bgColor: "bg-[#EEF2FC]",
  },
]

const awards = [
  { 
    name: "Mom's Choice Awards", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award1-LcDzMDXX9NKYJNesIccz6ODSjP7zlQ.png",
    alt: "Mom's Choice Awards - Honoring Excellence"
  },
  { 
    name: "Royal Dragonfly Book Award", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award2-GcUHWX5k2iU6vR8DGvJZ8GCosIYiWa.png",
    alt: "Royal Dragonfly Book Award - First Place"
  },
  { 
    name: "Purple Dragonfly Book Award", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award3-wN0u1j9sDeWQjDJaOeM0aKomCdcJHd.png",
    alt: "Purple Dragonfly Book Award - First Place"
  },
  { 
    name: "USA Today", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award4-cZOxZ0sRICeMJ7zin2ECgCqniTfV2o.png",
    alt: "USA Today"
  },
  { 
    name: "Topaz Labs", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award5-SGFIGZGl5yPc8y2QNecEut4BpfNeyk.png",
    alt: "Topaz Labs"
  },
  { 
    name: "Foreword Indies", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award6-yqyzB6nyt9aGHnqL02Qa67rTyeB4Rz.png",
    alt: "Foreword Indies Book of the Year Awards"
  },
]

const illustrationOptions = [
  {
    title: "Custom Digital Art",
    description: "Professional illustrations created for you with Photoshop or AI tools",
    icon: PenTool,
    gradient: "from-[#96ACE8] to-[#546DB2]",
  },
  {
    title: "Hybrid Approach",
    description: "Custom digital art using a combination of both traditional and AI methods",
    icon: Sparkles,
    gradient: "from-[#546DB2] to-[#2A3659]",
  },
  {
    title: "Guided AI Creation",
    description: "Create your own AI-generated art with one-on-one individualized instruction",
    icon: Zap,
    gradient: "from-[#ADBFF2] to-[#8A98C1]",
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ii0klt2pwaUoS6HcVsvNQ4U435U1c2.png",
    alt: "Post office illustration with dog",
    title: "Charming Scenes",
    caption: "A cozy neighborhood vignette where tiny details make the world feel instantly alive."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iFhLZb3RwtWmA8qhAvQZ9fYrqp5lEH.png",
    alt: "Abstract roller coaster art",
    title: "Vibrant Energy",
    caption: "A rush of color and motion that captures the thrill of big, brave emotions."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5Yr4NVwusXsEhaC7baqi8Ue5xSbcI8.png",
    alt: "Magical library archway",
    title: "Magical Worlds",
    caption: "An enchanted doorway into wonder, inviting young readers to keep turning pages."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jeZK1ktf4gc8ZG1F4qxhKsdGBMJekA.png",
    alt: "Growing Up Together book cover",
    title: "Heartwarming Stories",
    caption: "Tender storytelling that celebrates friendship, growth, and the magic of belonging."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbXa5HidY3ZqtMQZt2kCrS3PRo2Ibk.png",
    alt: "Boy reading with globe",
    title: "Curious Minds",
    caption: "A spark of curiosity that turns every question into a new adventure."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kitqyeV684i2yefm81b5VhbmXf7d0E.png",
    alt: "Serene countryside path",
    title: "Peaceful Landscapes",
    caption: "Soft light and open paths that give your story room to breathe."
  },
]

const pricingPackages = [
  {
    name: "Starter Package",
    tagline: "Launch Your Story",
    description: "Best for beginners exploring their idea",
    priceRange: "$297 – $597",
    features: [
      "1–2 coaching sessions (Zoom)",
      "Story concept + positioning guidance",
      "Basic illustration overview (AI + options)",
      "Starter prompt templates for AI image-generation",
      "Roadmap for completing your book"
    ],
    outcome: "Clarity + confidence + a clear plan",
    gradient: "from-[#ADBFF2] to-[#8A98C1]",
    bgColor: "bg-[#EEF2FC]"
  },
  {
    name: "Core Package",
    tagline: "Create Your Book with AI",
    description: "Most popular — fully guided creation",
    priceRange: "$1,500 – $3,500",
    features: [
      "6–10 coaching sessions",
      "Page-by-page story development",
      "Character design guidance",
      "AI illustration training (hands-on)",
      "AI prompt refinement + iteration support",
      "Layout, printing, and publishing guidance",
      "Prompt library access",
      "Illustration feedback"
    ],
    outcome: "A complete, illustrated children's book ready for publishing",
    gradient: "from-[#546DB2] to-[#2A3659]",
    bgColor: "bg-[#F6F8FD]",
    popular: true
  },
  {
    name: "Premium Package",
    tagline: "Done With You",
    description: "High-touch, transformational experience",
    priceRange: "$5,000 – $10,000+",
    features: [
      "Full start-to-finish collaboration",
      "Custom illustration support (AI + refinement)",
      "Direct feedback on every page",
      "Layout + print-ready formatting guidance",
      "Publishing + launch strategy",
      "Optional: Done-for-you illustrations"
    ],
    outcome: "A professionally polished, publish-ready book",
    gradient: "from-[#96ACE8] to-[#546DB2]",
    bgColor: "bg-[#EEF2FC]"
  }
]

const publishedBooks = [
  { 
    title: "I Want Cake!", 
    author: "Daniel Kairys, MD",
    illustrator: "Jo Ann Kairys",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book1-waROzVWBN4Ajp38FS3XLhpMQu09Aka.png",
    amazonUrl: "https://www.amazon.com",
    color: "from-[#96ACE8] to-[#546DB2]"
  },
  { 
    title: "Welcome, Mac, to the Family!", 
    author: "Joan Ruddiman, EdD",
    illustrator: "Jo Ann Kairys",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book2-FlXati2QV75VgEFj1DADr1jFu89CAZ.png",
    amazonUrl: "https://www.amazon.com",
    color: "from-[#546DB2] to-[#2A3659]"
  },
  { 
    title: "Sunbelievable", 
    author: "Jo Ann Kairys & Daniel Kairys, M.D.",
    illustrator: "Jo Ann Kairys & Frank Thompson",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book3-bWYFkRSTKbEXfadVgKIoQQyMhSSTTj.png",
    amazonUrl: "https://www.amazon.com",
    color: "from-[#ADBFF2] to-[#8A98C1]"
  },
  { 
    title: "Little Children Big Feelings", 
    author: "Joan Ruddiman, EdD",
    illustrator: "Jo Ann Kairys",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book4-K40H9kuIftp4OUqYmYdP57jGMieei1.png",
    amazonUrl: "https://www.amazon.com",
    color: "from-[#8A98C1] to-[#333948]"
  },
  { 
    title: "It's Not My Fault!", 
    author: "Andrina Veit Cleveland, MA, MSW",
    illustrator: "Jo Ann Kairys",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book5-Q5tj0HNZLsTn2QsdsmFsyk38GimVRt.png",
    amazonUrl: "https://www.amazon.com",
    color: "from-[#546DB2] to-[#1F2942]"
  },
]

type FloatingShapesProps = {
  className?: string
}

type AnimatedNumberProps = {
  value: string | number
  suffix?: string
}

type MagneticButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  children: ReactNode
  className?: string
}

type RevealTextProps = {
  children: ReactNode
  className?: string
}

type StaggerCardProps = {
  children: ReactNode
  index: number
  className?: string
}

// Floating shapes component
function FloatingShapes({ className = "" }: FloatingShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-linear-to-br from-[#96ACE8]/30 to-[#546DB2]/30 blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-linear-to-br from-[#ADBFF2]/30 to-[#8A98C1]/30 blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-linear-to-br from-[#C5D2F5]/30 to-[#EEF2FC]/30 blur-xl"
      />
    </div>
  )
}

// Animated counter component
function AnimatedNumber({ value, suffix = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

// Magnetic button component
function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }
  
  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0, 0)"
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-200 ease-out"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

// Reveal text animation
function RevealText({ children, className = "" }: RevealTextProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Staggered card reveal
function StaggerCard({ children, index, className = "" }: StaggerCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  return (
    <>
      {/* Progress bar */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-[#96ACE8] via-[#546DB2] to-[#2A3659] origin-left z-50"
      />
      
      <Hero />

      {/* Features Section */}
      <section className="relative py-32 bg-[#F6F5FC] overflow-hidden">
        <FloatingShapes />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <RevealText>
              <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#96ACE8] via-[#546DB2] to-[#2A3659] bg-clip-text text-transparent mb-4">
                What Story Quest Offers
              </span>
            </RevealText>
            <RevealText className="mt-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942] tracking-tight">
                Your Story, <span className="italic font-light text-[#546DB2]">Beautifully</span> Told
              </h2>
            </RevealText>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggerCard key={index} index={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative p-8 rounded-3xl bg-white border border-[#C5D2F5] shadow-lg shadow-[#C5D2F5]/30 hover:shadow-2xl hover:shadow-[#ADBFF2]/40 transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="h-8 w-8 text-[#546DB2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2942] mb-3 group-hover:text-[#546DB2] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#8A98C1] leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`absolute bottom-0 left-0 h-1 rounded-b-3xl bg-linear-to-r ${feature.color}`}
                  />
                </motion.div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-[#EEF2FC] via-[#C5D2F5] to-[#ADBFF2]">
        <FloatingShapes />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <RevealText>
              <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
                <Star className="w-4 h-4 fill-[#96ACE8] text-[#96ACE8]" />
                Recognition
                <Star className="w-4 h-4 fill-[#96ACE8] text-[#96ACE8]" />
              </span>
            </RevealText>
            <RevealText className="mt-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942] tracking-tight">
                Honored by Top <span className="italic font-light text-[#2A3659]">Industries</span>
              </h2>
            </RevealText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {awards.map((award, index) => (
              <StaggerCard key={index} index={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative p-6 rounded-3xl bg-white border border-[#C5D2F5] shadow-lg shadow-[#C5D2F5]/30 hover:shadow-2xl hover:shadow-[#ADBFF2]/40 transition-all duration-500 flex flex-col items-center justify-center gap-4 min-h-42.5"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="w-full h-20 flex items-center justify-center p-2"
                  >
                    <img
                      src={award.image}
                      alt={award.alt}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  <p className="text-[11px] leading-tight text-center text-[#8A98C1] font-semibold tracking-wide group-hover:text-[#546DB2] transition-colors duration-300">
                    {award.name}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-1 rounded-b-3xl bg-linear-to-r from-[#96ACE8] to-[#546DB2]"
                  />
                </motion.div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="relative py-32 bg-[#F6F5FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image with creative framing */}
            <StaggerCard index={0}>
              <div className="relative">
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -left-8 w-32 h-32 border-2 border-dashed border-[#ADBFF2] rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-dashed border-[#96ACE8] rounded-full"
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#96ACE8] via-[#546DB2] to-[#2A3659] rounded-3xl transform rotate-3 scale-105 opacity-20 blur-2xl" />
                  <div className="relative aspect-4/5 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jo_ann-Q3dMfC29pfx47FfHdhMlU3pUROQk9R.jpg"
                      alt="Jo Ann - Founder of Story Quest"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1F2942]/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#C5D2F5]"
                  >
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#96ACE8] to-[#546DB2] flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1F2942]">
                        <AnimatedNumber value="15" suffix="+" />
                      </p>
                      <p className="text-xs text-[#8A98C1] font-medium">Top Award-Winning Published Books</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </StaggerCard>

            {/* Content */}
            <div className="lg:pl-8">
              <RevealText>
                <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#96ACE8] to-[#546DB2] bg-clip-text text-transparent mb-4">
                  Why Work With Me
                </span>
              </RevealText>
              
              <RevealText className="mt-2">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2942] leading-tight">
                  One-on-One{" "}
                  <span className="relative">
                    <span className="relative z-10 italic font-light text-[#546DB2]">Creative</span>
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-2 left-0 h-3 bg-[#C5D2F5]/50 z-0"
                    />
                  </span>{" "}
                  Partnership
                </h2>
              </RevealText>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 space-y-6"
              >
                <p className="text-lg text-[#8A98C1] leading-relaxed">
                  You work directly with me, the founder and owner of Story Quest. I am a 
                  professional illustrator and creative guide with extensive experience in 
                  children&apos;s book storytelling, self-publishing, digital art, creating illustrations
                  using Photoshop, and generating images with AI assistance.
                </p>
                <p className="text-lg text-[#8A98C1] leading-relaxed">
                  I focus on a small number of people at a time to provide one-on-one guidance 
                  and support through every stage of the publishing journey.
                </p>
                <p className="text-xl font-semibold text-[#1F2942] border-l-4 border-[#546DB2] pl-6">
                  This is not a large-scale course or generic program. It&apos;s a collaborative, one-on-one creative process 
                  designed to help you bring your story to life with clarity, confidence, and professional-quality results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <MagneticButton asChild className="bg-linear-to-r from-[#546DB2] to-[#2A3659] hover:from-[#8A98C1] hover:to-[#546DB2] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-[#546DB2]/25">
                  <Link to="/contact" className="flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Published Books - Horizontal Scroll */}
      <section className="relative py-32 bg-linear-to-br from-[#EEF2FC] via-[#F6F5FC] to-[#EEF2FC] overflow-hidden">
        <FloatingShapes className="opacity-50" />
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <RevealText>
                <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#96ACE8] to-[#546DB2] bg-clip-text text-transparent mb-4">
                  Published Works
                </span>
              </RevealText>
              <RevealText className="mt-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942]">
                  Award-Winning <span className="italic font-light text-[#546DB2]">Books</span>
                </h2>
              </RevealText>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-xl text-[#8A98C1] max-w-2xl mx-auto"
              >
                Browse through our collection of beautifully illustrated children&apos;s books.
              </motion.p>
            </div>
          </div>

          {/* Horizontal Scrolling Book Carousel */}
          <div className="relative">
            <div 
              className="flex gap-8 overflow-x-auto pb-8 px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="shrink-0 w-4 lg:w-32" />
              
              {publishedBooks.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="shrink-0 snap-center"
                >
                  <motion.div
                    whileHover={{ y: -15, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative w-72 md:w-80"
                    style={{ perspective: "1000px" }}
                  >
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-linear-to-br ${book.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                      
                      <div className="relative bg-white rounded-2xl p-4 shadow-xl shadow-[#C5D2F5]/30 group-hover:shadow-2xl group-hover:shadow-[#ADBFF2]/50 transition-all duration-500 border border-[#C5D2F5]">
                        <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                          <motion.img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          />
                          
                          <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            whileHover={{ x: "100%", opacity: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent skew-x-12"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-[#1F2942] line-clamp-1">
                            {book.title}
                          </h3>
                          <p className="text-sm text-[#8A98C1]">
                            By {book.author}
                          </p>
                          <p className="text-xs text-[#ADBFF2]">
                            Illustrated by {book.illustrator}
                          </p>
                        </div>
                        
                        <motion.a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`mt-4 w-full flex items-center justify-center gap-2 bg-linear-to-r ${book.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Buy on Amazon
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              
              <div className="shrink-0 w-4 lg:w-32" />
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {publishedBooks.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#C5D2F5]"
                  whileHover={{ scale: 1.5, backgroundColor: "#546DB2" }}
                />
              ))}
            </div>
            
            <div className="absolute left-0 top-0 bottom-8 w-20 bg-linear-to-r from-[#EEF2FC] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-linear-to-l from-[#EEF2FC] to-transparent pointer-events-none z-10" />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-4 text-[#8A98C1] text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Scroll to explore</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </section>

      {/* Illustration Options Section */}
      <section className="relative py-32 bg-[#F6F5FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <RevealText>
                <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#546DB2] to-[#2A3659] bg-clip-text text-transparent mb-4">
                  Illustration Options
                </span>
              </RevealText>
              
              <RevealText className="mt-2">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2942] leading-tight">
                  Multiple Paths to{" "}
                  <span className="italic font-light text-[#546DB2]">Your</span> Perfect Art
                </h2>
              </RevealText>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-[#8A98C1] leading-relaxed"
              >
                Story Quest offers multiple opportunities for illustrating your story. Rather than being limited to one artistic style, you have ultimate control and flexibility.
              </motion.p>

              <div className="mt-10 space-y-4">
                {illustrationOptions.map((option, index) => (
                  <StaggerCard key={index} index={index}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group flex items-start gap-5 p-6 rounded-2xl bg-[#EEF2FC] hover:bg-white hover:shadow-xl hover:shadow-[#C5D2F5]/30 transition-all duration-300 border border-transparent hover:border-[#C5D2F5]"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${option.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <option.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1F2942] mb-1">{option.title}</h4>
                        <p className="text-[#8A98C1]">{option.description}</p>
                      </div>
                    </motion.div>
                  </StaggerCard>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-[#8A98C1] leading-relaxed"
              >
                Close involvement with the illustration process ensures your story vision is realized and reflected in every element of your book&apos;s design.
              </motion.p>
            </div>

            <StaggerCard index={0}>
              <motion.div
                whileHover={{ rotate: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#96ACE8] to-[#546DB2] rounded-3xl transform rotate-6 scale-105 opacity-20 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0rxUrGyrrClKgjEqk3meLIlzAfVHAg.jpeg"
                    alt="Story Quest Illustration Options"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </StaggerCard>
          </div>
        </div>
      </section>

      {/* Illustration Gallery Section */}
      <section className="relative py-32 bg-linear-to-br from-[#1F2942] via-[#2A3659] to-[#333948] overflow-hidden">
        <FloatingShapes className="opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <RevealText>
              <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#96ACE8] to-[#ADBFF2] bg-clip-text text-transparent mb-4">
                Art Gallery
              </span>
            </RevealText>
            <RevealText className="mt-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5FC] tracking-tight">
                Stunning <span className="italic font-light text-[#96ACE8]">Illustrations</span>
              </h2>
            </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl text-[#ADBFF2] max-w-2xl mx-auto"
            >
              Explore the diverse styles and creative possibilities for your children&apos;s book.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <StaggerCard
                key={index}
                index={index}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer h-full"
                >
                  <div className={`${index === 0 ? "aspect-square" : "aspect-square"} h-full`}>
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-linear-to-t from-[#1F2942]/70 via-[#1F2942]/30 to-transparent flex items-end p-4 md:p-6"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                        <span className="block text-[#F6F5FC] font-semibold text-sm md:text-base">
                        {image.title}
                      </span>
                        <p className="mt-1 text-[#EEF2FC] text-xs md:text-sm leading-relaxed">
                          {image.caption ?? image.alt}
                        </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="relative py-32 bg-[#F6F5FC] overflow-hidden">
        <FloatingShapes />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <RevealText>
              <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase bg-linear-to-r from-[#546DB2] to-[#2A3659] bg-clip-text text-transparent mb-4">
                Coaching Packages
              </span>
            </RevealText>
            <RevealText className="mt-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942] tracking-tight">
                Choose Your <span className="italic font-light text-[#546DB2]">Path</span>
              </h2>
            </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl text-[#8A98C1] max-w-2xl mx-auto"
            >
              Flexible packages designed to meet you where you are and guide you to where you want to be.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <StaggerCard key={index} index={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative h-full p-8 rounded-3xl ${pkg.bgColor} border-2 ${pkg.popular ? "border-[#546DB2]" : "border-[#C5D2F5]"} shadow-lg hover:shadow-2xl transition-all duration-500`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-linear-to-r from-[#546DB2] to-[#2A3659] text-white text-sm font-medium rounded-full">
                        <Crown className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1F2942] mb-1">{pkg.name}</h3>
                  <p className="text-[#546DB2] font-medium mb-2">{pkg.tagline}</p>
                  <p className="text-[#8A98C1] text-sm mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#1F2942]">{pkg.priceRange}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#546DB2] shrink-0 mt-0.5" />
                        <span className="text-[#8A98C1] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#C5D2F5]">
                    <p className="text-sm text-[#546DB2] font-medium">
                      <span className="text-[#1F2942]">Outcome:</span> {pkg.outcome}
                    </p>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`absolute bottom-0 left-0 h-1 rounded-b-3xl bg-linear-to-r ${pkg.gradient}`}
                  />
                </motion.div>
              </StaggerCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <MagneticButton asChild className="bg-linear-to-r from-[#546DB2] to-[#2A3659] hover:from-[#8A98C1] hover:to-[#546DB2] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-[#546DB2]/25">
              <Link to="/contact" className="flex items-center gap-3">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-linear-to-br from-[#2A3659] via-[#1F2942] to-[#333948] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-200 h-200 border border-[#546DB2]/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-150 h-150 border border-[#8A98C1]/10 rounded-full"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <RevealText>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Star className="w-12 h-12 text-[#96ACE8] mx-auto mb-6 fill-[#96ACE8]/30" />
            </motion.div>
          </RevealText>
          
          <RevealText>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F6F5FC] mb-6">
              Ready to Bring Your Story to Life?
            </h2>
          </RevealText>
          
          <RevealText>
            <p className="text-xl text-[#ADBFF2] mb-10 max-w-2xl mx-auto">
              Let&apos;s work together to create beautiful illustrations and a professionally published children&apos;s book.
            </p>
          </RevealText>
          
          <RevealText>
            <MagneticButton asChild className="bg-[#546DB2] hover:bg-[#96ACE8] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-xl shadow-[#546DB2]/30">
              <Link to="/contact" className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </Link>
            </MagneticButton>
          </RevealText>
        </div>
      </section>

    </>
  )
}
