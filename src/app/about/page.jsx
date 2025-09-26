// app/about/page.jsx

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 min-h-screen">

      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-300">
          Welcome to <span className="font-semibold text-pink-400">MusicWeb</span>, 
          a platform built to connect music lovers with the sounds and stories that inspire them.
        </p>
      </section>


      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-12"></div>


      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-300 text-center">
          Our mission is simple: <span className="text-purple-400">celebrate music</span>, 
          empower artists, and create a community where creativity thrives. 
          We believe that music is more than just sound — 
          it’s <span className="italic text-pink-400">emotion, connection, and culture.</span>
        </p>
      </section>

      <section className="bg-gray-800/40 py-16">
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">🎧 Passion</h3>
            <p className="text-gray-300">We live and breathe music, dedicating ourselves to bringing the best experiences to fans worldwide.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">🌍 Community</h3>
            <p className="text-gray-300">Our platform is built for connection, bringing together artists, listeners, and creators from every corner.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-indigo-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">🚀 Innovation</h3>
            <p className="text-gray-300">We’re constantly evolving, exploring new ways to experience and share music in the digital age.</p>
          </div>
        </div>
      </section>
 
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you’re a fan, an artist, or just someone who loves the rhythm of life, 
          <span className="text-pink-400"> you belong here.</span>
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full font-semibold shadow-md hover:opacity-90 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
