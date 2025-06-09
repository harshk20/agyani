import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-800">Agyani</div>
          <div className="space-x-6">
            <a href="#about" className="text-orange-700 hover:text-orange-900">About</a>
            <a href="#services" className="text-orange-700 hover:text-orange-900">Services</a>
            <a href="#contact" className="text-orange-700 hover:text-orange-900">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-orange-900">
              Welcome to <span className="text-orange-600">Agyani</span>
            </h1>
            <p className="text-xl text-orange-800">
              Your journey to knowledge and wisdom begins here. We help you discover, learn, and grow.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/ganesha.png"
              alt="Lord Ganesha"
              className="w-96 h-96 object-contain animate-float"
            />
          </div>
        </div>

        <section id="about" className="mt-32">
          <h2 className="text-3xl font-bold text-orange-900 mb-8">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Our Mission</h3>
              <p className="text-orange-700">
                To empower individuals with knowledge and wisdom through innovative learning solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Our Vision</h3>
              <p className="text-orange-700">
                To create a world where everyone has access to quality education and personal growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Our Values</h3>
              <p className="text-orange-700">
                Integrity, innovation, and inclusivity guide everything we do.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-900 text-white mt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agyani</h3>
              <p className="text-orange-100">
                Empowering minds, enriching lives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-orange-100 hover:text-white">About</a></li>
                <li><a href="#services" className="text-orange-100 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-orange-100 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-orange-100">
                <li>Email: info@agyani.me</li>
                <li>Phone: +1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-100 hover:text-white">Twitter</a>
                <a href="#" className="text-orange-100 hover:text-white">LinkedIn</a>
                <a href="#" className="text-orange-100 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-100">
            <p>&copy; {new Date().getFullYear()} Agyani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
