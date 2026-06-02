import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.navbarUl}>
      <li>Home</li>
      <li>Shop</li>
      <li>Cart</li>
    </ul>
  );
};

export default Navbar;
