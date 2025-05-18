import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const [carDetails, setCarDetails] = useState([]);
  const { id } = useParams();

  // console.log(id);
  console.log(carDetails);

  useEffect(() => {
    async function fetchCarById() {
      const { data } = await axios.get(`/cars/${id}`);
      setCarDetails(data);
    }
    fetchCarById();
  }, []);

  return (
    <div className={css.carDetailsPage}>
      <img className={css.img} src={carDetails.img} width="640" height="412" />
      <div className={css.textThumb}>
        <p className={css.carText}>
          {carDetails.brand} {carDetails.model}, {carDetails.year}
        </p>

        <svg className={css.icon}>
          <use href={'/icons.svg#icon-location'}></use>
        </svg>
      </div>
    </div>
  );
};

export default CarDetailsPage;
