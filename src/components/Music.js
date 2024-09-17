import React from 'react';
import { motion } from 'framer-motion';

const Music = () => {
  const playlists = [
    { name: "Favorite Songs", id: "37i9dQZF1DXcBWIGoYBM5M" },
    { name: "Chill Vibes", id: "37i9dQZF1DX4WYpdgoIcn6" },
    { name: "Workout Mix", id: "37i9dQZF1DX76Wlfdnj7AP" }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Music</h1>
      <p className="text-xl mb-6">Here are some of my favorite Spotify playlists:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold p-4">{playlist.name}</h2>
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title={playlist.name}
            ></iframe>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Music;
