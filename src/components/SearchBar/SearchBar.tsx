import { useState } from "react";
import useMediaQuery from "../../utils/useMediaQuery.tsx";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearchBar = () => setIsOpen((prev) => !prev);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
    {isDesktop && (
      <div className={styles.searchDesktop}>
        <input type="text" placeholder="Search" aria-label="Search" className={styles.searchDesktop_input} />
      </div>
    )}
    <div className={styles.searchBar}>
      {!isDesktop && (
        <button
          className={styles.searchMobile__Btn}
          onClick={toggleSearchBar}
          aria-label="Search"
        >
          🔍
        </button>
      )}
      {!isDesktop && isOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchPopup}>
            <button
              className={styles.closeBtn}
              onClick={toggleSearchBar}
              aria-label="Close search"
            >
              ✖
            </button>
            <div className={styles.searchOverlay__searchInput}>
              <span className={styles.icon}>🔍</span>
              <input type="text" placeholder="Search" autoFocus />
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SearchBar;