import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = ({ carList }) => {
  return (
    <ul className={css.carList}>
      {carList.map(car => (
        <li key={car.id} className={css.item}>
          <CarCard {...car} key={car.id} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
