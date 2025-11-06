import '../../../node_modules/swiper/swiper.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/effect-fade.min.css'

import styles from './CategoryCarousel.module.scss'
import type { Product } from '../../utils/types.tsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'


interface categoryCarouselProps<T extends Product> {
  products: T[];
  productsName?: string;
  categoryName?: string;
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

const CategoryCarousel = <T extends Product>({
  products,
  productsName,
  categoryName
}: categoryCarouselProps<T>) => {

  return (
    <Swiper
      key={categoryName || productsName} 
      className={styles.carousel}
      modules={[Navigation, Pagination, Keyboard]}
      breakpoints={swiperBreakpoints}
      loop={true}
      keyboard={{ 
        enabled: true, 
        onlyInViewport: true,
        pageUpDown: false
      }}
      navigation={{
        enabled: true
      }}
      tabIndex={0}
    >
      {products.map((item) => (
        <SwiperSlide key={item.title}>
          <article className={styles.card}>
            <picture>
              <source type="image/avif" srcSet={item.link} />
              <source type="image/webp" srcSet={item.link.replace('avif', 'webp')} />
              <img src={item.link.replace('avif', 'jpeg')} alt={item.title}
                className={styles.card__image}
                loading="lazy" />
            </picture>
            <div className={styles.card__content}> 
              <div className={styles.card__info}>
                <h3 className={styles.card__productTitle}>
                  {item.title}
                </h3>
                <span className={styles.card__age}>
                  {item["age-restriction"]}
                </span>
                <p className={styles.card__description}>
                  {item.description}
                </p>
                <div className={styles.card__btns}>
                  <button className={styles.card__btn}>
                    {productsName === "games" ? "Start Playing" : "Start Watching"}
                  </button>
                  <button className={styles.card__btn}>
                    Add to Favourites
                  </button>
                  <button className={styles.card__btn}>
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
}

export default CategoryCarousel;