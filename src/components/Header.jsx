import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_50%_-50%,rgba(59,130,246,0.35),transparent)]" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30 flex items-center justify-center">
            <span className="text-blue-300 font-bold">S</span>
          </div>
          <span className="text-white font-semibold tracking-tight">SaaSify</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#cta" className="hover:text-white transition">Get Started</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-200/80 hover:text-white text-sm">Sign in</button>
          <button className="px-4 py-2 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20">
            Start free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Launch your product faster with a beautiful, modern toolkit
            </motion.h1>
            <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
              SaaSify helps teams design, build, and launch in record time. From analytics to billing, everything you need comes out of the box.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100">
                Get started — it’s free
              </button>
              <button className="px-6 py-3 rounded-lg bg-slate-800/60 ring-1 ring-white/10 text-white hover:bg-slate-800">
                Book a demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-300/80">
              <div className="flex -space-x-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-blue-400 to-indigo-500" />
                ))}
              </div>
              <span>Trusted by 2,000+ startups</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur p-4">
              <div className="rounded-lg bg-slate-950/60 ring-1 ring-white/10 p-4">
                {/* Fake dashboard UI */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-40 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/10" />
                  <div className="h-40 rounded-md bg-gradient-to-br from-cyan-400/20 to-blue-400/10" />
                  <div className="h-28 rounded-md bg-gradient-to-br from-teal-400/20 to-emerald-400/10" />
                  <div className="h-28 rounded-md bg-gradient-to-br from-fuchsia-400/20 to-pink-400/10" />
                  <div className="h-28 rounded-md bg-gradient-to-br from-amber-400/20 to-orange-400/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
