


import Link from 'next/link'



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Sistema Condominial
      </h1>

      <p className="mt-2 text-gray-600">
        Painel de gerenciamento do condomínio
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <Link href="/condominios">
          <div className="rounded-xl bg-white p-6 shadow cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Condomínios</h2>

            <p className="mt-2 text-gray-600">
              Gerencie os condomínios cadastrados.
            </p>
          </div>
        </Link>

        <Link href="/unidades">
          <div className="rounded-xl bg-white p-6 shadow cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Unidades</h2>

            <p className="mt-2 text-gray-600">
              Consulte e gerencie as unidades.
            </p>
          </div>
        </Link>

        <Link href="/moradores">
          <div className="rounded-xl bg-white p-6 shadow cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Moradores</h2>

            <p className="mt-2 text-gray-600">
              Consulte e gerencie os moradores.
            </p>
          </div>
        </Link>

      </div>
    </main>
  )
}