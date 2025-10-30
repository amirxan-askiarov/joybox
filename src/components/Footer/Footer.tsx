import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>
          © {new Date().getFullYear()} JoyBox. All rights reserved.
        </p>

        <ul className={styles.footer__links}>
          <li><a href="" className={styles.footer__link}>Terms of Service</a></li>
          <li><a href="" className={styles.footer__link}>Privacy Policy</a></li>
          <li><a href="" className={styles.footer__link}>Send Us Feedback</a></li>
          <li><a href="" className={styles.footer__link}>Help</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
