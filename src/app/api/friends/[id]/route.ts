import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const friend = await prisma.friend.findUnique({ where: { id } })
  if (!friend) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(friend)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const data = await req.json()
  const updated = await prisma.friend.update({
    where: { id },
    data: {
      name: data.name,
      avatarUrl: data.avatarUrl,
      bio: data.bio,
      versions: {
        create: {
          bio: data.bio
        }
      }
    }
  })
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.friend.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
