import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import timelineImage from "@/assets/timeline.png"
import { 
  Sparkles,
  ArrowRight,
  Palette,
  Wand2,
  Users,
  MessageSquare,
  Image,
  Video,
  Smile,
  Type,
  Layers,
  CheckCircle2,
  Star
} from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Skills you'll learn - updated colors to SQB theme
const skills = [
  { icon: Users, text: "Create consistent human and cartoon characters across story scenes", color: "text-[#546DB2]" },
  { icon: MessageSquare, text: "Write text prompts for best results", color: "text-[#96ACE8]" },
  { icon: Layers, text: "Alter and compare image styles", color: "text-[#8A98C1]" },
  { icon: Image, text: "Edit image elements", color: "text-[#546DB2]" },
  { icon: Video, text: "Turn images to videos", color: "text-[#2A3659]" },
  { icon: Smile, text: "Change facial expressions", color: "text-[#ADBFF2]" },
  { icon: Type, text: "Experiment with fonts", color: "text-[#546DB2]" },
  { icon: Palette, text: "Compare different AI platforms - Midjourney, Freepik, OpenArt, Adobe Firefly", color: "text-[#96ACE8]" },
]

// Gallery images
const galleryImages = [
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2x652X1dptpggs3wSOFqnAdMRJOF35.png", 
    alt: "Story Quest - The Journey Begins book cover",
    caption: "The Journey Begins"
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-syu9L6CRO0gF3mU3ekPqkHDRzAwquJ.png", 
    alt: "Winter castle scene with moonlight",
    caption: "Magical Nights"
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnT6Ao3STrLNR7dXV9UYlJw5kt1UPp.png", 
    alt: "Autumn street scene with vintage cars",
    caption: "Autumn Adventures"
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S3AuIrdiAXbvu687dox7i0DSA00g2Q.png", 
    alt: "Winter street scene with snow",
    caption: "Winter Wonderland"
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-61J5MJBGVdceIAwes1Bjz76cwLk815.png", 
    alt: "Summer street scene with vintage cars",
    caption: "Summer Days"
  },
]

