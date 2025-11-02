import '../../../node_modules/swiper/swiper.min.css';
import '../../../node_modules/swiper/modules/navigation.min.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/effect-fade.min.css'

import styles from "./AllCategories.module.scss"
import type { Product } from "../../utils/types.tsx"
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel.tsx'

interface allCategoriesProps<T extends Product> {
  products: T[];
  categories: string[];
  productsName: string;
}

const AllCategories = <T extends Product>({
  products,
  categories,
  productsName
}: allCategoriesProps<T>) => {

  return (
    <section className={styles.allCategories}>
      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (items.length === 0) return null;

        return (
          <div key={cat} className={styles.allCategories__category}>
            <div className={styles.allCategories__header}>
              <h2 className={styles.allCategories__title}>{cat}</h2>
              <a href="" className={styles.allCategories__seeMore}>
                See more →
              </a>
            </div>
            <CategoryCarousel products={items} productsName={productsName} />
          </div>
        );
      })}
    </section>
  );
};

export default AllCategories;
