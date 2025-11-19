import { Rocket, Shield, Gauge, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Blazing fast setup',
    desc: 'Go from zero to production in minutes with sensible defaults and battle-tested patterns.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, RBAC, audit logs, and encryption at rest. Compliance-ready from day one.'
  },
  {
    icon: Gauge,
    title: 'Real-time analytics',
    desc: 'Track adoption, retention, and revenue with live dashboards and alerts.'
  },
  {
    icon: CreditCard,
    title: 'Billing built-in',
    desc: 'Subscriptions, trials, coupons, and proration. Works with your favorite provider.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Everything you need to launch</h2>
          <p className="mt-3 text-slate-300/90">Ship faster without sacrificing quality. Our toolkit covers the whole lifecycle.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6 hover:bg-slate-800 transition">
              <div className="h-12 w-12 rounded-xl bg-blue-500/15 ring-1 ring-blue-400/30 flex items-center justify-center text-blue-300 group-hover:scale-105 transition">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
