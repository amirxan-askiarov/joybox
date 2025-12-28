import { useState } from "react";
import { useMediaQuery } from "../../utils/helpers.tsx";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.scss";

import { FocusTrap } from "focus-trap-react";

import DOMPurify from "dompurify";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => setIsOpen((prev) => !prev);

  const [input, setInput] = useState("");

  const redirect = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const sanitizedInput = DOMPurify.sanitize(input.trim());
      redirect(`/search?q=${encodeURIComponent(sanitizedInput)}`);
      if (!isDesktop && isOpen) toggleSearchBar();
    }
  };

  return (
    <>
      {isDesktop && (
        <div className={styles.searchDesktop}>
          <input
            type="search"
            placeholder="Search title..."
            aria-label="Search"
            onChange={handleInput}
            onKeyDown={handleSearch}
            className={styles.searchDesktop_input}
          />
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
          <FocusTrap
            active={isOpen}
            focusTrapOptions={{
              initialFocus: "#search",
            }}
          >
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
                  <span className={styles.icon} aria-hidden="true">
                    🔍
                  </span>
                  <input
                    id="search"
                    type="search"
                    placeholder="Search title..."
                    autoFocus
                    onChange={handleInput}
                    onKeyDown={handleSearch}
                  />
                </div>
              </div>
            </div>
          </FocusTrap>
        )}
      </div>
    </>
  );
};

export default SearchBar;
