import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/navigation.min.css";
import "../../../node_modules/swiper/modules/pagination.min.css";
import "../../../node_modules/swiper/modules/effect-fade.min.css";

import styles from "./AllCategories.module.scss";
import type {
  MediaItemsByCategory,
  MediaItemType,
} from "../../utils/types.tsx";

import CategoryCarousel from "../CategoryCarousel/CategoryCarousel.tsx";

interface allCategoriesProps {
  mediaItems: MediaItemsByCategory;
  categories: string[];
  mediaItemsType: MediaItemType;
}

const AllCategories: React.FC<allCategoriesProps> = ({
  mediaItems,
  categories,
  mediaItemsType,
}) => {
  return (
    <section className={styles.allCategories}>
      {categories.map((cat, idx) => {
        const items = mediaItems[cat] ?? [];
        if (items.length === 0) return null;

        return (
          <div key={`${cat}-${idx}`} className={styles.allCategories__category}>
            <div className={styles.allCategories__header}>
              <h2 className={styles.allCategories__title}>{cat}</h2>
              <a
                href=""
                className={styles.allCategories__seeMore}
                aria-label={`See more ${mediaItemsType} of category ${cat}`}
              >
                See more →
              </a>
            </div>
            <CategoryCarousel
              mediaItems={items}
              mediaItemType={mediaItemsType}
              category={cat}
            />
          </div>
        );
      })}
    </section>
  );
};

export default AllCategories;
