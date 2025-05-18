import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <SearchBar />
      <CarList />
    </div>
  );
};

export default CatalogPage;
