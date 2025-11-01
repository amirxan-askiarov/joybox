import '../../../node_modules/swiper/swiper.min.css'; 
import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';
import '../../../node_modules/swiper/modules/effect-fade.min.css';

import styles from './NewReleases.module.scss';

import type { Product } from '../../utils/types.tsx';

import useMediaQuery from "../../utils/useMediaQuery.tsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';

interface NewReleasesProps<T extends Product> {
  products: T[],
  productsName: string,
}

const NewReleases = <T extends Product>({ 
  products,
  productsName
}: NewReleasesProps<T>) => {
  if (products.length === 0) return null;

  const isMobile = useMediaQuery("(max-width: 767px)"); 
  const isInfinite = products.length > 1;
  const enaBleDots = !isMobile ? { clickable: true } : false;

  return (
    <section className={styles.newReleases}>
      <h2 className={styles.newReleases__title}>New Releases</h2>
      
      <Swiper
        className={styles.newReleases__carousel}
        slidesPerView={1}
        spaceBetween={0}
        loop={isInfinite}
        speed={800}
        modules={[Pagination, Keyboard, Navigation]}
        keyboard={{ enabled: true }} 
        navigation={true}
        pagination={enaBleDots}
      >
        {products.map((product, idx) => (
          <SwiperSlide>
            <div key={`${product.title} + ${idx}`} className={styles.newReleases__card}>
              <picture>
                <source type="image/avif" srcSet={product.link} />
                <source type="image/webp" srcSet={product.link.replace('avif', 'webp')} />
                <img src={product.link.replace('avif', 'jpeg')} alt={product.title}
                  className={styles.newReleases__image}
                  loading="eager" fetchPriority="high" />
              </picture>
              <div className={styles.newReleases__info}>
                <h3 className={styles.newReleases__gameTitle}>
                  {product.title}
                </h3>
                <span className={styles.newReleases__info__age}>
                  {product["age-restriction"]}
                </span>
                <p className={styles.newReleases__description}>
                  {product.description}
                </p>
                <div className={styles.newReleases__btns}>
                  <button className={styles.newReleases__btn}>
                    {productsName === "games" ? "Start Playing" : "Start Watching"}
                  </button>
                  <button className={styles.newReleases__btn}>
                    Add to Favourites
                  </button>
                  <button className={styles.newReleases__btn}>About</button>
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


