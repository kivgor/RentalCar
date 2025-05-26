import { NavLink } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectIsError,
  selectIsLoading,
} from '../../redux/cars/slice';
import { useEffect } from 'react';
import { fetchData } from '../../redux/cars/operations';
import Button from '../Button/Button';

const CarList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isloading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const { cars } = useSelector(selectCars);
  console.log(cars);

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
        <Button width="narrow" color="white" to="catalog">
          Load more
        </Button>
      </div>
    </>
  );
};

export default CarList;
