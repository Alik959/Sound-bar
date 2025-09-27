"use client";

import { useState } from "react";
import Card from "@/components/card";

export default function DeezerSearchPage() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchSongs = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/deezer?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (Array.isArray(data.data)) {
        setSongs(data.data);
      } else {
        setSongs([]);
      }
    } catch (error) {
      console.error("Error fetching Deezer data:", error);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">🎵 Deezer Search</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search songs..."
          className="border rounded px-3 py-2 w-64 text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchSongs()}
        />
        <button
          onClick={searchSongs}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid gap-6 w-full max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {songs.map((song) => (
          <Card key={song.id} song={song} />
        ))}
      </div>

      {!loading && songs.length === 0 && query && (
        <p className="mt-4 text-gray-600">No songs found for "{query}".</p>
      )}
    </main>
  );
}
