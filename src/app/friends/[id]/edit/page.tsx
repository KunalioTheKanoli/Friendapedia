"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect, FormEvent } from "react"

export default function EditFriend({ params }: { params: { id: string } }) {
  const router = useRouter()
  const id = params.id
  const [name, setName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    fetch(`/api/friends/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name)
        setAvatarUrl(data.avatarUrl ?? "")
        setBio(data.bio ?? "")
      })
  }, [id])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch(`/api/friends/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, avatarUrl, bio })
    })
    router.push(`/friends/${id}`)
  }

  return (
    <main className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Friend</h1>
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
          Save
        </button>
      </form>
    </main>
  )
}
