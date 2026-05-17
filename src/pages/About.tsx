import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { 
  Sparkles,
  ArrowRight,
  Heart,
  Clock,
  Award,
  Lightbulb,
  Rocket,
  BookOpen,
  Star,
  GraduationCap,
  DollarSign
} from "lucide-react"

// Timeline data
const timelineEvents = [
  {
    id: 1,
    title: "Traditional Beginnings",
    description: "At 4, I hid under the covers with a flashlight, mesmerized by illustrated stories. That spark never left — and years later, I brought it to life creating books for my family.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_image2-w4Y2btKpzTl8rSEGIUmhWxavRQukP2.png",
    color: "from-[#96ACE8] to-[#546DB2]",
    icon: Heart,
  },
  {
    id: 2,
    title: "Recognition & Challenges",
    description: "Awards came, but so did frustration. The old process was slow and limiting, and authors deserved better. I set out to create a solution — fast, accessible, and uncompromising in quality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_image1-aaXunPxyF8onYtS3klkgfxZBHHdtx3.png",
    color: "from-[#ADBFF2] to-[#8A98C1]",
    icon: Award,
  },
  {
    id: 3,
    title: "The AI Discovery",
    description: "My first AI image was a revelation. That spark led to a children's book honored by USA Today as \"an achievement that couldn't have happened a year earlier.\"",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_image4-SauB3w63fqFF3W0iOF1w0JQ00VnGkL.jpg",
    color: "from-[#546DB2] to-[#2A3659]",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Birth of Story Quest",
    description: "Story Quest began with a simple goal: to give every author the power to create stunning visuals without barriers. With AI, that vision is now reality — fast, easy, and filled with artistic depth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_image6-PcN7PIPbgNCfxdMC7A9taEjgZGyP9p.jpeg",
    color: "from-[#8A98C1] to-[#333948]",
    icon: Rocket,
  },
]

const benefits = [
  {
    icon: GraduationCap,
    title: "Become an Expert",
    description: "Stop second-guessing. I'll guide you through a clear process to publish this book — and every one after — with confidence.",
    color: "from-[#96ACE8] to-[#546DB2]",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Forget hours of trial and error. I'll guide you through exactly what works so you can publish faster and with confidence.",
    color: "from-[#546DB2] to-[#2A3659]",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "No expensive mistakes or wasted resources. Get it right the first time with expert guidance that pays for itself.",
    color: "from-[#ADBFF2] to-[#8A98C1]",
  },
]

type TimelineEvent = (typeof timelineEvents)[number]

// Floating shapes component
const FloatingShapes = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#96ACE8]/30 to-[#546DB2]/20 blur-3xl"
    />
    <motion.div
      animate={{ 
        y: [0, 40, 0],
        rotate: [0, -15, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#ADBFF2]/30 to-[#8A98C1]/20 blur-3xl"
    />
    <motion.div
      animate={{ 
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#C5D2F5]/30 to-[#EEF2FC]/20 blur-3xl"
    />
  </div>
)

// Animated reveal text
const RevealText = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Timeline item component
const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Content wrapper */}
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}>
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -60 : 60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${event.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
            
            <div className="relative bg-[#F6F5FC]/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-[#2A3659]/10 border border-[#C5D2F5]/50">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-[#F6F5FC] text-sm font-medium mb-4`}>
                <event.icon className="w-4 h-4" />
                <span>Chapter {event.id}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2942] mb-4">
                {event.title}
              </h3>
              
              <p className="text-[#8A98C1] leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Center dot and line */}
        <div className="relative flex flex-col items-center">
          {/* Animated dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
            className="relative z-10"
          >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} shadow-lg`}>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color}`}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 60 : -60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? 60 : -60, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: isEven ? 2 : -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group"
          >
            {/* Decorative frame */}
            <div className={`absolute -inset-3 bg-gradient-to-br ${event.color} rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
            <div className="absolute -inset-1 bg-[#F6F5FC] rounded-2xl" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full aspect-square object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Shine effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 0.3 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function About() {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  
  // Scroll progress for the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F6F5FC] via-[#EEF2FC] to-[#C5D2F5]/50 overflow-hidden">
        <FloatingShapes />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(84,109,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(84,109,178,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1F2942] mb-6"
          >
            From Stuck to Published —
            <br />
            <span className="italic font-light text-[#546DB2]">The Help I Wish I Had</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#8A98C1] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            I thought writing my book was the hard part — then came visuals, tech, and publishing. 
            I developed a program to help authors bring their stories to life easily and shortcut the process.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#546DB2] hover:bg-[#2A3659] text-[#F6F5FC] px-8 py-6 text-lg rounded-full shadow-xl shadow-[#546DB2]/30"
            >
              <Link to="/contact">
                Book a Coaching Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#C5D2F5] text-[#2A3659] px-8 py-6 text-lg rounded-full hover:bg-[#EEF2FC]"
            >
              <Link to="/faq">
                Get Quick Answers
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#8A98C1] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#8A98C1] rounded-full"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Benefits Section */}
      <section className="relative py-24 bg-[#F6F5FC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2942]">
              Enhance Your Book
              <br />
              <span className="italic font-light text-[#8A98C1]">With Coaching & Custom Illustrations</span>
            </h2>
          </RevealText>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealText key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative group h-full"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative h-full bg-[#EEF2FC] rounded-3xl p-8 border border-[#C5D2F5] hover:border-[#ADBFF2] transition-all duration-300">
                    {/* Vertical accent line */}
                    <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${benefit.color} rounded-full`} />
                    
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} text-[#F6F5FC] mb-6 shadow-lg`}>
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1F2942] mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-[#8A98C1] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey Timeline Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#EEF2FC] via-[#F6F5FC] to-[#F6F8FD] overflow-hidden">
        <FloatingShapes className="opacity-40" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <RevealText className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
              <BookOpen className="w-4 h-4" />
              My Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2942]">
              My Journey: From
              <br />
              <span className="italic font-light text-[#8A98C1]">Vision to Reality</span>
            </h2>
            <p className="mt-6 text-xl text-[#8A98C1] max-w-2xl mx-auto">
              I help authors and creatives turn ideas into publish-ready books with expert guidance and tools for illustrations and publishing strategy.
            </p>
          </RevealText>
          
          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#C5D2F5] -translate-x-1/2 hidden md:block rounded-full overflow-hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[#96ACE8] via-[#546DB2] to-[#2A3659] rounded-full"
              />
            </div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#C5D2F5] md:hidden rounded-full overflow-hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[#96ACE8] via-[#546DB2] to-[#2A3659] rounded-full"
              />
            </div>
            
            {/* Timeline events */}
            <div className="space-y-24 md:space-y-32">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#2A3659] via-[#1F2942] to-[#333948] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-[#546DB2]/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-[#8A98C1]/10 rounded-full"
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
          
          <RevealText delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F6F5FC] mb-6">
              Ready to Start Your Journey?
            </h2>
          </RevealText>
          
          <RevealText delay={0.2}>
            <p className="text-xl text-[#ADBFF2] mb-10 max-w-2xl mx-auto">
              Let&apos;s work together to bring your story to life with professional illustrations and expert guidance.
            </p>
          </RevealText>
          
          <RevealText delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#546DB2] hover:bg-[#96ACE8] text-[#F6F5FC] px-8 py-6 text-lg rounded-full shadow-xl shadow-[#546DB2]/30"
              >
                <Link to="/contact">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Start Your Story
                </Link>
              </Button>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  )
}

export default About
