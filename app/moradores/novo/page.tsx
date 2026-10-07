'use client'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NovoMoradorPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    tipo: '',
    unidade_id: ''
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:3000/moradores', {
      method: 'POST',
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
    })

    if (response.ok) {
      alert('Morador cadastrado com sucesso!')
      router.push('/moradores')
      router.refresh()
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
       <BackButton />
      <h1 className="text-3xl font-bold text-gray-900">
        Novo Morador
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
          placeholder="Tipo: proprietario ou inquilino"
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
          Cadastrar
        </button>
      </form>
    </main>
  )
}
