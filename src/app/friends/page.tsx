import { prisma } from "@/lib/prisma"
import Link from "next/link"
import Image from "next/image"

export const revalidate = 0 // always fresh

export default async function FriendsPage() {
  const friends = await prisma.friend.findMany({
    orderBy: { name: "asc" }
  })
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">All Friends</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {friends.map((f) => (
          <li key={f.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
            {f.avatarUrl && (
              <Image
                src={f.avatarUrl}
                alt={f.name}
                width={200}
                height={200}
                className="rounded-xl object-cover mb-2 aspect-square"
              />
            )}
            <h2 className="text-xl font-semibold">{f.name}</h2>
            <p className="flex-grow line-clamp-3 text-sm text-gray-600">{f.bio}</p>
            <Link href={`/friends/${f.id}`} className="mt-2 text-primary hover:underline">
              View profile →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
