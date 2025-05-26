import { NavLink } from 'react-router-dom';
import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ width, color, children, to, marginButtom }) => {
  return (
    <>
      <NavLink
        to={to}
        className={clsx(
          css.button,
          css[color],
          css[width],
          marginButtom && css.marginButtom
        )}
      >
        {children}
      </NavLink>
    </>
  );
};

export default Button;
