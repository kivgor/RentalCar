import { NavLink } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';
import { useSelector } from 'react-redux';
import {
  selectCars,
  selectIsError,
  selectIsLoading,
} from '../../redux/cars/slice';

const CarList = () => {
  const isloading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const { cars } = useSelector(selectCars);

  return (
    <>
      {isError && <h2>Something went wrong!</h2>}
      {isloading && <h2>Loading...</h2>}
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
