'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type Props = {
  phase?: 'onboarding' | 'dashboard'
  onProfileDetected?: (data: Record<string, unknown>) => void
}

export default function ChatUI({ phase = 'onboarding', onProfileDetected }: Props) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(userText: string) {
    if (!userText.trim() || loading) return

    const userMsg: Message = { role: 'user', content: userText }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    let assistantText = ''
    const assistantMsg: Message = { role: 'assistant', content: '' }
    setMessages([...newMessages, assistantMsg])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, phase }),
      })

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantText += decoder.decode(value, { stream: true })
        setMessages([...newMessages, { role: 'assistant', content: assistantText }])
      }

      // Extract profile data if present
      const match = assistantText.match(/<!--PROFILE_DATA:(.*?)-->/)
      if (match && onProfileDetected) {
        try {
          const profileData = JSON.parse(match[1])
          onProfileDetected(profileData)
        } catch {}
      }

      // Store clean message (without the hidden data tag)
      const cleanText = assistantText.replace(/<!--PROFILE_DATA:.*?-->/, '').trim()
      setMessages([...newMessages, { role: 'assistant', content: cleanText }])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  function start() {
    setStarted(true)
    sendMessage('Hola, quiero empezar')
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!started && phase === 'onboarding' && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-2xl font-bold mb-2">Tu estrategia de ventas en 10 minutos</h2>
            <p className="text-gray-500 mb-6 max-w-md">
              7 preguntas. Un análisis de tu mercado. Tus primeros clientes potenciales y un mensaje listo para enviar.
            </p>
            <button
              onClick={start}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Empezar gratis →
            </button>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-black text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-900 rounded-bl-sm'
              }`}
            >
              {msg.content}
              {loading && i === messages.length - 1 && msg.role === 'assistant' && (
                <span className="inline-block w-1 h-4 bg-gray-400 animate-pulse ml-1 align-middle" />
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {(started || phase === 'dashboard') && (
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={loading ? 'Analizando...' : 'Escribe tu respuesta...'}
              disabled={loading}
              className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-gray-800 transition-colors"
            >
              →
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
