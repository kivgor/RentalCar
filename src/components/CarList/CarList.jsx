import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';
import Button from '../Button/Button';

const CarList = ({ cars }) => {
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
        <Button width="narrow" color="white" to="catalog">
          Load more
        </Button>
      </div>
    </>
  );
};

export default CarList;
