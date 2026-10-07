'use client'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NovaUnidadePage() {
  const router = useRouter()

  const [form, setForm] = useState({
    numero: '',
    bloco: '',
    andar: '',
    condominio_id: ''
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:3000/unidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero: form.numero,
        bloco: form.bloco,
        andar: Number(form.andar),
        condominio_id: Number(form.condominio_id)
      })
    })

    if (response.ok) {
      alert('Unidade cadastrada com sucesso!')
      router.push('/unidades')
      router.refresh()
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <BackButton />

      <h1 className="text-3xl font-bold text-gray-900">
        Nova Unidade
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid max-w-2xl gap-4 rounded-xl bg-white p-6 shadow"
      >
        <input
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="bloco"
          placeholder="Bloco"
          value={form.bloco}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="andar"
          placeholder="Andar"
          value={form.andar}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="condominio_id"
          placeholder="ID do condomínio"
          value={form.condominio_id}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <button
          type="submit"
          className="rounded bg-black px-4 py-3 text-white"
        >
          Cadastrar
        </button>
      </form>
    </main>
  )
}