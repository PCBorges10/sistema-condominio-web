import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sistema Condominial',
  description: 'Sistema de gerenciamento condominial'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-gray-900 text-white">
          <nav className="mx-auto flex max-w-7xl items-center gap-8 px-10 py-4">
            <Link
              href="/"
              className="text-xl font-bold"
            >
              Sistema Condominial
            </Link>

            <Link
              href="/"
              className="hover:text-gray-300"
            >
              Início
            </Link>

            <Link
              href="/condominios"
              className="hover:text-gray-300"
            >
              Condomínios
            </Link>

            <Link
              href="/unidades"
              className="hover:text-gray-300"
            >
              Unidades
            </Link>

            <Link
              href="/moradores"
              className="hover:text-gray-300"
            >
              Moradores
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}