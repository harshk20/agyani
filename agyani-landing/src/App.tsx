import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform values for parallax effect
  const y = useTransform(smoothProgress, [0, 1], [0, -300])
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-50 p-8 glass-effect"
        style={{ 
          opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.a 
            href="/" 
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AGYANI
          </motion.a>
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </motion.button>
        </div>
      </motion.nav>

      {/* Full-screen Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center"
      >
        <div className="text-center space-y-12">
          <motion.a 
            href="#projects" 
            className="nav-link block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            PROJECTS
          </motion.a>
          <motion.a 
            href="#about" 
            className="nav-link block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#contact" 
            className="nav-link block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CONTACT
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center p-8 perspective-1000"
        style={{ y, scale }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="hero-text mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            AGYANI
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            A space where thoughts flow freely, ideas take shape, and wisdom finds its voice.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 perspective-1000">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="project-card aspect-[4/3]"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/ganesha.png" alt="Thoughts" className="w-full h-full object-cover" />
              <div className="project-title">THOUGHTS</div>
            </motion.div>
            <motion.div 
              className="project-card aspect-[4/3]"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="text-2xl text-white/50">Coming Soon</span>
              </div>
              <div className="project-title">CHINTAN</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-32 px-8 glass-effect"
        style={{ opacity }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ABOUT
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join me on this journey of continuous learning and reflection. 
            Through writing, teaching, and sharing, I explore the depths of knowledge 
            and wisdom that shape our understanding of the world.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">EMAIL</h3>
              <a href="mailto:gyanam@agyani.me" className="text-xl text-white/70 hover:text-white transition-colors">
                gyanam@agyani.me
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">SOCIAL</h3>
              <div className="space-y-4">
                <a href="#" className="text-xl text-white/70 hover:text-white transition-colors block">Twitter</a>
                <a href="#" className="text-xl text-white/70 hover:text-white transition-colors block">LinkedIn</a>
                <a href="#" className="text-xl text-white/70 hover:text-white transition-colors block">GitHub</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="container mx-auto text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Agyani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
