"use client";

import { useEffect, useState } from "react";
import Card from "@/components/card";

export default function HomePage() {
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch("/api/deezer");
        const data = await res.json();

        if (Array.isArray(data.data)) {
          setSongs(data.data);
        } else {
          console.error("Unexpected response:", data);
          setSongs([]);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
        setSongs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Discover Music</h1>

      {loading ? (
        <p>Loading songs...</p>
      ) : songs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <Card key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <p>No songs available.</p>
      )}
    </main>
  );
}
