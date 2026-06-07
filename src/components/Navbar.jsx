import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

const Navbar = ({ cartCount }) => {
  return (
    <ul className={styles.navbarUl}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Shop
        </NavLink>
      </li>
      <li className={styles.cartTab}>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Cart
        </NavLink>
        {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
      </li>
    </ul>
  );
};

export default Navbar;
