import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={styles.footerUl}>
      <p>
        (© 2026) - Project created by&nbsp;
        <a
          href="https://github.com/mdot2x3"
          target="_blank"
          rel="noopener noreferrer"
        >
          mdot2x3
        </a>
      </p>
    </ul>
  );
};

export default Footer;
