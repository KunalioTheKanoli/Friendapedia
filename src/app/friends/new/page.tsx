"use client"

import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"

export default function NewFriend() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, avatarUrl, bio })
    })
    const friend = await res.json()
    router.push(`/friends/${friend.id}`)
  }

  return (
    <main className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Friend</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded-lg border"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Avatar URL</label>
          <input
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="w-full p-2 rounded-lg border"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Bio (Markdown)</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={6}
            className="w-full p-2 rounded-lg border"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded-lg hover:bg-primary-light"
        >
          Create
        </button>
      </form>
    </main>
  )
}
