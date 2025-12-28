import React from "react";

import styles from "./NotFound.module.scss";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import NotFoundJpeg from "/not-found/NotFound.jpeg";
import NotFoundWebp from "/not-found/NotFound.webp";
import NotFoundAvif from "/not-found/NotFound.avif";

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.notFound}>
        <h1>404 Error - Not Found</h1>
        <h2>Sorry, we couldn't find this page.</h2>
        <picture>
          <source type="image/avif" srcSet={NotFoundJpeg} />
          <source type="image/webp" srcSet={NotFoundWebp} />
          <img src={NotFoundAvif} alt="404 Error - Not Found" className="" />
        </picture>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
