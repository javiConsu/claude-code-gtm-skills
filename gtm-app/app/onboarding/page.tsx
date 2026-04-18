'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ChatUI from '@/components/ChatUI'
import CreditsWidget from '@/components/CreditsWidget'

export default function OnboardingPage() {
  const [credits] = useState(20)
  const router = useRouter()

  function handleProfileDetected(profileData: Record<string, unknown>) {
    // Store in localStorage for now (replace with Supabase in production)
    localStorage.setItem('gtm_profile', JSON.stringify(profileData))
    // Redirect to dashboard after a short delay to let the user read the result
    setTimeout(() => router.push('/dashboard'), 3000)
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
        <span className="font-bold">Radar</span>
        <div className="flex items-center gap-4">
          <CreditsWidget credits={credits} />
          <span className="text-xs text-gray-400">Onboarding</span>
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-hidden max-w-2xl w-full mx-auto">
        <ChatUI phase="onboarding" onProfileDetected={handleProfileDetected} />
      </div>
    </div>
  )
}
