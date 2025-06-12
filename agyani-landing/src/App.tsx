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
              <a href="#thoughts" className="text-primary-dark hover:text-primary font-medium">Thoughts</a>
              <a href="#chintan" className="text-primary-dark hover:text-primary font-medium">Chintan</a>
              <a href="#connect" className="text-primary-dark hover:text-primary font-medium">Connect</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex-1 space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold text-primary-dark leading-tight">
              Welcome to <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Agyani</span>
            </h1>
            <p className="text-xl text-primary leading-relaxed">
              A space where thoughts flow freely, ideas take shape, and wisdom finds its voice. Join me on this journey of continuous learning and reflection.
            </p>
            <div className="flex gap-6">
              <a href="#thoughts" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all text-lg font-medium">
                Explore Thoughts
              </a>
              <a href="https://chintan.agyani.me" className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-beige-50 transition-all text-lg font-medium">
                Deep Dive
              </a>
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

        <section id="thoughts" className="mt-32">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">Latest Thoughts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="glass p-8 rounded-xl border border-pastel-blue hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-primary-dark">March 15, 2024</span>
                <span className="text-sm text-primary">5 min read</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">The Art of Learning in Public</h3>
              <p className="text-primary leading-relaxed mb-4">
                Embracing vulnerability and sharing the journey of continuous learning. How documenting the process helps in growth and understanding.
              </p>
              <a href="#" className="text-primary-dark hover:text-primary font-medium inline-flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>

            <article className="glass p-8 rounded-xl border border-pastel-green hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-primary-dark">March 10, 2024</span>
                <span className="text-sm text-primary">8 min read</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Reflections on Growth</h3>
              <p className="text-primary leading-relaxed mb-4">
                Documenting the journey of self-discovery and personal development. Lessons learned and wisdom gained through experience.
              </p>
              <a href="#" className="text-primary-dark hover:text-primary font-medium inline-flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          </div>
        </section>

        <section id="chintan" className="mt-32">
          <div className="glass p-12 rounded-xl border border-pastel-purple text-center">
            <h2 className="text-4xl font-bold text-primary-dark mb-6">Deeper Thoughts</h2>
            <p className="text-xl text-primary leading-relaxed mb-8 max-w-2xl mx-auto">
              For more profound reflections and in-depth explorations, visit Chintan - a space dedicated to deeper contemplation and understanding.
            </p>
            <a 
              href="https://chintan.agyani.me" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all text-lg font-medium"
            >
              Explore Chintan
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
                A space for thoughts, ideas, and continuous learning.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pastel-blue">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#thoughts" className="text-beige-100 hover:text-white transition-colors">Thoughts</a></li>
                <li><a href="#chintan" className="text-beige-100 hover:text-white transition-colors">Chintan</a></li>
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
            <p className="mb-2">Last deployed: {new Date(__DEPLOY_TIME__).toLocaleString()}</p>
            <p>&copy; {new Date().getFullYear()} Agyani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
