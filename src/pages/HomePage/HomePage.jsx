import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <p className={css.title}>Find your perfect rental car</p>
      <NavLink to="catalog" className={css.button}>
        View Catalog
      </NavLink>
    </div>
  );
};

export default HomePage;
