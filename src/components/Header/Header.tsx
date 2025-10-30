import React, { useState } from "react";
import styles from "./Header.module.scss";
import joybloxLogo from "/assets/joybox.png"
import SearchBar from "../SearchBar/SearchBar.tsx";
import useMediaQuery from "../../utils/useMediaQuery.tsx";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav} aria-label="Main navigation">
      
        <a href="/" className={styles.header__logo} aria-label="JoyBox Home Page">
          <img
            src={joybloxLogo}
            alt="JoyBox official logo"
            className={styles.header__logoImage}
            loading="eager" fetchPriority="high"
          />
        </a>
        
        <button 
          className={styles.header__menuBtn}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-list"
        >
          <span className={styles.header__menuIcon}></span>
        </button>
        
        <ul 
          className={`${styles.header__categories} ${!isDesktop && isMenuOpen ? styles['header__categories--open'] : ''}`}
          id="mobile-menu-list"
          aria-hidden={!isDesktop && !isMenuOpen} 
        >
          <li><a href="/movies" className={styles.header__link}>Movies</a></li>
          <li><a href="/tv-shows" className={styles.header__link}>TV Shows</a></li>
          <li><a href="/streams" className={styles.header__link}>Streams</a></li>
          <li><a href="/games" className={styles.header__link}>Online Games</a></li>
          
          {!isDesktop && isMenuOpen && (
            <li>
              <a href="/registration" className={`${styles.header__joinBtn} ${styles['header__joinBtn--mobile']}`}>
                Start JoyBox
              </a>
            </li>
          )}
        </ul>

        

        <div className={styles.header__wrapper}>
          <SearchBar />
          <div className={styles.header__profile__wrapper}>
            <a
              className={styles.header__profile}
              aria-label="Profile"
              title="Profile"
              href="/registration"
            >
              <img
                src="/assets/default-avatar.png"
                alt=""
                className={styles.header__profileIcon}
                loading="lazy"
              />
            </a>
          </div>

          {isDesktop && (
            <div className={styles.header__joinBtn__wrapper}>
              <a href="/registration" className={styles.header__joinBtn}>
                Start JoyBox
              </a>
            </div>
          )}
        </div>
        
      </nav>
    </header>
  );
};

export default Header;