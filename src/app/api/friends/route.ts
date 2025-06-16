import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  const friends = await prisma.friend.findMany({ orderBy: { name: "asc" } })
  return NextResponse.json(friends)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const friend = await prisma.friend.create({
    data: {
      name: data.name,
      avatarUrl: data.avatarUrl,
      bio: data.bio
    }
  })
  return NextResponse.json(friend, { status: 201 })
}
