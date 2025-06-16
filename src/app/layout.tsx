import "./globals.css"
import { ReactNode } from "react"
import Link from "next/link"

export const metadata = {
  title: "Friend‑a‑pedia",
  description: "A playful wiki dedicated to amazing friends."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-4">
        <header className="mb-8 flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            🤝 Friend‑a‑pedia
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="/friends" className="hover:underline">
              Friends
            </Link>
            <Link
              href="/friends/new"
              className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary-light transition"
            >
              Add Friend
            </Link>
          </nav>
        </header>
        {children}
        <footer className="mt-16 text-sm text-gray-400">
          Built with Next.js • Prisma • Tailwind
        </footer>
      </body>
    </html>
  )
}
