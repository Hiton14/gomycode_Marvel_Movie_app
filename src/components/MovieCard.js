import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden w-64">
      <img src={movie.posterURL} alt={movie.title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title} ({movie.year})</h3>
        <p className="text-sm italic">{movie.genre}</p>
        <p className="text-sm mt-2">{movie.description}</p>
        <p className="mt-2 font-semibold">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;