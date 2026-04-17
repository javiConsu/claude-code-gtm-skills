'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ChatUI from '@/components/ChatUI'
import CreditsWidget from '@/components/CreditsWidget'

type Profile = {
  perfil_tipo: string
  señal_estrella: string
  señales_activas: string[]
  keywords: string[]
  icp: { empresa: string; persona: string; excluir: string }
}

const PERFIL_LABELS: Record<string, string> = {
  FUNDADOR: 'Fundador',
  CONSULTOR: 'Consultor',
  COPYWRITER: 'Copywriter / Content',
  DESARROLLADOR: 'Desarrollador / Agencia Tech',
  CONSULTOR_VENTAS: 'Consultor de Ventas',
  DISEÑADOR: 'Diseñador / Creativo',
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [credits] = useState(30) // 20 registro + 10 onboarding completado
  const [activeTab, setActiveTab] = useState<'chat' | 'perfil'>('chat')

  useEffect(() => {
    const stored = localStorage.getItem('gtm_profile')
    if (stored) {
      try {
        setProfile(JSON.parse(stored))
      } catch {}
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
        <Link href="/" className="font-bold">WoterClip</Link>
        <div className="flex items-center gap-4">
          <CreditsWidget credits={credits} />
          {profile && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {PERFIL_LABELS[profile.perfil_tipo] ?? profile.perfil_tipo}
            </span>
          )}
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b bg-white px-6">
        <button
          onClick={() => setActiveTab('chat')}
          className={`py-3 text-sm font-medium mr-6 border-b-2 transition-colors ${
            activeTab === 'chat' ? 'border-black text-black' : 'border-transparent text-gray-400'
          }`}
        >
          Buscar clientes
        </button>
        <button
          onClick={() => setActiveTab('perfil')}
          className={`py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'perfil' ? 'border-black text-black' : 'border-transparent text-gray-400'
          }`}
        >
          Mi perfil
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'chat' && (
          <div className="h-full max-w-2xl w-full mx-auto">
            <ChatUI phase="dashboard" />
          </div>
        )}

        {activeTab === 'perfil' && (
          <div className="max-w-2xl mx-auto p-6 space-y-6">
            {profile ? (
              <>
                <div className="bg-white border rounded-xl p-6">
                  <h2 className="font-bold text-lg mb-4">Tu perfil activo</h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Tipo de perfil</span>
                      <p className="font-medium">{PERFIL_LABELS[profile.perfil_tipo] ?? profile.perfil_tipo}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Señal estrella</span>
                      <p className="font-medium">{profile.señal_estrella}</p>
                    </div>
                    {profile.señales_activas?.length > 0 && (
                      <div>
                        <span className="text-gray-500">Señales activas</span>
                        <ul className="mt-1 space-y-1">
                          {profile.señales_activas.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {profile.icp && (
                  <div className="bg-white border rounded-xl p-6">
                    <h2 className="font-bold text-lg mb-4">Tu cliente ideal</h2>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-500">Empresa</span>
                        <p>{profile.icp.empresa}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Persona</span>
                        <p>{profile.icp.persona}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">No encaja</span>
                        <p className="text-red-600">{profile.icp.excluir}</p>
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  href="/onboarding"
                  className="block text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Actualizar mi perfil →
                </Link>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-4">No tienes perfil aún.</p>
                <Link
                  href="/onboarding"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium"
                >
                  Hacer el análisis inicial
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
