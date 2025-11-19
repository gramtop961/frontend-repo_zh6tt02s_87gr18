import Header from './components/Header'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Features />
      <Testimonials />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-blue-500/20 ring-1 ring-blue-400/30 flex items-center justify-center">
              <span className="text-blue-300 text-sm font-bold">S</span>
            </div>
            <span className="text-slate-300 text-sm">© {new Date().getFullYear()} SaaSify, Inc.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
