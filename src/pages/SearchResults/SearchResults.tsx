import { useSearchParams, Navigate } from "react-router-dom";
import { useFuzzySearchList } from "@nozbe/microfuzz/react";
import { useMemo } from "react";
import DOMPurify from "dompurify";

import styles from "./SearchResults.module.scss";

import NoResults from "../../layouts/NoResults/NoResults.tsx";
import Error from "../../layouts/Error/Error.tsx";
import Loading from "../../layouts/Loading/Loading.tsx";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel.tsx";

import type {
  MediaItem,
  MediaItemProcessed,
  MediaItemsByType,
  MediaItemType,
} from "../../utils/types.tsx";
import { mediaItemsMetaData } from "../../config/mediaMetaData.config.ts";
import { useFetchOnInit } from "../../utils/helpers.tsx";

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const safeQuery = DOMPurify.sanitize(query).trim();

  const metaData = useMemo(() => mediaItemsMetaData, []);

  const movies = useFetchOnInit<MediaItem>(mediaItemsMetaData.Movies.url);
  const tvShows = useFetchOnInit<MediaItem>(mediaItemsMetaData["TV Shows"].url);
  const streams = useFetchOnInit<MediaItem>(mediaItemsMetaData.Streams.url);
  const games = useFetchOnInit<MediaItem>(
    mediaItemsMetaData["Online Games"].url,
  );
  const dataSetsProcessed = useMemo<MediaItemProcessed[]>(() => {
    return [
      ...movies.data,
      ...tvShows.data,
      ...streams.data,
      ...games.data,
    ].map(({ link, ...rest }) => ({
      ...rest,
      links: {
        avif: link,
        webp: link.replace("avif", "webp"),
        jpeg: link.replace("avif", "jpeg"),
      },
    }));
  }, [movies.data, tvShows.data, streams.data, games.data]);

  const results = useFuzzySearchList({
    list: dataSetsProcessed,
    queryText: safeQuery,
    getText: (item) => [item.title],
    mapResultItem: (r) => r.item,
  });

  const resultsByType = useMemo<MediaItemsByType>(() => {
    const grouped: MediaItemsByType = {};

    for (const item of results) {
      const type = item.type;
      if (!grouped[type]) grouped[type] = [];
      grouped[type]!.push(item);
    }

    return grouped;
  }, [results]);

  if (!safeQuery) return <Navigate to="/" replace />;

  if (!metaData)
    return <Error pageTitle={`Error: The metadata was not configured.`} />;

  const error = movies.error || tvShows.error || streams.error || games.error;
  if (error)
    return <Error pageTitle={`Error: The was not fetched. Info: ${error}`} />;

  const dataIsLoading =
    movies.loading || tvShows.loading || streams.loading || games.loading;
  if (dataIsLoading)
    return <Loading pageTitle={`search results for ${query}`} />;

  const noResults = results.length === 0;
  if (!dataIsLoading && noResults)
    return <NoResults pageTitle={`"${query}"`} />;

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {Object.entries(resultsByType).map(([key, items]) => {
          if (!items) return null;
          const mediaType = key as MediaItemType;

          return (
            <section key={key}>
              <h2>
                {mediaType} found for "{query}":
              </h2>
              <CategoryCarousel mediaItems={items} mediaItemType={mediaType} />
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default SearchResults;
