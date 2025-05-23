import { useState } from "react";
// import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = (query: string) => {
    setMovies([]);

    fetchMovies(query).then((data) => {
      if (data.results.length === 0) {
        toast("No movies found for your request.");
      }
      setMovies(data.results);
    });
  };

  const handleSlectMovie = (movie: Movie) => {
    console.log("Select movie:", movie);
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSlectMovie} />
      )}
    </>
  );
}

export default App;
