import { useEffect, useState } from "react";

import styles from "./Streams.module.scss";

import AllProducts from "../../components/AllProducts/AllProducts.tsx";
import Header from "../../components/Header/Header.tsx";
import type { Stream } from "../../utils/types.tsx";

const Streams: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/public/assets/streams/streams-info.json")
      .then((res) => res.json())
      .then((data: Stream[]) => {
        setStreams(data);

        const gameCategories = Array.from(new Set(data.map((g) => g.category)));
        setCategories(gameCategories);
      })
      .catch((err) => console.error("Error loading streams:", err));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.streams}>
        {streams.length > 0 && categories.length > 0 && (
          <AllProducts<Stream> products={streams} categories={categories} productsName="streams" />
        )}
      </main>
    </>
  );
};

export default Streams;