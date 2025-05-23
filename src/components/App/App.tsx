import { useState } from "react";
import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
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

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
