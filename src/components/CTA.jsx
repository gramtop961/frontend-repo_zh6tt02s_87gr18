export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(59,130,246,0.35),transparent)]" />
          <div className="relative rounded-2xl ring-1 ring-white/10 bg-slate-900/60 backdrop-blur p-10">
            <h3 className="text-3xl font-bold text-white tracking-tight">Start free today</h3>
            <p className="mt-3 text-slate-300/90">No credit card required. Upgrade any time.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Work email"
                className="w-full sm:w-80 px-4 py-3 rounded-lg bg-slate-800/60 ring-1 ring-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-blue-500/50"
              />
              <button type="submit" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20">
                Create account
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-400">By signing up, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
