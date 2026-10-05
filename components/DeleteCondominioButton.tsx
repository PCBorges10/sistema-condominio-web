'use client'

import { useRouter } from 'next/navigation'

interface DeleteCondominioButtonProps {
  id: number
}

export default function DeleteCondominioButton({
  id
}: DeleteCondominioButtonProps) {
  const router = useRouter()

  async function handleDelete() {
    const confirmar = confirm(
      'Tem certeza que deseja excluir este condomínio?'
    )

    if (!confirmar) {
      return
    }

    const response = await fetch(
      `http://127.0.0.1:3000/condominios/${id}`,
      {
        method: 'DELETE'
      }
    )

    if (response.ok) {
      alert('Condomínio excluído com sucesso!')
      router.refresh()
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
    >
      Excluir
    </button>
  )
}