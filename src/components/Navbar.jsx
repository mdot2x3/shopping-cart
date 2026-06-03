import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

const Navbar = () => {
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
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Cart
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
