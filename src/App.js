import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import Filter from './components/Filter';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const [movies, setMovies] = useState([
    {
      title: 'Iron Man',
      description: 'Tony Stark builds a high-tech suit of armor to escape captivity and become Iron Man.',
      posterURL: 'https://i.pinimg.com/736x/52/be/e1/52bee1ca0ef72474b398b4b23ae2d911.jpg',
      rating: 7.9,
      genre: 'Action',
      year: 2008,
      trailerLink: 'https://www.youtube.com/embed/8ugaeA-nMTc'
    },
    {
      title: 'The Avengers',
      description: "Earth's mightiest heroes must come together to stop Loki and his alien army.",
      posterURL: 'https://i.pinimg.com/736x/3c/b4/28/3cb428f7b5e7246ee9c2727862e423e4.jpg',
      rating: 8.0,
      genre: 'Action',
      year: 2012,
      trailerLink: 'https://www.youtube.com/embed/eOrNdBpGMv8'
    },
    {
      title: 'Black Panther',
      description: "T'Challa returns home to Wakanda to take his rightful place as king.",
      posterURL: 'https://i.pinimg.com/736x/16/9d/c0/169dc0d7ae339ee4d70ffec16cb94c28.jpg',
      rating: 7.3,
      genre: 'Action',
      year: 2018,
      trailerLink: 'https://www.youtube.com/embed/xjDjIWPwcPU'
    },
    {
      title: 'Captain Marvel',
      description: "Carol Danvers becomes one of the universe's most powerful heroes.",
      posterURL: 'https://i.pinimg.com/736x/1c/67/0b/1c670b7ec19f21ec9d242afb4726420c.jpg',
      rating: 6.8,
      genre: 'Action',
      year: 2019,
      trailerLink: 'https://www.youtube.com/embed/Z1BCujX3pw8'
    },
    {
      title: 'Avengers: Endgame',
      description: "The Avengers assemble once more to undo Thanos' snap and restore the universe.",
      posterURL: 'https://i.pinimg.com/736x/95/26/68/9526684fe11e38cf6bb6fbd48e37de6a.jpg',
      rating: 8.4,
      genre: 'Action',
      year: 2019,
      trailerLink: 'https://www.youtube.com/embed/TcMBFSGVi1c'
    },
    {
      title: 'Spider-Man: No Way Home',
      description: 'Spider-Man seeks help from Doctor Strange to restore his secret identity.',
      posterURL: 'https://i.pinimg.com/736x/b3/64/71/b36471519fbddde3346067c1d7ad0127.jpg',
      rating: 8.3,
      genre: 'Action',
      year: 2021,
      trailerLink: 'https://www.youtube.com/embed/JfVOs4VSpmA'
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    genre: '',
    year: '',
    trailerLink: ''
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleAddMovie = () => {
    if (
      newMovie.title.trim() &&
      newMovie.description.trim() &&
      newMovie.posterURL.trim() &&
      newMovie.genre.trim() &&
      newMovie.year.trim() &&
      newMovie.trailerLink.trim() &&
      !isNaN(newMovie.rating)
    ) {
      setMovies([...movies, {
        ...newMovie,
        rating: parseFloat(newMovie.rating),
        year: parseInt(newMovie.year)
      }]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '', genre: '', year: '', trailerLink: '' });
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
  );

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">🎬 Marvel Movie App</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          <Filter
            titleFilter={titleFilter}
            setTitleFilter={setTitleFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
          />

          <h2 className="text-xl font-semibold mb-2">Add a Movie</h2>
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Poster URL" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Genre" value={newMovie.genre} onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Year" value={newMovie.year} onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Rating" type="number" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} />
            <input className="p-2 border rounded dark:bg-gray-800" placeholder="Trailer Link" value={newMovie.trailerLink} onChange={(e) => setNewMovie({ ...newMovie, trailerLink: e.target.value })} />
            <button onClick={handleAddMovie} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
          </div>

          <div className="flex flex-wrap gap-4">
            {filteredMovies.map((movie, index) => (
              <Link key={index} to={`/movie/${index}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      } />
      <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
}

export default App;
