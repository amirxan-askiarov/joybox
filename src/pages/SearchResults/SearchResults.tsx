import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFuzzySearchList } from '@nozbe/microfuzz/react'

import styles from './SearchResults.module.scss'

import Header from '../../components/Header/Header.tsx'
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel.tsx'

import type { Movie, Game, TVShow, Stream } from '../../utils/types.tsx'


const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetch("/movies/movies-info.json")
      .then((res) => res.json())
      .then((data: Movie[]) => {
        setMovies(data ?? [])
      })
      .catch((err) => console.error("Error loading movies:", err));
  }, []);

  const resultsMovies = useFuzzySearchList({
    list: movies,
    queryText: query,
    getText: (m: Movie) => [m.title ?? ""],
    mapResultItem: (result) => result.item
  });

  const [TVShows, setTVShows] = useState<TVShow[]>([]);
  useEffect(() => {
    fetch("/tv-shows/tv-shows-info.json")
      .then((res) => res.json())
      .then((data: TVShow[]) => {
        setTVShows(data ?? [])
      })
      .catch((err) => console.error("Error loading TV Shows:", err));
  }, []);
  const resultsTVShows = useFuzzySearchList({
    list: TVShows,
    queryText: query,
    getText: (m: TVShow) => [m.title ?? ""],
    mapResultItem: (result) => result.item
  });

  const [streams, setStreams] = useState<Stream[]>([]);
  useEffect(() => {
    fetch("/streams/streams-info.json")
      .then((res) => res.json())
      .then((data: Stream[]) => {
        setStreams(data ?? [])
      })
      .catch((err) => console.error("Error loading streams:", err));
  }, []);
  const resultsStreams = useFuzzySearchList({
    list: streams,
    queryText: query,
    getText: (m: Stream) => [m.title ?? ""],
    mapResultItem: (result) => result.item
  });

  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("/games/games-info.json")
      .then((res) => res.json())
      .then((data: Game[]) => {
        setGames(data ?? [])
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);
  const resultsGames = useFuzzySearchList({
    list: games,
    queryText: query,
    getText: (m: Game) => [m.title ?? ""],
    mapResultItem: (result) => result.item
  });

  return (
    <>
      <Header />
      <main className={styles.results}>
        {
          resultsMovies.length === 0 &&
          resultsTVShows.length === 0 &&
          resultsStreams.length === 0 &&
          resultsGames.length === 0 && (
            <>
              <h1>No movies were found for "{query}"</h1>
            </>
          )

        }
        {resultsMovies.length > 0 && (
          <>
            <h2>Movies found for "{query}":</h2>
            <CategoryCarousel products={resultsMovies} productsName="movies" />
          </>
        )}
        {resultsTVShows.length > 0 && (
          <>
            <h2>TV Shows found for "{query}":</h2>
            <CategoryCarousel products={resultsTVShows} productsName="tv-shows" />
          </>
        )}
        {resultsStreams.length > 0 && (
          <>
            <h2>Streams found for "{query}":</h2>
            <CategoryCarousel products={resultsStreams} productsName="streams" />
          </>
        )}
        {resultsGames.length > 0 && (
          <>
            <h2>Online games found for "{query}":</h2>
            <CategoryCarousel products={resultsGames} productsName="games" />
          </>
        )}
      </main>
    </>
  );
};

export default SearchResults;