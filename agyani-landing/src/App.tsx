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
              <a href="#journey" className="text-primary-dark hover:text-primary font-medium">Journey</a>
              <a href="#thoughts" className="text-primary-dark hover:text-primary font-medium">Thoughts</a>
              <a href="#connect" className="text-primary-dark hover:text-primary font-medium">Connect</a>
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
              A journey of continuous learning, growth, and self-discovery. Documenting the path of knowledge and wisdom.
            </p>
            <div className="flex gap-6">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all text-lg font-medium">
                Explore Journey
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-beige-50 transition-all text-lg font-medium">
                Read Latest
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

        <section id="journey" className="mt-32">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">The Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-blue">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Learning</h3>
              <p className="text-primary leading-relaxed">
                Documenting the process of acquiring knowledge and skills across various domains.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-green">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Growth</h3>
              <p className="text-primary leading-relaxed">
                Sharing insights and experiences from personal development and self-improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pastel-purple">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Reflection</h3>
              <p className="text-primary leading-relaxed">
                Contemplating lessons learned and wisdom gained through life's experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="thoughts" className="mt-32">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">Latest Thoughts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-xl border border-pastel-blue">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Learning in Public</h3>
              <p className="text-primary leading-relaxed">
                Sharing the process of learning and growing, embracing vulnerability and continuous improvement.
              </p>
            </div>
            <div className="glass p-8 rounded-xl border border-pastel-green">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Personal Growth</h3>
              <p className="text-primary leading-relaxed">
                Documenting the journey of self-discovery and personal development.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="connect" className="bg-primary-dark text-white mt-32">
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
                A journey of continuous learning and growth.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#journey" className="text-beige-100 hover:text-white transition-colors">Journey</a></li>
                <li><a href="#thoughts" className="text-beige-100 hover:text-white transition-colors">Thoughts</a></li>
                <li><a href="#connect" className="text-beige-100 hover:text-white transition-colors">Connect</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Connect</h4>
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
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Follow the Journey</h4>
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
