'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function EditarMoradorPage() {
  const params = useParams()
  const router = useRouter()

  const id = params.id

  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    tipo: '',
    unidade_id: ''
  })

  useEffect(() => {
    async function carregarMorador() {
      const response = await fetch(
        `http://127.0.0.1:3000/moradores/${id}`
      )

      const data = await response.json()

      if (data.length > 0) {
        setForm({
          nome: data[0].nome,
          cpf: data[0].cpf,
          telefone: data[0].telefone,
          email: data[0].email,
          tipo: data[0].tipo,
          unidade_id: String(data[0].unidade_id)
        })
      }
    }

    carregarMorador()
  }, [id])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const response = await fetch(
      `http://127.0.0.1:3000/moradores/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: form.nome,
          cpf: form.cpf,
          telefone: form.telefone,
          email: form.email,
          tipo: form.tipo,
          unidade_id: Number(form.unidade_id)
        })
      }
    )

    if (response.ok) {
      alert('Morador atualizado com sucesso!')
      router.push('/moradores')
      router.refresh()
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Editar Morador
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid max-w-2xl gap-4 rounded-xl bg-white p-6 shadow"
      >
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="tipo"
          placeholder="Tipo"
          value={form.tipo}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="unidade_id"
          placeholder="ID da unidade"
          value={form.unidade_id}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <button
          type="submit"
          className="rounded bg-black px-4 py-3 text-white"
        >
          Salvar alterações
        </button>
      </form>
    </main>
  )
}