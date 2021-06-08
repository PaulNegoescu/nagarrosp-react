import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../Auth/AuthContext';
import styles from './Nav.module.css';

export function Nav() {
  const { userProfile, logout } = useAuthContext();

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        Nagarro Remote Learning
      </Link>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/counter">
            Counter
          </NavLink>
        </li>
        <li className={styles['push-right']}>
          <NavLink activeClassName={styles.active} to="/movies">
            Movies
          </NavLink>
        </li>
        {userProfile?.email && (
          <li>
            `Welcome ${userProfile.email}`,
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </li>
        )}
        {!userProfile?.email && (
          <>
            <li>
              <NavLink activeClassName={styles.active} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
