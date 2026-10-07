'use client'

import { useRouter } from 'next/navigation'

interface DeleteUnidadeButtonProps {
  id: number
}

export default function DeleteUnidadeButton({
  id
}: DeleteUnidadeButtonProps) {
  const router = useRouter()

  async function handleDelete() {
    const confirmar = confirm(
      'Tem certeza que deseja excluir esta unidade?'
    )

    if (!confirmar) {
      return
    }

    const response = await fetch(
      `http://127.0.0.1:3000/unidades/${id}`,
      {
        method: 'DELETE'
      }
    )

    if (response.ok) {
      alert('Unidade excluída com sucesso!')
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