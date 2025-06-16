import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import { remark } from "remark"
import html from "remark-html"
import Image from "next/image"

interface Props {
  params: { id: string }
}

export default async function FriendPage({ params }: Props) {
  const id = Number(params.id)
  const friend = await prisma.friend.findUnique({ where: { id } })
  if (!friend) return notFound()

  const processed = await remark().use(html).process(friend.bio || "")
  const bioHtml = processed.toString()

  return (
    <main className="prose">
      <Link href="/friends" className="no-underline text-sm">
        ← Back
      </Link>
      <h1>{friend.name}</h1>
      {friend.avatarUrl && (
        <Image
          src={friend.avatarUrl}
          alt={friend.name}
          width={300}
          height={300}
          className="rounded-2xl mb-4"
        />
      )}
      <article dangerouslySetInnerHTML={{ __html: bioHtml }} />
      <Link
        href={`/friends/${id}/edit`}
        className="inline-block mt-4 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-light"
      >
        Edit profile
      </Link>
    </main>
  )
}
