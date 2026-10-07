'use client'

import { useRouter } from 'next/navigation'

interface DeleteMoradorButtonProps {
  id: number
}

export default function DeleteMoradorButton({
  id
}: DeleteMoradorButtonProps) {
  const router = useRouter()

  async function handleDelete() {
    const confirmar = confirm(
      'Tem certeza que deseja excluir este morador?'
    )

    if (!confirmar) {
      return
    }

    const response = await fetch(
      `http://127.0.0.1:3000/moradores/${id}`,
      {
        method: 'DELETE'
      }
    )

    if (response.ok) {
      alert('Morador excluído com sucesso!')
      router.refresh()
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-4 py-2 text-white"
    >
      Excluir
    </button>
  )
}