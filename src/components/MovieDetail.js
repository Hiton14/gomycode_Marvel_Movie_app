import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[parseInt(id)];

  if (!movie) return <div className="p-4">Movie not found.</div>;

  return (
    <div className="min-h-screen p-4 text-gray-900 dark:text-white">
      <img src={movie.posterURL} alt={movie.title} className="w-full max-w-md mx-auto mb-4 rounded shadow" />
      <h1 className="text-3xl font-bold">{movie.title} ({movie.year})</h1>
      <p className="italic text-lg">{movie.genre}</p>
      <p className="mt-2">{movie.description}</p>
      <p className="mt-4 text-xl">⭐ {movie.rating}</p>
      <div className="my-4">
        <iframe
          width="100%"
          height="400"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
    </div>
  );
};

export default MovieDetail;