import styles from "./MediaTypeLayout.module.scss";

import type {
  MediaItem,
  MediaItemProcessed,
  MediaItemCategory,
  MediaItemType,
  MediaItemsByCategory,
} from "../../utils/types.tsx";

import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";

import NewReleases from "../../components/NewReleases/NewReleases.tsx";
import AllCategories from "../../components/AllCategories/AllCategories.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import { MAX_NEW_RELEASES, useFetchOnInit } from "../../utils/helpers.tsx";
import { mediaItemsMetaData } from "../../config/mediaMetaData.config.ts";

import { useMemo } from "react";

interface MediaTypeProps {
  mediaItemsType: MediaItemType;
}

const MediaTypeLayout: React.FC<MediaTypeProps> = ({ mediaItemsType }) => {
  const metaData = mediaItemsMetaData[mediaItemsType];

  const { data, loading, error } = useFetchOnInit<MediaItem>(metaData.url);

  const categories = useMemo(() => {
    return Array.from(new Set(data.map((item) => item.category)));
  }, [data]);

  const dataProcessed: MediaItemProcessed[] = useMemo(
    () =>
      data.map(({ link, ...rest }) => ({
        ...rest,
        links: {
          avif: link,
          webp: link.replace("avif", "webp"),
          jpeg: link.replace("avif", "jpeg"),
        },
      })),
    [data],
  );

  const itemsByCategory = useMemo<MediaItemsByCategory>(() => {
    const items: Record<MediaItemCategory, MediaItemProcessed[]> = {};

    dataProcessed.forEach((item) => {
      const cat = item.category;

      if (!items[cat]) items[cat] = [];
      items[cat].push(item);
    });
    return items;
  }, [dataProcessed]);

  const mediaTypeHasNewReleases = metaData.hasNewReleases;
  const newReleases = useMemo(() => {
    if (!mediaTypeHasNewReleases) return [];

    const count = Math.min(MAX_NEW_RELEASES, Math.max(1, data.length));

    const startIndex = Math.floor(Math.random() * (data.length - count + 1));

    return dataProcessed.slice(startIndex, startIndex + count);
  }, [data, dataProcessed, mediaTypeHasNewReleases]);

  if (!metaData)
    return (
      <Error
        pageTitle={`Error: Media type "${mediaItemsType}" was not configured in the metadata.`}
      />
    );

  if (error) return <Error pageTitle={error} />;

  if (loading) return <Loading pageTitle={mediaItemsType} />;

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {mediaTypeHasNewReleases && (
          <NewReleases
            newReleases={newReleases}
            newReleasesType={mediaItemsType}
          />
        )}
        <AllCategories
          mediaItems={itemsByCategory}
          categories={categories}
          mediaItemsType={mediaItemsType}
        />
      </main>
      <Footer />
    </>
  );
};

export default MediaTypeLayout;
