import { useState } from "react"
import { useMediaQuery } from "../../utils/helpers.tsx"
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss"

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearchBar = () => setIsOpen((prev) => !prev)
  const [input, setInput] = useState('')
  const redirect = useNavigate()

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      redirect(`/search?q=${encodeURIComponent(input.trim())}`);
    }
  }

  return (
    <>
    {isDesktop && (
      <div className={styles.searchDesktop}>
        <input type="text" placeholder="Search title..." aria-label="Search" 
        onInput={handleInput} onKeyDown={handleKeyDown}
        className={styles.searchDesktop_input} />
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
              <input type="text" placeholder="Search title..." autoFocus 
              onInput={handleInput} onKeyDown={handleKeyDown} />
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SearchBar;