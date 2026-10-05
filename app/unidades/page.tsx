interface Unidade {
  id: number
  numero: string
  bloco: string
  andar: number
  condominio_id: number
}

export default async function UnidadesPage() {
  const response = await fetch('http://127.0.0.1:3000/unidades', {
    cache: 'no-store'
  })

  const unidades: Unidade[] = await response.json()

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Unidades
      </h1>

      <p className="mt-2 text-gray-600">
        Lista de unidades cadastradas no sistema.
      </p>

      <div className="mt-8 space-y-4">
        {unidades.map((unidade) => (
          <div
            key={unidade.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              Unidade {unidade.numero}
            </h2>

            <p className="mt-2 text-gray-600">
              Bloco: {unidade.bloco}
            </p>

            <p className="text-gray-600">
              Andar: {unidade.andar}
            </p>

            <p className="text-gray-600">
              Condomínio ID: {unidade.condominio_id}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}