import clsx from 'clsx';
import css from './CarCard.module.css';
import { NavLink } from 'react-router-dom';

const CarCard = ({
  id,
  img,
  description,
  brand,
  model,
  rentalPrice,
  year,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  return (
    <li key={id}>
      <div className={css.carCard}>
        <img className={css.imgCard} src={img} alt={description} />
        <div className={css.textThumb}>
          <p className={css.text}>
            {brand}
            <span className={css.highlight}> {model}, </span>
            {year}
          </p>
          ${rentalPrice}
        </div>
        <ul className={clsx(css.addressThumb, css.addressMargin)}>
          <li>
            <p className={css.address}>{address.split(',').slice(1, 2)}</p>
          </li>
          <li>
            <p className={css.address}>{address.split(',').slice(2, 3)}</p>
          </li>
          <li>
            <p className={css.address}>{rentalCompany}</p>
          </li>
        </ul>

        <ul className={clsx(css.addressThumb, css.addressButtomMargin)}>
          <li>
            <p className={css.address}>{type}</p>
          </li>
          <li>
            <p className={clsx(css.address, css.cleanBorder)}>
              {mileage.toString()[0]} {mileage.toString().substring(1)}km
            </p>
          </li>
        </ul>
        <NavLink to="id" className={css.button}>
          Read more
        </NavLink>
      </div>
    </li>
  );
};

export default CarCard;
