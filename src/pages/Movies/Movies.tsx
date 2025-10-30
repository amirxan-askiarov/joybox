import { useEffect, useState } from "react";
import styles from "./Movies.module.scss";
import NewReleases from "../../components/NewReleases/NewReleases.tsx";
import AllProducts from "../../components/AllProducts/AllProducts.tsx";
import Header from "../../components/Header/Header.tsx";
import type { Movie } from "../../utils/types.tsx";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newReleases, setNewReleases] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/public/assets/movies/movies-info.json")
      .then((res) => res.json())
      .then((data: Movie[]) => {
        setMovies(data);

        const movieCategories = Array.from(new Set(data.map((g) => g.category)));
        setCategories(movieCategories);

        const numReleased = Math.floor(Math.random() * 3) + 1;
        const startIndex = Math.floor(Math.random() * (data.length - numReleased));
        setNewReleases(data.slice(startIndex, startIndex + numReleased));
      })
      .catch((err) => console.error("Error loading movies:", err));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.movies}>
        {newReleases.length > 0 && (
          <NewReleases<Movie> products={newReleases} productsName="movies" />
        )}
        {movies.length > 0 && categories.length > 0 && (
          <AllProducts<Movie> products={movies} categories={categories} productsName="movies" />
        )}
      </main>
    </>
  );
};

export default Movies;