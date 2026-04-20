import Link from 'next/link'

const capabilities = [
  'Detecta empresas con ronda reciente',
  'Encuentra quién está contratando tu rol',
  'Monitoriza cambios de liderazgo',
  'Analiza señales de competidores',
  'Genera secuencias personalizadas',
  'Identifica dolor en comunidades',
  'Adapta señales a tu perfil',
  'Escribe el primer mensaje',
  'Qualifica leads automáticamente',
  'Busca champions que cambiaron de empresa',
  'Detecta intención de compra',
  'Crea campañas por hipótesis',
]

const testimonials = [
  {
    quote: 'En 10 minutos tenía mis señales de compra configuradas y el primer mensaje listo para enviar. Nunca había conseguido clientes tan rápido.',
    name: 'Marcos T.',
    role: 'Consultor de estrategia',
  },
  {
    quote: 'Llevaba meses intentando hacer outbound. Con Radar entendí qué señales buscar y por qué. La primera semana cerré dos reuniones.',
    name: 'Laura M.',
    role: 'Freelance UX Design',
  },
  {
    quote: 'Sin Clay, sin Sales Navigator, sin stack de 8 herramientas. Solo Radar y un mensaje bien escrito. Así de simple.',
    name: 'Diego R.',
    role: 'Fundador SaaS B2B',
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#ededed]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/[0.06]">
        <span className="font-semibold text-base text-white tracking-tight">Radar</span>
        <div className="flex items-center gap-6">
          <span className="text-sm text-white/40 hidden md:block">Para fundadores · consultores · freelances</span>
          <Link
            href="/onboarding"
            className="bg-[#f59e0b] text-[#080808] text-sm px-5 py-2 rounded-full font-semibold hover:bg-[#fbbf24] transition-colors"
          >
            Empezar gratis
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-24 pb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] inline-block"></span>
          Señales de compra en tiempo real
        </div>

        <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
          Detecta quién necesita<br />
          lo que vendes.{' '}
          <span className="text-[#f59e0b]">Ahora mismo.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Señales de compra adaptadas a tu perfil. Tu análisis de mercado y primer mensaje listos en 10 minutos. Sin Clay. Sin Sales Navigator.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/onboarding"
            className="bg-[#f59e0b] text-[#080808] text-base px-8 py-3.5 rounded-full font-semibold hover:bg-[#fbbf24] transition-colors"
          >
            Empieza en 10 minutos →
          </Link>
          <span className="text-sm text-white/30">Gratis · Sin tarjeta · En español</span>
        </div>
      </section>

      {/* Capabilities chip cloud */}
      <section className="px-6 md:px-10 py-16 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium text-center mb-8">
            Lo que Radar hace por ti
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="bg-white/[0.05] border border-white/[0.08] text-white/70 text-sm px-4 py-2 rounded-full hover:bg-white/[0.09] hover:text-white transition-colors cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-12">Cómo funciona</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                title: '7 preguntas, sin jerga',
                body: 'Describes qué vendes y a quién. Sin términos técnicos. Como contárselo a un amigo que sabe de ventas.',
              },
              {
                n: '02',
                title: 'Tu perfil de señales',
                body: 'Detectamos automáticamente qué señales de compra tienen sentido para tu negocio. No genéricas — las tuyas.',
              },
              {
                n: '03',
                title: 'Primer mensaje listo',
                body: 'Recibes tus primeros leads cualificados y un mensaje personalizado para enviar mañana mismo.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="border-t border-white/[0.08] pt-6">
                <span className="text-xs text-white/20 font-mono mb-4 block">{n}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-10 py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-12">Lo que dicen los usuarios</p>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-sm text-white/70 leading-relaxed mb-6">"{quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/40">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-10 py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-12">Precios</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { plan: 'Free', precio: '0€', sub: '', creditos: '20 créditos al registrarte', desc: 'Para empezar y validar', highlight: false },
              { plan: 'Starter', precio: '29€', sub: '/mes', creditos: '300 créditos/mes', desc: 'Freelances y consultores', highlight: true },
              { plan: 'Growth', precio: '79€', sub: '/mes', creditos: '1.000 créditos/mes', desc: 'Founders y agencias', highlight: false },
            ].map(({ plan, precio, sub, creditos, desc, highlight }) => (
              <div
                key={plan}
                className={`rounded-2xl p-6 border ${
                  highlight
                    ? 'bg-[#f59e0b] text-[#080808] border-[#f59e0b]'
                    : 'bg-white/[0.03] border-white/[0.08]'
                }`}
              >
                <p className={`text-xs font-medium uppercase tracking-widest mb-4 ${highlight ? 'text-[#080808]/60' : 'text-white/30'}`}>
                  {plan}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-bold tracking-tight ${highlight ? 'text-[#080808]' : 'text-white'}`}>{precio}</span>
                  {sub && <span className={`text-sm ${highlight ? 'text-[#080808]/50' : 'text-white/30'}`}>{sub}</span>}
                </div>
                <p className={`text-xs mb-4 ${highlight ? 'text-[#080808]/50' : 'text-white/30'}`}>{creditos}</p>
                <p className={`text-sm ${highlight ? 'text-[#080808]/70' : 'text-white/50'}`}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/20 mt-5">
            +5 créditos por feedback en cada señal · +50 por referir a alguien
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-10 py-24 border-t border-white/[0.06] text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white mb-4">
          Tu análisis de mercado<br />en 10 minutos.
        </h2>
        <p className="text-white/40 text-base mb-10">Sin tarjeta. Sin stack complejo. Sin excusas.</p>
        <Link
          href="/onboarding"
          className="inline-block bg-[#f59e0b] text-[#080808] text-base px-10 py-4 rounded-full font-semibold hover:bg-[#fbbf24] transition-colors"
        >
          Empezar gratis →
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-6 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-sm text-white/20 font-medium">Radar</span>
        <span className="text-xs text-white/20">Detecta señales. Cierra clientes.</span>
      </footer>

    </main>
  )
}
