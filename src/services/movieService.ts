// Функцію fetchMovies для виконання HTTP-запитів винесіть в окремий файл src/services/movieService.ts. Типізуйте її параметри, результат, який вона повертає, та відповідь від Axios.
import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  //   page: number;
  results: Movie[];
  //   total_pages: number;
  //   total_results: number;
}

export const fetchMovies = (query: string): Promise<FetchMoviesResponse> => {
  const config = {
    params: {
      query,
      //   include_adult: false,
      //   language: "ua-UK",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get<FetchMoviesResponse>(API_URL, config)
    .then((res) => res.data);
};
