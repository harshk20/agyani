import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-beige-100">
      <header className="sticky top-0 z-50 glass">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/agyani.png"
                alt="Agyani Logo"
                className="h-12 w-auto mr-2"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                agyani.me
              </span>
            </div>
            <div className="space-x-8">
              <a href="#about" className="text-primary-dark hover:text-primary font-medium">About</a>
              <a href="#services" className="text-primary-dark hover:text-primary font-medium">Services</a>
              <a href="#contact" className="text-primary-dark hover:text-primary font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold text-primary-dark leading-tight">
              Welcome to <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Agyani</span>
            </h1>
            <p className="text-xl text-primary leading-relaxed">
              Your journey to knowledge and wisdom begins here. We help you discover, learn, and grow.
            </p>
            <div className="flex gap-6">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all text-lg font-medium">
                Get Started
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-beige-50 transition-all text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-slide-in">
            <img
              src="/ganesha.png"
              alt="Lord Ganesha"
              className="w-96 h-96 object-contain animate-float"
            />
          </div>
        </div>

        <section id="about" className="mt-32">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-blue">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-primary leading-relaxed">
                To empower individuals with knowledge and wisdom through innovative learning solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-green">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Our Vision</h3>
              <p className="text-primary leading-relaxed">
                To create a world where everyone has access to quality education and personal growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-purple">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Our Values</h3>
              <p className="text-primary leading-relaxed">
                Integrity, innovation, and inclusivity guide everything we do.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mt-32">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-xl border border-pastel-blue">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Online Learning</h3>
              <p className="text-primary leading-relaxed">
                Access our comprehensive online courses and learn at your own pace.
              </p>
            </div>
            <div className="glass p-8 rounded-xl border border-pastel-green">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Personal Growth</h3>
              <p className="text-primary leading-relaxed">
                Discover tools and resources to help you achieve your personal goals.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-primary-dark text-white mt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/agyani.png"
                  alt="Agyani Logo"
                  className="h-10 w-auto mr-2"
                />
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-pastel-blue to-pastel-purple bg-clip-text text-transparent">
                    agyani.me
                  </span>
                </h3>
              </div>
              <p className="text-beige-100 leading-relaxed">
                Empowering minds, enriching lives.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-beige-100 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-beige-100 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-beige-100 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Contact</h4>
              <ul className="space-y-4 text-beige-100">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>gyanam@agyani.me</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>+45 91 17 82 15</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-beige-100 hover:text-white transition-colors text-lg">Twitter</a>
                <a href="#" className="text-beige-100 hover:text-white transition-colors text-lg">LinkedIn</a>
                <a href="#" className="text-beige-100 hover:text-white transition-colors text-lg">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary mt-12 pt-8 text-center text-beige-100">
            <p>&copy; {new Date().getFullYear()} Agyani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
