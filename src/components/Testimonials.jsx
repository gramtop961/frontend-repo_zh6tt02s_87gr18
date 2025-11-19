const testimonials = [
  {
    quote:
      'We replaced three internal tools with this platform. The speed and polish are unreal.',
    author: 'Amara Lee',
    role: 'CTO, Nova Labs',
  },
  {
    quote:
      'Went from idea to launch in a weekend. The built-in components saved us weeks.',
    author: 'David Kim',
    role: 'Founder, ShipRight',
  },
  {
    quote:
      'Our team finally focuses on customers instead of plumbing. A true force-multiplier.',
    author: 'Priya Patel',
    role: 'VP Product, Orbit',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
              <blockquote className="text-slate-200/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-slate-200">{t.author}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
