import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Spring animation for menu
  const menuSpring = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 300, friction: 30 }
  })

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-50 p-8"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.a 
            href="/" 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AGYANI
          </motion.a>
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </motion.button>
        </div>
      </motion.nav>

      {/* Full-screen Menu */}
      <animated.div 
        style={menuSpring}
        className="fixed inset-0 bg-black z-40 flex items-center justify-center"
      >
        <div className="text-center space-y-8">
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
      </animated.div>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center p-8 perspective-1000"
        style={{ y, scale }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-8"
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
            className="text-4xl font-bold mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/ganesha.png" alt="Thoughts" className="object-contain bg-white/5" />
              <div className="project-title">THOUGHTS</div>
            </motion.div>
            <motion.div 
              className="project-card"
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
        className="py-32 px-8 bg-white/5"
        style={{ opacity }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold mb-16"
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
            className="text-4xl font-bold mb-16"
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
              <a href="mailto:gyanam@agyani.me" className="text-xl text-white/70 hover:text-white">
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
                <a href="#" className="text-xl text-white/70 hover:text-white block">Twitter</a>
                <a href="#" className="text-xl text-white/70 hover:text-white block">LinkedIn</a>
                <a href="#" className="text-xl text-white/70 hover:text-white block">GitHub</a>
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
