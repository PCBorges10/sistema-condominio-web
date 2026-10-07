'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-6 rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
    >
      ← Voltar
    </button>
  )
}