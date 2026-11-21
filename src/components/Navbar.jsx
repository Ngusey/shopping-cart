import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function Navbar({ totalItems }) {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        My Store
      </NavLink>

      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">
          Cart ({totalItems})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;