import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';
import { NavLink } from 'react-router-dom';
const CatalogPage = ({ cars }) => {
  return (
    <div className={css.catalogPage}>
      <SearchBar />
      <CarList cars={cars} />
    </div>
  );
};

export default CatalogPage;
