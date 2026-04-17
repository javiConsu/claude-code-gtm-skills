import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <span className="font-bold text-lg">WoterClip</span>
        <Link
          href="/onboarding"
          className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Empezar gratis
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
            Sin Clay · Sin LinkedIn Sales Navigator · Sin stack complejo
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Tu estrategia de ventas<br />basada en señales
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto">
            Detecta quién necesita lo que tú vendes, ahora mismo.
            Señales adaptadas a tu perfil. No genéricas.
          </p>

          <Link
            href="/onboarding"
            className="inline-block bg-black text-white text-lg px-10 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Empieza en 10 minutos →
          </Link>

          <p className="text-sm text-gray-400 mt-4">Gratis · Sin tarjeta · En español</p>
        </div>
      </section>

      {/* Social proof / profiles */}
      <section className="border-t bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-wide font-medium">
            Señales adaptadas para cada perfil
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { perfil: 'Fundador SaaS', señal: 'Empresa que levantó ronda → presupuesto confirmado' },
              { perfil: 'Copywriter', señal: 'Empresa lanzando anuncios → necesita copy urgente' },
              { perfil: 'Consultor', señal: 'Empresa contratando tu rol → prefieren externo' },
              { perfil: 'Dev / Agencia', señal: 'Empresa en ronda Seed → van a necesitar tech' },
              { perfil: 'Consultor de ventas', señal: 'Empresa contratando su primer SDR → necesitan proceso' },
              { perfil: 'Diseñador', señal: 'Empresa con rebranding → identidad visual urgente' },
            ].map(({ perfil, señal }) => (
              <div key={perfil} className="bg-gray-50 rounded-xl p-4 border">
                <p className="font-semibold text-sm mb-1">{perfil}</p>
                <p className="text-xs text-gray-500">{señal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Precios simples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: 'Free', precio: '0€', creditos: '20 créditos al registrarte', desc: 'Para empezar' },
              { plan: 'Starter', precio: '29€/mes', creditos: '300 créditos/mes', desc: 'Para freelances y consultores', highlight: true },
              { plan: 'Growth', precio: '79€/mes', creditos: '1.000 créditos/mes', desc: 'Para founders y agencias' },
            ].map(({ plan, precio, creditos, desc, highlight }) => (
              <div
                key={plan}
                className={`rounded-xl p-6 border ${highlight ? 'border-black bg-black text-white' : 'bg-gray-50'}`}
              >
                <p className="font-bold text-lg mb-1">{plan}</p>
                <p className={`text-3xl font-bold mb-2 ${highlight ? '' : 'text-black'}`}>{precio}</p>
                <p className={`text-sm mb-1 ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>{creditos}</p>
                <p className={`text-xs ${highlight ? 'text-gray-400' : 'text-gray-400'}`}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            + Gana 5 créditos por cada señal donde das feedback · +50 por referir a alguien
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t">
        <h2 className="text-3xl font-bold mb-4">¿A qué esperas?</h2>
        <p className="text-gray-500 mb-8">Tu análisis de mercado en 10 minutos. Sin tarjeta.</p>
        <Link
          href="/onboarding"
          className="inline-block bg-black text-white text-lg px-10 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          Empezar gratis →
        </Link>
      </section>
    </main>
  )
}
