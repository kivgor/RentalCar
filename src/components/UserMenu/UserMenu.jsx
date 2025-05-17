import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.menuLink, isActive && css.active);
};

const UserMenu = () => {
  return (
    <ul className={css.userMenu}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
