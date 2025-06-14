import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">AGYANI</a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl font-bold"
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Full-screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <div className="text-center space-y-8">
            <a href="#projects" className="nav-link block">PROJECTS</a>
            <a href="#about" className="nav-link block">ABOUT</a>
            <a href="#contact" className="nav-link block">CONTACT</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-fade-in">
            AGYANI
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto animate-fade-in">
            A space where thoughts flow freely, ideas take shape, and wisdom finds its voice.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="project-card">
              <img src="/project1.jpg" alt="Project 1" />
              <div className="project-title">THOUGHTS</div>
            </div>
            <div className="project-card">
              <img src="/project2.jpg" alt="Project 2" />
              <div className="project-title">CHINTAN</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16">ABOUT</h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Join me on this journey of continuous learning and reflection. 
            Through writing, teaching, and sharing, I explore the depths of knowledge 
            and wisdom that shape our understanding of the world.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16">CONTACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">EMAIL</h3>
              <a href="mailto:gyanam@agyani.me" className="text-xl text-white/70 hover:text-white">
                gyanam@agyani.me
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">SOCIAL</h3>
              <div className="space-y-4">
                <a href="#" className="text-xl text-white/70 hover:text-white block">Twitter</a>
                <a href="#" className="text-xl text-white/70 hover:text-white block">LinkedIn</a>
                <a href="#" className="text-xl text-white/70 hover:text-white block">GitHub</a>
              </div>
            </div>
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
