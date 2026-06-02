import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={styles.footerUl}>
      <li>(© 2026) - Project created by </li>
      <li>
        <a
          href="https://github.com/mdot2x3"
          target="_blank"
          rel="noopener noreferrer"
        >
          mdot2x3
        </a>
      </li>
      <li>(click to view more on GitHub)</li>
    </ul>
  );
};

export default Footer;
