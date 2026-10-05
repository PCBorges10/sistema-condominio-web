interface Morador {
  id: number
  nome: string
  cpf: string
  telefone: string
  email: string
  tipo: string
  unidade_id: number
}

export default async function MoradoresPage() {
  const response = await fetch('http://127.0.0.1:3000/moradores', {
    cache: 'no-store'
  })

  const moradores: Morador[] = await response.json()

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Moradores
      </h1>

      <p className="mt-2 text-gray-600">
        Lista de moradores cadastrados no sistema.
      </p>

      <div className="mt-8 space-y-4">
        {moradores.map((morador) => (
          <div
            key={morador.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {morador.nome}
            </h2>

            <p className="mt-2 text-gray-600">
              CPF: {morador.cpf}
            </p>

            <p className="text-gray-600">
              Tipo: {morador.tipo}
            </p>

            <p className="text-gray-600">
              Unidade ID: {morador.unidade_id}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}