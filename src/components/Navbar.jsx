import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router";

const Navbar = ({ cartCount }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.logo}>
          Proto
        </Link>
      </div>

      <div className={styles.navCenter}>
        <ul className={styles.navbarUl}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Shop
            </NavLink>
          </li>
          <li className={styles.cartTab}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Cart
            </NavLink>
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </li>
        </ul>
      </div>

      <div className={styles.navRight} />
    </div>
  );
};

export default Navbar;
