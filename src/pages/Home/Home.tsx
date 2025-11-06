import React from 'react'
import styles from './Home.module.scss'

import Header from '../../components/Header/Header.tsx'
import Footer from '../../components/Footer/Footer.tsx'

import moviesImgAvif from '/home/avif/movies.avif'
import tvshowsImgAvif from '/home/avif/tv-shows.avif'
import streamsImgAvif from '/home/avif/streams.avif'
import gamesImgAvif from '/home/avif/games.avif'
import enjoyAndSaveImgAvif from '/home/avif/enjoy-and-save.avif'
import enjoyEverywhereImgAvif from '/home/avif/enjoy-everywhere.avif'
import enjoyAnytimeImgAvif from '/home/avif/enjoy-anytime.avif'

import moviesImgWebp from '/home/webp/movies.webp'
import tvshowsImgWebp from '/home/webp/tv-shows.webp'
import streamsImgWebp from '/home/webp/streams.webp'
import gamesImgWebp from '/home/webp/games.webp'
import enjoyAndSaveImgWebp from '/home/webp/enjoy-and-save.webp'
import enjoyEverywhereImgWebp from '/home/webp/enjoy-everywhere.webp'
import enjoyAnytimeImgWebp from '/home/webp/enjoy-anytime.webp'

import moviesImgJpeg from '/home/jpeg/movies.jpeg'
import tvshowsImgJpeg from '/home/jpeg/tv-shows.jpeg'
import streamsImgJpeg from '/home/jpeg/streams.jpeg'
import gamesImgJpeg from '/home/jpeg/games.jpeg'
import enjoyAndSaveImgJpeg from '/home/jpeg/enjoy-and-save.jpeg'
import enjoyEverywhereImgJpeg from '/home/jpeg/enjoy-everywhere.jpeg'
import enjoyAnytimeImgJpeg from '/home/jpeg/enjoy-anytime.jpeg'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <section className={styles.home__serviceSection}>
          <div className={styles.home__serviceSection__imgBox}>
            <picture>
              <source type="image/avif" srcSet={tvshowsImgAvif} />
              <source type="image/webp" srcSet={tvshowsImgWebp} />
              <img src={tvshowsImgJpeg} alt="TV Shows category" 
                className={styles.home__serviceSection__imgBox__image}
                loading="eager" fetchPriority="high" />
            </picture>
          </div>
          <div className={styles.home__serviceSection__contentBox}>
            <h2 className={styles.home__serviceSection__contentBox__title}>TV Shows</h2>
            <p className={styles.home__serviceSection__contentBox__description}>
              Discover binge-worthy series, new releases, and fan favorites —
              stream anywhere, anytime.
            </p>
            <button className={styles.home__serviceSection__contentBox__btn}>See More</button>
          </div>
        </section>

        <section className={`${styles.home__serviceSection} ${styles["home__serviceSection--reversed"]}`}>
          <div className={styles.home__serviceSection__imgBox}>
            <picture>
              <source type="image/avif" srcSet={moviesImgAvif} />
              <source type="image/webp" srcSet={moviesImgWebp} />
              <img src={moviesImgJpeg} alt="Movies category"
                className={styles.home__serviceSection__imgBox__image}
              />
            </picture>
          </div>
          <div className={styles.home__serviceSection__contentBox}>
            <h2 className={styles.home__serviceSection__contentBox__title}>Movies</h2>
            <p className={styles.home__serviceSection__contentBox__description}>
              From blockbusters to indie gems — enjoy an ever-growing collection
              of cinematic experiences.
            </p>
            <button className={styles.home__serviceSection__contentBox__btn}>See More</button>
          </div>
        </section>

        <section className={styles.home__serviceSection}>
          <div className={styles.home__serviceSection__imgBox}>
            <picture>
              <source type="image/avif" srcSet={streamsImgAvif} />
              <source type="image/webp" srcSet={streamsImgWebp} />
              <img src={streamsImgJpeg} alt="Streams category"
                className={styles.home__serviceSection__imgBox__image} />
            </picture>
          </div>
          <div className={styles.home__serviceSection__contentBox}>
            <h2 className={styles.home__serviceSection__contentBox__title}>Streams</h2>
            <p className={styles.home__serviceSection__contentBox__description}>
              Join live broadcasts, gaming streams, and community events
              right in your browser.
            </p>
            <button className={styles.home__serviceSection__contentBox__btn}>See More</button>
          </div>
        </section>

        <section className={`${styles.home__serviceSection} ${styles["home__serviceSection--reversed"]}`}>
          <div className={styles.home__serviceSection__imgBox}>
            <picture>
              <source type="image/avif" srcSet={gamesImgAvif} />
              <source type="image/webp" srcSet={gamesImgWebp} />
              <img src={gamesImgJpeg} alt="Online Games category"
                className={styles.home__serviceSection__imgBox__image}
              />
            </picture>
          </div>
          <div className={styles.home__serviceSection__contentBox}>
            <h2 className={styles.home__serviceSection__contentBox__title}>Online Games</h2>
            <p className={styles.home__serviceSection__contentBox__description}>
              Play exciting titles instantly without downloads — just
              click and play online.
            </p>
            <button className={styles.home__serviceSection__contentBox__btn}>See More</button>
          </div>
        </section>

        <section className={styles.home__benefits}>
          <h2 className={styles.home__benefitsTitle}>Why Choose JoyBox?</h2>
          <div className={styles.home__benefitsList}>
            <div className={styles.home__benefit}>
              <div className={styles.home__benefit__imgBox}>
                <picture>
                  <source type="image/avif" srcSet={enjoyAndSaveImgAvif} />
                  <source type="image/webp" srcSet={enjoyAndSaveImgWebp} />
                  <img src={enjoyAndSaveImgJpeg} alt="Enjoy and Save"
                    className={styles.home__benefit__imgBox__image} />
                </picture>
              </div>
              <div className={styles.home__benefit__textBox}>
                <h3 className={styles.home__benefit__textBox__title}>Enjoy and Save</h3>
                <p className={styles.home__benefit__textBox__text}>
                  Affordable subscriptions with premium features.
                </p>
              </div>
            </div>
            <div className={styles.home__benefit}>
              <div className={styles.home__benefit__imgBox}>
                <picture>
                  <source type="image/avif" srcSet={enjoyEverywhereImgAvif} />
                  <source type="image/webp" srcSet={enjoyEverywhereImgWebp} />
                  <img src={enjoyEverywhereImgJpeg} alt="Enjoy Everywhere"
                    className={styles.home__benefit__imgBox__image} />
                </picture>
              </div>
              <div className={styles.home__benefit__textBox}>
                <h3 className={styles.home__benefit__textBox__title}>Enjoy Everywhere</h3>
                <p className={styles.home__benefit__textBox__text}>
                  Access JoyBox on any device — from TV to smartphone.
                </p>
              </div>
            </div>
            <div className={styles.home__benefit}>
              <div className={styles.home__benefit__imgBox}>
                <picture>
                  <source type="image/avif" srcSet={enjoyAnytimeImgAvif} />
                  <source type="image/webp" srcSet={enjoyAnytimeImgWebp} />
                  <img src={enjoyAnytimeImgJpeg} alt="Enjoy Anytime"
                    className={styles.home__benefit__imgBox__image} />
                </picture>
              </div>
              <div className={styles.home__benefit__textBox}>
                <h3 className={styles.home__benefit__textBox__title}>Enjoy Anytime</h3>
                <p className={styles.home__benefit__textBox__text}>
                  Stream and play whenever you want, wherever you are.
                </p>
              </div>
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
