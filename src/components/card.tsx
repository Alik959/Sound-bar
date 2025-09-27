"use client";

import { motion } from "framer-motion";

export default function Card({ song }: { song: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      <img
        src={song.album?.cover_medium || "/placeholder.png"}
        alt={song.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="font-semibold text-lg text-gray-900 truncate">
          {song.title}
        </h2>
        <p className="text-sm text-gray-600 truncate">
          {song.artist?.name} · {song.album?.title}
        </p>
        <audio controls className="mt-3 w-full">
          <source src={song.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </motion.div>
  );
}
