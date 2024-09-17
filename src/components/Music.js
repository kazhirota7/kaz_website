import React from 'react';
import { motion } from 'framer-motion';

const Music = () => {
  const playlists = [
    { name: "Musique Élyséenne", id: "1Xas1jZ5gP5kahopVQKwUL" },
    { name: "Blissful", id: "7i9KckTvcTzpE2dEs86zbt" },
    { name: "Tokyo!", id: "2x4AuCK04cL0usBGq1qrsM" }
  ];

  const recentAlbums = [
    {
      name: "Endlessness",
      artist: "Nala Sinephro",
      id: "51CQQ3tQLRZlZJZ5jcpoGE"
    },
    {
      name: "Imaginal Disk",
      artist: "Magdalena Bay",
      id: "4HTy9WFTYooRjE9giTmzAF"
    },
    {
      name: "Kaputt",
      artist: "Destroyer",
      id: "4sVWj2lb9F8nRg57VFTaf1"
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Music</h1>
      <h2 className="text-2xl font-bold mb-4">Playlists</h2>
      <p className="text-lg mb-6">I release a playlist called "Musique Élyséenne" every few days/weeks, which consists 
        of 13 tracks that I recently discovered. The playlist I have shared on the below is a compilation of all of these 
        playlists I have released. I also have other other playlists of music I listen to based on mood. For more music, 
        check out my Spotify account!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
      
      <h2 className="text-2xl font-bold mb-4">Recently Listened Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentAlbums.map((album) => (
          <motion.div
            key={album.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold p-4">{album.name} by {album.artist}</h3>
            <iframe
              src={`https://open.spotify.com/embed/album/${album.id}`}
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title={`${album.name} by ${album.artist}`}
            ></iframe>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Music;