// Reveal text component
function RevealText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating shapes background - updated to SQB colors
function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-[#C5D2F5]/30 to-[#ADBFF2]/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0], 
          rotate: [0, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-[#546DB2]/30 to-[#96ACE8]/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0], 
          x: [0, 15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[20%] w-80 h-80 rounded-full bg-gradient-to-br from-[#8A98C1]/30 to-[#ADBFF2]/30 blur-3xl"
      />
    </div>
  )
}

export default function CreativeCoaching() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#F6F5FC] via-white to-[#F6F5FC]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <FloatingShapes />
        
        {/* Decorative brushstroke elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1000 1000">
            <path d="M0,500 Q250,400 500,500 T1000,500" stroke="currentColor" strokeWidth="100" fill="none" className="text-[#546DB2]"/>
            <path d="M0,600 Q250,500 500,600 T1000,600" stroke="currentColor" strokeWidth="80" fill="none" className="text-[#96ACE8]"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-[#546DB2] mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Coaching & Illustrations
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942] leading-tight"
              >
                <span className="block font-serif italic text-[#546DB2]">Children&apos;s Book</span>
                <span className="block mt-2">Illustration</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-xl md:text-2xl text-[#8A98C1] font-light italic"
              >
                Creating Story Art 
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="mt-8 text-lg text-[#2A3659] leading-relaxed max-w-xl"
              >
                Discover a whole new way to create children&apos;s book illustrations. 
                Explore limitless artistic possibilities at your fingertips with digital images.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#546DB2] to-[#2A3659] hover:from-[#2A3659] hover:to-[#1F2942] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#546DB2]/25 hover:shadow-xl hover:shadow-[#546DB2]/30 transition-all duration-300"
                  >
                    Start Creating
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-[#C5D2F5] hover:border-[#546DB2] text-[#2A3659] px-8 py-6 text-lg rounded-full hover:bg-[#EEF2FC] transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right - Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative frame */}
                <motion.div
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-4 bg-gradient-to-br from-[#C5D2F5] via-[#ADBFF2] to-[#96ACE8] rounded-3xl blur-sm"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2x652X1dptpggs3wSOFqnAdMRJOF35.png"
                    alt="Story Quest - The Journey Begins"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2942]/20 to-transparent" />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#546DB2] to-[#2A3659] flex items-center justify-center">
                      <Wand2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1F2942]">Digital Images + Artist</p>
                      <p className="text-xs text-[#8A98C1]">Perfect Harmony</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Using SQB colors */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 h-full w-full"
          className="h-full"
          interactive={false}
          gradientBackgroundStart="rgb(31, 41, 66)"
          gradientBackgroundEnd="rgb(42, 54, 89)"
          firstColor="84, 109, 178"
          secondColor="150, 172, 232"
          thirdColor="173, 191, 242"
          fourthColor="197, 210, 245"
          fifthColor="138, 152, 193"
          blendingValue="screen"
          size="80%"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealText className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-8 h-8 text-[#96ACE8]" />
            </motion.div>
          </RevealText>
          
          <RevealText>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed text-center font-light">
              Digital illustrations are more than technology at work. They embody the creator&apos;s{" "}
              <span className="text-[#96ACE8] font-medium">imagination</span>,{" "}
              <span className="text-[#ADBFF2] font-medium">insight</span>,{" "}
              <span className="text-[#C5D2F5] font-medium">unique story vision</span>,{" "}
              <span className="text-[#EEF2FC] font-medium">emotion</span>, memory, and heart.
            </p>
          </RevealText>
          
          <RevealText className="mt-10">
            <p className="text-lg md:text-xl text-white/70 text-center leading-relaxed">
              The artist shapes the ideas, chooses the mood, guides the details, refines the meaning, 
              and draws from lived experience. Technical tools may help form the finished image, but{" "}
              <span className="italic text-white/90">artist and tools together</span>{" "}
              create its enduring visual and emotional impact.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F6F5FC] to-white overflow-hidden">
        <FloatingShapes className="opacity-25" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <RevealText>
              <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
                Story Quest Process
              </span>
            </RevealText>
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F2942]">
                Story Quest <span className="italic font-serif text-[#546DB2]">Timeline</span>
              </h2>
            </RevealText>
          </div>

          <RevealText>
            <div className="rounded-3xl overflow-hidden border border-[#C5D2F5] bg-white shadow-2xl shadow-[#ADBFF2]/25">
              <img
                src={timelineImage}
                alt="Story Quest timeline from story idea to printed book"
                className="w-full h-auto object-contain"
              />
            </div>
          </RevealText>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <FloatingShapes className="opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <RevealText>
              <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
                AI-Generated Art
              </span>
            </RevealText>
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F2942]">
                Limitless <span className="italic font-serif text-[#546DB2]">Possibilities</span>
              </h2>
            </RevealText>
            <RevealText>
              <p className="mt-6 text-xl text-[#8A98C1] max-w-2xl mx-auto">
                Explore the range of styles and emotions you can create with AI illustration tools.
              </p>
            </RevealText>
          </div>
          
          {/* Creative Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`group relative ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <div className={`${index === 0 ? "aspect-square" : "aspect-[4/5]"}`}>
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2942]/70 via-[#1F2942]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-white font-semibold text-lg">{image.caption}</p>
                      <p className="text-white/70 text-sm mt-1">Created with AI</p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="relative py-28 bg-gradient-to-br from-[#1F2942] via-[#2A3659] to-[#1F2942] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#546DB2]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#96ACE8]/50 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <RevealText>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] uppercase text-[#96ACE8] mb-4">
                <Star className="w-4 h-4 fill-[#96ACE8]/50" />
                Curriculum
                <Star className="w-4 h-4 fill-[#96ACE8]/50" />
              </span>
            </RevealText>
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Learn How to Use <span className="italic font-serif text-[#96ACE8]">AI Tools</span>
              </h2>
            </RevealText>
            <RevealText>
              <p className="mt-6 text-xl text-[#8A98C1] max-w-2xl mx-auto">
                Master the skills to create stunning illustrations quickly and easily
              </p>
            </RevealText>
          </div>
          
          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center ${skill.color}`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#96ACE8] flex-shrink-0" />
                      <p className="text-white/90 text-lg leading-relaxed">
                        {skill.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unique Opportunity Section */}
      <section className="relative py-28 bg-gradient-to-b from-white to-[#F6F5FC] overflow-hidden">
        <FloatingShapes className="opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px]">
                {/* Back image */}
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-72 h-80 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-syu9L6CRO0gF3mU3ekPqkHDRzAwquJ.png"
                    alt="Winter castle scene"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Front image */}
                <motion.div
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-20 left-40 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aTbgF1ye5NkNqP127O4mr9xQTP6bKT.png"
                    alt="Wish Upon a Star"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                
                {/* Decorative circle */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#546DB2] to-[#96ACE8] blur-2xl"
                />
              </div>
            </motion.div>
            
            {/* Right - Content */}
            <div>
              <RevealText>
                <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-[#546DB2] mb-4">
                  Your Creative Journey
                </span>
              </RevealText>
              <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2942] leading-tight">
                  A Unique <span className="italic font-serif text-[#546DB2]">Opportunity</span>
                </h2>
              </RevealText>
              <RevealText>
                <p className="mt-6 text-lg text-[#2A3659] leading-relaxed">
                  Story Quest offers a unique opportunity for those who want to learn to 
                  co-create children&apos;s book illustrations with AI.
                </p>
              </RevealText>
              <RevealText>
                <p className="mt-4 text-lg text-[#2A3659] leading-relaxed">
                  Choose the plan that works best for you - from guided, one-on-one, online 
                  instruction tailored to your individual skill level - to support as needed.
                </p>
              </RevealText>
              
              {/* Features */}
              <RevealText>
                <div className="mt-10 space-y-4">
                  {[
                    { text: "One-on-one personalized instruction", color: "bg-[#546DB2]" },
                    { text: "Tailored to your skill level", color: "bg-[#96ACE8]" },
                    { text: "Flexible support options", color: "bg-[#8A98C1]" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-3 h-3 rounded-full ${feature.color}`} />
                      <p className="text-[#2A3659] font-medium">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </RevealText>
              
              {/* CTA */}
              <RevealText>
                <div className="mt-10">
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-[#546DB2] to-[#2A3659] hover:from-[#2A3659] hover:to-[#1F2942] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#546DB2] via-[#2A3659] to-[#1F2942]" />
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}/>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <RevealText>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-10 h-10 text-[#96ACE8]" />
            </motion.div>
          </RevealText>
          
          <RevealText>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Create{" "}
              <span className="italic font-serif">Magic</span>?
            </h2>
          </RevealText>
          
          <RevealText>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Join Story Quest and discover the joy of co-creating beautiful illustrations 
              that bring your children&apos;s book vision to life.
            </p>
          </RevealText>
          
          <RevealText>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-white text-[#546DB2] hover:bg-[#F6F5FC] px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                >
                  Book a Coaching Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  )
}
