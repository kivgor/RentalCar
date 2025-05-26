import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../redux/cars/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={css.catalogPage}>
      <SearchBar />
      <CarList />
    </div>
  );
};

export default CatalogPage;
