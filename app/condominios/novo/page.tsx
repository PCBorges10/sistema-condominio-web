'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BackButton from '@/components/BackButton'

export default function NovoCondominioPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    email: ''
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:3000/condominios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      alert('Condomínio cadastrado com sucesso!')
      router.push('/condominios')
      router.refresh()
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <BackButton />

      <h1 className="text-3xl font-bold text-gray-900">
        Novo Condomínio
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
          name="cnpj"
          placeholder="CNPJ"
          value={form.cnpj}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="bairro"
          placeholder="Bairro"
          value={form.bairro}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="estado"
          placeholder="Estado"
          value={form.estado}
          onChange={handleChange}
          className="rounded border p-3"
        />

        <input
          name="cep"
          placeholder="CEP"
          value={form.cep}
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