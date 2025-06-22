import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { fetchCarsByQuery } from '../../services/api';

const CatalogPage = () => {
  const [carList, setCarList] = useState([]);
  const [query] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCarsData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { cars, totalPages } = await fetchCarsByQuery(page, query);

        if (page > 1) {
          setCarList(prevState => [...prevState, ...cars]);
        } else {
          setCarList(cars);
        }

        setTotalPages(totalPages);
        if (totalPages === 0) {
          toast.error('No cars by query: ' + query);
          return;
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCarsData();
  }, [page, query]);
  // console.log(carList);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

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

      {carList.length > 0 && <CarList carList={carList} />}
      {carList.length > 0 && page < totalPages && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {/* <Button width="narrow" color="white">
          Load more
        </Button> */}
    </div>
  );
};

export default CatalogPage;
