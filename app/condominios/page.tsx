


import Link from 'next/link'
import DeleteCondominioButton from '@/components/DeleteCondominioButton'


interface Condominio {
  id: number
  nome: string
  cnpj: string
  endereco: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  telefone: string
  email: string
}

export default async function CondominiosPage() {
  const response = await fetch('http://127.0.0.1:3000/condominios', {
    cache: 'no-store'
  })

  const condominios: Condominio[] = await response.json()

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Condomínios
      </h1>
      <Link
        href="/condominios/novo"
        className="mt-6 inline-block rounded bg-black px-4 py-3 text-white"
      >
        + Novo condomínio
      </Link>
      <p className="mt-2 text-gray-600">
        Lista de condomínios cadastrados no sistema.
      </p>

      <div className="mt-8 space-y-4">
        {condominios.map((condominio) => (
          <div
            key={condominio.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {condominio.nome}
            </h2>

            <p className="mt-2 text-gray-600">
              {condominio.cidade} - {condominio.estado}
            </p>

            <p className="text-gray-600">
              CNPJ: {condominio.cnpj}
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href={`/condominios/${condominio.id}/editar`}
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                Editar
              </Link>

              <DeleteCondominioButton id={condominio.id} />
            </div>
          </div>

        ))}
      </div>
    </main>
  )
}