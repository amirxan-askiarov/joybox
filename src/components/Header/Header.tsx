import React, { useState } from 'react'
import styles from './Header.module.scss'

import { FocusTrap } from 'focus-trap-react'

import joybloxLogoAvif from '/_shared/avif/joybox.avif'
import joybloxLogoWebp from '/_shared/webp/joybox.webp'
import joybloxLogoPng from '/_shared/png/joybox.png'

import defaultAvatarAvif from '/_shared/avif/default-avatar.avif'
import defaultAvatarWebp from '/_shared/webp/default-avatar.webp'
import defaultAvatarPng from '/_shared/png/default-avatar.png'


import SearchBar from '../SearchBar/SearchBar.tsx'
import { useMediaQuery } from '../../utils/helpers.tsx'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <FocusTrap
      active={!isDesktop && isMenuOpen}
      focusTrapOptions={{
        initialFocus: '#movies'
      }}
    >
      <div>
        <header className={styles.header}>
          <nav className={styles.header__nav} aria-label="Main navigation">
          
            <a href="/" className={styles.header__logo} aria-label="JoyBox Home Page">
              <picture>
                <source type="image/avif" srcSet={joybloxLogoAvif} />
                <source type="image/webp" srcSet={joybloxLogoWebp} />
                <img src={joybloxLogoPng} alt="JoyBox official logo"
                  className={styles.header__logoImage}
                  loading="eager" fetchPriority="high" />
              </picture>
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
              <li><a id="movies" href="/movies" className={styles.header__link}>Movies</a></li>
              <li><a id="tv-shows" href="/tv-shows" className={styles.header__link}>TV Shows</a></li>
              <li><a id="streams" href="/streams" className={styles.header__link}>Streams</a></li>
              <li><a id="games" href="/games" className={styles.header__link}>Online Games</a></li>
              
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
                  <picture>
                    <source type="image/avif" srcSet={defaultAvatarAvif} />
                    <source type="image/webp" srcSet={defaultAvatarWebp} />
                    <img src={defaultAvatarPng} alt="Your profile avatar"
                      className={styles.header__profileIcon}
                      loading="lazy" />
                  </picture>
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
      </div>
    </FocusTrap>
  );
};

export default Header;