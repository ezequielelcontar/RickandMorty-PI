import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from './Nav.module.css'; // Ajusta la ruta de importación según sea necesario

export default function Nav(props) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLinks}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </div>
      <button className={styles.logoutButton} onClick={props.logout}>Logout ❌</button>
      <hr />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
