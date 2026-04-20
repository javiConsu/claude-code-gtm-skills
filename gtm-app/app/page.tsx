import Link from 'next/link'

const profiles = [
  { perfil: 'Fundador SaaS', señal: 'Empresa levantó ronda → presupuesto confirmado', tag: 'funding' },
  { perfil: 'Copywriter', señal: 'Empresa lanzando anuncios → copy urgente', tag: 'ads' },
  { perfil: 'Consultor', señal: 'Contratando tu rol → prefieren externo', tag: 'hiring' },
  { perfil: 'Dev / Agencia', señal: 'Ronda Seed → necesitan construir tech', tag: 'tech' },
  { perfil: 'Consultor ventas', señal: 'Primer SDR → necesitan proceso antes', tag: 'sales' },
  { perfil: 'Diseñador', señal: 'Rebranding → identidad visual urgente', tag: 'brand' },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#0d0d0d]" style={{ fontFamily: "'Geist', 'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#e0dfd8] bg-[#f5f4f0]">
        <span className="font-semibold text-base tracking-tight">Radar</span>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#888] hidden md:block">Para fundadores y consultores en España</span>
          <Link
            href="/onboarding"
            className="bg-[#0d0d0d] text-[#f5f4f0] text-sm px-5 py-2 rounded-full font-medium hover:bg-[#333] transition-colors"
          >
            Empezar gratis
          </Link>
        </div>
      </nav>

      {/* Hero — left-aligned, asymmetric */}
      <section className="px-8 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8e6de] text-[#555] text-xs font-medium px-3 py-1 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              Señales de compra en tiempo real
            </div>

            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-2xl">
              Detecta quién<br />
              <em className="not-italic text-[#888]">necesita</em> lo que<br />
              vendes. Ahora.
            </h1>

            <p className="text-lg text-[#555] max-w-md mb-10 leading-relaxed">
              Sin Clay. Sin Sales Navigator. Sin stack de 12 herramientas.
              Señales adaptadas a tu perfil. Tu primer mensaje listo en 10 minutos.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/onboarding"
                className="bg-[#0d0d0d] text-[#f5f4f0] text-base px-8 py-3.5 rounded-full font-medium hover:bg-[#333] transition-colors"
              >
                Empieza en 10 minutos →
              </Link>
              <span className="text-sm text-[#999] self-center">Gratis · Sin tarjeta</span>
            </div>
          </div>

          {/* Signal preview card */}
          <div className="hidden md:block w-72 bg-white border border-[#e0dfd8] rounded-2xl p-5 shadow-sm mt-4">
            <p className="text-xs text-[#aaa] font-medium mb-4 uppercase tracking-wide">Señal detectada</p>
            <div className="space-y-3">
              {[
                { company: 'Factorial HR', signal: 'Contrató Head of Sales esta semana', hot: true },
                { company: 'Slashmobility', signal: 'Nueva ronda Serie A — €4M', hot: true },
                { company: 'Genesy', signal: 'Publicó 3 ofertas de SDR', hot: false },
              ].map((item) => (
                <div key={item.company} className="flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${item.hot ? 'bg-orange-400' : 'bg-[#ddd]'}`}></span>
                  <div>
                    <p className="text-sm font-medium leading-tight">{item.company}</p>
                    <p className="text-xs text-[#888] leading-tight">{item.signal}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#f0ede8]">
              <p className="text-xs text-[#aaa]">Actualizado hace 3 min · 14 señales hoy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles — bento asymmetric */}
      <section className="px-8 py-16 border-t border-[#e0dfd8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#aaa] uppercase tracking-widest font-medium mb-8">
            Señales adaptadas por perfil
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {profiles.map(({ perfil, señal }) => (
              <div
                key={perfil}
                className="bg-white border border-[#e8e6de] rounded-xl p-4 hover:border-[#0d0d0d] transition-colors group"
              >
                <p className="font-semibold text-sm mb-2 group-hover:text-[#0d0d0d]">{perfil}</p>
                <p className="text-xs text-[#999] leading-snug">{señal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — horizontal steps */}
      <section className="px-8 py-16 border-t border-[#e0dfd8] bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#aaa] uppercase tracking-widest font-medium mb-10">Cómo funciona</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', title: '7 preguntas', body: 'Describes qué vendes y a quién. Sin jerga técnica. Como contárselo a un amigo.' },
              { n: '02', title: 'Tu perfil de señales', body: 'Detectamos automáticamente qué señales de compra son relevantes para tu negocio concreto.' },
              { n: '03', title: 'Primer mensaje listo', body: 'Recibes tu análisis de mercado, los primeros leads y un mensaje personalizado para enviar mañana.' },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <span className="text-xs text-[#bbb] font-mono mb-3 block">{n}</span>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-8 py-16 border-t border-[#e0dfd8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#aaa] uppercase tracking-widest font-medium mb-10">Precios</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { plan: 'Free', precio: '0€', creditos: '20 créditos al registrarte', desc: 'Para empezar y validar', highlight: false },
              { plan: 'Starter', precio: '29€', sub: '/mes', creditos: '300 créditos/mes', desc: 'Freelances y consultores', highlight: true },
              { plan: 'Growth', precio: '79€', sub: '/mes', creditos: '1.000 créditos/mes', desc: 'Founders y agencias', highlight: false },
            ].map(({ plan, precio, sub, creditos, desc, highlight }) => (
              <div
                key={plan}
                className={`rounded-2xl p-6 border ${
                  highlight
                    ? 'bg-[#0d0d0d] text-[#f5f4f0] border-[#0d0d0d]'
                    : 'bg-white border-[#e0dfd8]'
                }`}
              >
                <p className={`text-xs font-medium uppercase tracking-widest mb-4 ${highlight ? 'text-[#888]' : 'text-[#aaa]'}`}>
                  {plan}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold tracking-tight">{precio}</span>
                  {sub && <span className={`text-sm ${highlight ? 'text-[#888]' : 'text-[#aaa]'}`}>{sub}</span>}
                </div>
                <p className={`text-xs mb-4 ${highlight ? 'text-[#666]' : 'text-[#aaa]'}`}>{creditos}</p>
                <p className={`text-sm ${highlight ? 'text-[#ccc]' : 'text-[#555]'}`}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#aaa] mt-5">
            +5 créditos por feedback en cada señal · +50 por referir a alguien
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-8 py-20 border-t border-[#e0dfd8] bg-[#0d0d0d] text-[#f5f4f0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Tu análisis de mercado<br />en 10 minutos.</h2>
            <p className="text-[#888] text-sm">Sin tarjeta. Sin stack complejo.</p>
          </div>
          <Link
            href="/onboarding"
            className="bg-[#f5f4f0] text-[#0d0d0d] text-base px-8 py-3.5 rounded-full font-medium hover:bg-white transition-colors flex-shrink-0"
          >
            Empezar gratis →
          </Link>
        </div>
      </section>

    </main>
  )
}
