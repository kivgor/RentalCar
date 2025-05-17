import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
const AppBar = () => {
  return (
    <div className={css.appBar}>
      <div className={css.container}>
        <svg className={css.iconLogo}>
          <use href={'/icons.svg#icon-logo'}></use>
        </svg>
        <UserMenu />
      </div>
    </div>
  );
};

export default AppBar;
