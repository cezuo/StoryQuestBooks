import { motion } from "framer-motion"
import { Mail, Send, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <div className="min-h-screen bg-[#C5D2F5]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#F6F5FC]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#546DB2]/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-[#546DB2] mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1F2942] mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-[#2A3659]/80 max-w-xl mx-auto leading-relaxed">
              Ready to start creating? I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F6F5FC]/80 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-xl shadow-[#2A3659]/10 border border-[#ADBFF2]/50"
          >
            {/* Email - Primary CTA */}
            <div className="text-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#546DB2] mb-6"
              >
                <Mail className="w-7 h-7 text-[#F6F5FC]" />
              </motion.div>
              <h2 className="text-2xl font-serif text-[#1F2942] mb-3">
                Email Me
              </h2>
              <p className="text-[#8A98C1] mb-6">
                The best way to reach me for inquiries and consultations.
              </p>
              <motion.a
                href="mailto:jakairys@storyquestbooks.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#546DB2] text-[#F6F5FC] px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-[#546DB2]/30 hover:shadow-xl hover:bg-[#8A98C1] transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                jakairys@storyquestbooks.com
              </motion.a>
            </div>

            {/* Divider */}
            <div className="border-t border-[#C5D2F5] my-10" />

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center md:text-left"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EEF2FC] mb-4">
                  <MapPin className="w-5 h-5 text-[#546DB2]" />
                </div>
                <h3 className="text-lg font-medium text-[#1F2942] mb-2">
                  Location
                </h3>
                <p className="text-[#8A98C1]">
                  Available for remote collaboration worldwide
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center md:text-left"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EEF2FC] mb-4">
                  <Clock className="w-5 h-5 text-[#546DB2]" />
                </div>
                <h3 className="text-lg font-medium text-[#1F2942] mb-2">
                  Response Time
                </h3>
                <p className="text-[#8A98C1]">
                  I typically respond within 24-48 hours
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Simple footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#8A98C1] text-sm mt-10"
          >
            Looking forward to hearing about your story.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
export default Contact