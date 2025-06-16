import Link from "next/link"

export default function Home() {
  return (
    <main className="prose">
      <h1>Welcome 👋</h1>
      <p>
        This is <strong>Friend‑a‑pedia</strong> — a collaborative space where we
        celebrate each other with quotes, inside jokes, and fun facts.
      </p>
      <p>
        <Link href="/friends" className="text-primary no-underline hover:underline">
          Browse all friends →
        </Link>
      </p>
    </main>
  )
}
