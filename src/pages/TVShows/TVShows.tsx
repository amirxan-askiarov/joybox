import { useEffect, useState } from "react";

import styles from "./TVShows.module.scss";

import NewReleases from "../../components/NewReleases/NewReleases.tsx";
import AllCategories from "../../components/AllCategories/AllCategories.tsx";
import Header from "../../components/Header/Header.tsx";
import type { TVShow } from "../../utils/types.tsx";

const TVShows: React.FC = () => {
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newReleases, setNewReleases] = useState<TVShow[]>([]);

  useEffect(() => {
    fetch("/tv-shows/tv-shows-info.json")
      .then((res) => res.json())
      .then((data: TVShow[]) => {
        setTVShows(data);

        const gameCategories = Array.from(new Set(data.map((g) => g.category)));
        setCategories(gameCategories);

        const numReleased = Math.floor(Math.random() * 3) + 1;
        const startIndex = Math.floor(Math.random() * (data.length - numReleased));
        setNewReleases(data.slice(startIndex, startIndex + numReleased));
      })
      .catch((err) => console.error("Error loading TV Shows:", err));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.tvShows}>
        {newReleases.length > 0 && (
          <NewReleases<TVShow> products={newReleases} productsName="tv-shows" />
        )}
        {tvShows.length > 0 && categories.length > 0 && (
          <AllCategories<TVShow> products={tvShows} categories={categories} productsName="tv-shows" />
        )}
      </main>
    </>
  );
};

export default TVShows;