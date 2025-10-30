import React from "react";
import styles from "./Home.module.scss";

import Header from "../../components/Header/Header.tsx";

import moviesImg from "/assets/home/movies.jpeg";
import tvshowsImg from "/assets/home/tv-shows.jpeg";
import streamsImg from "/assets/home/streams.jpeg";
import gamesImg from "/assets/home/games.jpeg";

import enjoyAndSaveImg from "/assets/home/enjoy-and-save.jpeg";
import enjoyEverywhereImg from "/assets/home/enjoy-everywhere.jpeg";
import enjoyAnytimeImg from "/assets/home/enjoy-anytime.jpeg";

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <main className={styles.home}>
      <section className={styles.home__serviceSection}>
        <div className={styles.home__serviceSection__imgBox}>
          <img
            src={tvshowsImg}
            alt="TV Shows category"
            className={styles.home__serviceSection__imgBox__image}
          />
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
          <img
          src={moviesImg}
          alt="Movies category"
            className={styles.home__serviceSection__imgBox__image}
          />
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
          <img
          src={streamsImg}
          alt="Streams category"
            className={styles.home__serviceSection__imgBox__image}
          />
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
          <img
          src={gamesImg}
          alt="Online Games category"
            className={styles.home__serviceSection__imgBox__image}
          />
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
              <img
                src={enjoyAndSaveImg}
                alt="Enjoy and Save"
                className={styles.home__benefit__imgBox__image}
              />
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
              <img
                src={enjoyEverywhereImg}
                alt="Enjoy Everywhere"
                className={styles.home__benefit__imgBox__image}
              />
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
              <img
                src={enjoyAnytimeImg}
                alt="Enjoy Anytime"
                className={styles.home__benefit__imgBox__image}
              />
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
    </>
  );
};

export default Home;
