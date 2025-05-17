import { NavLink } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = ({ cars }) => {
  console.log(cars);

  return (
    <>
      {cars.length > 0 && (
        <ul className={css.carList}>
          {cars.map(car => (
            <CarCard {...car} key={car.id} />
          ))}
        </ul>
      )}
      <div className={css.loadMore}>
        <NavLink to="catalog" className={css.button}>
          Load more
        </NavLink>
      </div>
    </>
  );
};

export default CarList;
