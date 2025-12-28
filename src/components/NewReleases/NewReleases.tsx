import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/navigation.min.css";
import "../../../node_modules/swiper/modules/pagination.min.css";
import "../../../node_modules/swiper/modules/effect-fade.min.css";

import styles from "./NewReleases.module.scss";

import type { MediaItemProcessed, MediaItemType } from "../../utils/types.tsx";

import { useMediaQuery } from "../../utils/helpers.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";

import { useMemo } from "react";

interface NewReleasesProps {
  newReleases: MediaItemProcessed[];
  newReleasesType: MediaItemType;
}

const NewReleases: React.FC<NewReleasesProps> = ({
  newReleases,
  newReleasesType,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const isLoop = useMemo(() => newReleases.length > 1, [newReleases]);

  if (newReleases.length === 0) return null;

  return (
    <section className={styles.newReleases}>
      <h2 className={styles.newReleases__title}>New Releases</h2>

      <Swiper
        className={styles.newReleases__carousel}
        slidesPerView={1}
        spaceBetween={0}
        loop={isLoop}
        speed={800}
        modules={[Pagination, Keyboard, Navigation]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        navigation={{ enabled: true }}
        tabIndex={0}
        pagination={!isMobile}
      >
        {newReleases.map((mediaItem, idx) => (
          <SwiperSlide key={`${mediaItem.title}-${idx}`}>
            <div className={styles.newReleases__card}>
              <picture>
                <source type="image/avif" srcSet={mediaItem.links.avif} />
                <source type="image/webp" srcSet={mediaItem.links.webp} />
                <img
                  src={mediaItem.links.jpeg}
                  alt={mediaItem.title}
                  className={styles.newReleases__image}
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
              <div className={styles.newReleases__info}>
                <h3 className={styles.newReleases__gameTitle}>
                  {mediaItem.title}
                </h3>
                <span className={styles.newReleases__info__age}>
                  {mediaItem["age-restriction"] ?? "All Ages"}
                </span>
                <p className={styles.newReleases__description}>
                  {mediaItem.description}
                </p>
                <div className={styles.newReleases__btns}>
                  <button className={styles.newReleases__btn}>
                    {newReleasesType === "Online Games"
                      ? "Start Playing"
                      : "Start Watching"}
                  </button>
                  <button
                    className={styles.newReleases__btn}
                    aria-label={`Add ${mediaItem.title} to favourites`}
                  >
                    Add to Favourites
                  </button>
                  <button
                    className={styles.newReleases__btn}
                    aria-label={`About ${mediaItem.title}`}
                  >
                    About
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewReleases;
