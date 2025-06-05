import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchData } from '../../redux/cars/operations';

const CatalogPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          'https://car-rental-api.goit.global/cars'
        );
        setCars(data.cars);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <div className={css.catalogPage}>
      <SearchBar />
      {loading && (
        <p className={css.messageText}>Loading data, please wait...</p>
      )}
      <BeatLoader color={'blue'} loading={loading} size={10} />
      {error && (
        <p className={css.messageText}>
          Whoops, something went wrong! Please try to reload this page!
        </p>
      )}
      {cars.length > 0 && <CarList cars={cars} />}
    </div>
  );
};

export default CatalogPage;
