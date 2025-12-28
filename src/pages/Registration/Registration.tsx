import React from "react";
import { useState, useRef } from "react";

import styles from "./Registration.module.scss";

import Footer from "../../components/Footer/Footer.tsx";

import googleIcon from "/registration/svg/google-logo.svg";
import metaIcon from "/registration/svg/meta-logo.png";
import appleIcon from "/registration/svg/apple-logo.svg";

import joybloxIconWebp from "/_shared/webp/joybox-icon.webp";
import joybloxIconPng from "/_shared/png/joybox-icon.png";

type ModalStatus = "idle" | "registration" | "success";

const Registration: React.FC = () => {
  const [status, setStatus] = useState<ModalStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("registration");
    await sleep(2000);

    setStatus("success");
    await sleep(2000);

    setStatus("idle");
    form.reset();
  };

  return (
    <>
      <main className={styles.register}>
        <div className={styles.register__container}>
          <div className={styles.register__background}></div>

          <section className={styles.register__formSection}>
            <h1 className={styles.register__title}>
              Create Your JoyBox Account
            </h1>
            <p className={styles.register__subtitle}>
              Sign up to start your JoyBox!
            </p>

            <form
              ref={formRef}
              className={styles.register__form}
              aria-label="Registration form on JoyBox"
              onSubmit={handleSubmit}
            >
              <div className={styles.register__field}>
                <label htmlFor="email" className={styles.register__label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className={styles.register__input}
                  autoComplete="email"
                />
              </div>

              <div className={styles.register__field}>
                <label htmlFor="username" className={styles.register__label}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  required
                  className={styles.register__input}
                  autoComplete="webauthn"
                />
              </div>

              <div className={styles.register__field}>
                <label htmlFor="password" className={styles.register__label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className={styles.register__input}
                />
              </div>

              <div className={styles.register__field}>
                <label
                  htmlFor="repeatPassword"
                  className={styles.register__label}
                >
                  Repeat Password
                </label>
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat your password"
                  required
                  className={styles.register__input}
                />
              </div>

              <button type="submit" className={styles.register__submit}>
                Sign Up
              </button>
            </form>
            <div className={styles.register__social}>
              <p>Or sign up with:</p>
              <div className={styles.register__socialBtns}>
                <button
                  className={styles.register__socialBtn}
                  onClick={handleSubmit}
                >
                  <img src={googleIcon} alt="Google" loading="lazy" /> Google
                </button>
                <button
                  className={styles.register__socialBtn}
                  onClick={handleSubmit}
                >
                  <img src={metaIcon} alt="Meta account" loading="lazy" /> Meta
                </button>
                <button
                  className={styles.register__socialBtn}
                  onClick={handleSubmit}
                >
                  <img src={appleIcon} alt="Apple Mail" loading="lazy" /> Apple
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      {status !== "idle" && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalOverlay__modalContainer}>
            <picture>
              <source type="image/webp" srcSet={joybloxIconWebp} />
              <img
                src={joybloxIconPng}
                alt="JoyBox official logo"
                className={
                  status === "registration"
                    ? styles.modalOverlay__modalContainer__icon
                    : status === "success"
                      ? styles["modalOverlay__modalContainer__icon--success"]
                      : styles.modalOverlay__modalContainer__icon
                }
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            {status === "registration" && (
              <p className={styles.modalOverlay__modalContainer__text}>
                Registration…
              </p>
            )}
            {status === "success" && (
              <p
                className={
                  styles["modalOverlay__modalContainer__text--success"]
                }
              >
                Success!
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
