import { useEffect, useState } from "react";
import styles from "./Games.module.scss";
import NewReleases from "../../components/NewReleases/NewReleases.tsx";
import AllProducts from "../../components/AllProducts/AllProducts.tsx";
import Header from "../../components/Header/Header.tsx";
import type { Game } from "../../utils/types.tsx";

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newReleases, setNewReleases] = useState<Game[]>([]);

  useEffect(() => {
    fetch("/games/games-info.json")
      .then((res) => res.json())
      .then((data: Game[]) => {
        setGames(data);

        const gameCategories = Array.from(new Set(data.map((g) => g.category)));
        setCategories(gameCategories);

        const numReleased = Math.floor(Math.random() * 3) + 1;
        const startIndex = Math.floor(Math.random() * (data.length - numReleased));
        setNewReleases(data.slice(startIndex, startIndex + numReleased));
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.games}>
        {newReleases.length > 0 && (
          <NewReleases<Game> products={newReleases} productsName="games" />
        )}
        {games.length > 0 && categories.length > 0 && (
          <AllProducts<Game> products={games} categories={categories} productsName="games" />
        )}
      </main>
    </>
  );
};

export default Games;

