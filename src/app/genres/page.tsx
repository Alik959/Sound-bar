"use client";

import { useState } from "react";

export default function GenresPage() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  
  const searchSongs = async () => {
    if (!query) return;
    setLoading(true);

    const res = await fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=79cf60ef&format=json&limit=10&search=${query}`
    );
    const data = await res.json();
    setSongs(data.results || []);
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">🎵 SoundBar search</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search songs..."
          className="border rounded px-3 py-2 w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchSongs}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid gap-4 w-full max-w-2xl">
        {songs.map((song) => (
          <div
            key={song.id}
            className="border rounded-lg p-4 flex items-center gap-4 shadow"
          >
            <img
              src={song.album_image || "/placeholder.png"}
              alt={song.name}
              className="w-16 h-16 rounded"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{song.name}</h2>
              <p className="text-sm text-gray-600">{song.artist_name}</p>
              <audio controls className="mt-2 w-full">
                <source src={song.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}