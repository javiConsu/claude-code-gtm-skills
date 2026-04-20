'use client'

type Props = {
  credits: number
}

export default function CreditsWidget({ credits }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <span className="font-medium">{credits}</span>
      <span className="text-gray-500">créditos</span>
    </div>
  )
}
