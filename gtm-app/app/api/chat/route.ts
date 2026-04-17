import Anthropic from '@anthropic-ai/sdk'
import { ONBOARDING_SYSTEM_PROMPT, DASHBOARD_SYSTEM_PROMPT } from '@/lib/skills'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: Request) {
  const { messages, phase = 'onboarding' } = await req.json()

  const system = phase === 'onboarding' ? ONBOARDING_SYSTEM_PROMPT : DASHBOARD_SYSTEM_PROMPT

  const stream = await client.messages.stream({
    model: 'claude-opus-4-7',
    max_tokens: 4096,
    system,
    messages,
  })

  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === 'content_block_delta' &&
          event.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(event.delta.text))
        }
      }
      controller.close()
    },
    cancel() {
      stream.abort()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  })
}
