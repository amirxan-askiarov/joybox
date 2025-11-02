import React from 'react'

import styles from './Registration.module.scss'

import googleIcon from '/registration/svg/google-logo.svg'
import metaIcon from '/registration/svg/meta-logo.png'
import appleIcon from '/registration/svg/apple-logo.svg'

const Registration: React.FC = () => {
  return (
    <main className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__background}></div>

        <section className={styles.register__formSection}>
          <h1 className={styles.register__title}>Create Your JoyBox Account</h1>
          <p className={styles.register__subtitle}>
            Sign up to start your JoyBox!
          </p>
          
          <form className={styles.register__form} aria-label="Registration form">
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
              <label htmlFor="repeatPassword" className={styles.register__label}>
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
              <button className={styles.register__socialBtn}>
                <img src={googleIcon} alt="Google" loading="lazy" /> Google
              </button>
              <button className={styles.register__socialBtn}>
                <img src={metaIcon} alt="Meta account" loading="lazy" /> Meta
              </button>
              <button className={styles.register__socialBtn}>
                <img src={appleIcon} alt="Apple Mail" loading="lazy" /> Apple
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Registration;