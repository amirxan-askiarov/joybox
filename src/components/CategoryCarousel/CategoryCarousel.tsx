import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/navigation.min.css";
import "../../../node_modules/swiper/modules/pagination.min.css";
import "../../../node_modules/swiper/modules/effect-fade.min.css";

import styles from "./CategoryCarousel.module.scss";
import type { MediaItemProcessed, MediaItemType } from "../../utils/types.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

interface categoryCarouselProps {
  mediaItems: MediaItemProcessed[];
  mediaItemType?: MediaItemType;
  category?: string;
}

const swiperBreakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 16,
    slidesToSlide: 2,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesToSlide: 2,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 32,
    slidesToSlide: 3,
  },
};

const CategoryCarousel: React.FC<categoryCarouselProps> = ({
  mediaItems,
  mediaItemType,
  category,
}) => {
  return (
    <Swiper
      key={`${category}-${mediaItemType}`}
      className={styles.carousel}
      modules={[Navigation, Pagination, Keyboard]}
      breakpoints={swiperBreakpoints}
      loop={true}
      keyboard={{ enabled: true, onlyInViewport: true }}
      navigation={{ enabled: true }}
      tabIndex={0}
    >
      {mediaItems.map((mediaItem) => (
        <SwiperSlide
          key={`${category}-${mediaItem.title}`}
          role="group"
          aria-label={`${mediaItem.title} slide`}
        >
          <article className={styles.card}>
            <picture>
              <source type="image/avif" srcSet={mediaItem.links.avif} />
              <source type="image/webp" srcSet={mediaItem.links.webp} />
              <img
                src={mediaItem.links.jpeg}
                alt={mediaItem.title}
                className={styles.card__image}
                loading="lazy"
              />
            </picture>
            <div className={styles.card__content}>
              <div className={styles.card__info}>
                <h3 className={styles.card__mediaItemTitle}>
                  {mediaItem.title}
                </h3>
                <span className={styles.card__age}>
                  {mediaItem["age-restriction"]}
                </span>
                <p className={styles.card__description}>
                  {mediaItem.description}
                </p>
                <div className={styles.card__btns}>
                  <button className={styles.card__btn}>
                    {mediaItemType === "Online Games"
                      ? "Start Playing"
                      : "Start Watching"}
                  </button>
                  <button
                    className={styles.card__btn}
                    aria-label={`Add ${mediaItem.title} to favourites`}
                  >
                    Add to Favourites
                  </button>
                  <button
                    className={styles.card__btn}
                    aria-label={`About ${mediaItem.title}`}
                  >
                    About
                  </button>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryCarousel;
