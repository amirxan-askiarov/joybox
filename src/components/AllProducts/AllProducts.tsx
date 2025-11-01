import '../../../node_modules/swiper/swiper.min.css'; 
import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';
import '../../../node_modules/swiper/modules/effect-fade.min.css';

import styles from "./AllProducts.module.scss";
import type { Product } from "../../utils/types.tsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';


interface AllProductsProps<T extends Product> {
  products: T[];
  categories: string[];
  productsName: string;
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
    slidesPerView: 5,
    spaceBetween: 32,
    slidesToSlide: 3,
  },
};

const AllProducts = <T extends Product>({
  products,
  categories,
  productsName
}: AllProductsProps<T>) => {

  const uniqueKey = Date.now();

  return (
    <section className={styles.allProducts}>
      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (items.length === 0) return null;

        return (
          <div key={cat} className={styles.allProducts__category}>
            <div className={styles.allProducts__header}>
              <h2 className={styles.allProducts__title}>{cat}</h2>
              <a href="" className={styles.allProducts__seeMore}>
                See more →
              </a>
            </div>

            <Swiper
              key={cat + uniqueKey} 
              className={styles.allProducts__carousel}
              modules={[Navigation, Pagination, Keyboard]}
              breakpoints={swiperBreakpoints}
              loop={true}
              keyboard={{ enabled: true }}
              navigation={true}
            >
              {items.map((item, idx) => (
                <SwiperSlide key={`${item.title} + ${idx}`}>
                  <article className={styles.allProducts__card}>
                    <picture>
                      <source type="image/avif" srcSet={item.link} />
                      <source type="image/webp" srcSet={item.link.replace('avif', 'webp')} />
                      <img src={item.link.replace('avif', 'jpeg')} alt={item.title}
                        className={styles.allProducts__image}
                        loading="lazy" />
                    </picture>
                    <div className={styles.allProducts__content}> 
                      <div className={styles.allProducts__info}>
                        <h3 className={styles.allProducts__productTitle}>
                          {item.title}
                        </h3>
                        <span className={styles.allProducts__age}>
                          {item["age-restriction"]}
                        </span>
                        <p className={styles.allProducts__description}>
                          {item.description}
                        </p>
                        <div className={styles.allProducts__btns}>
                          <button className={styles.allProducts__btn}>
                            {productsName === "games" ? "Start Playing" : "Start Watching"}
                          </button>
                          <button className={styles.allProducts__btn}>
                            Add to Favourites
                          </button>
                          <button className={styles.allProducts__btn}>
                            About
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      })}
    </section>
  );
};

export default AllProducts;
