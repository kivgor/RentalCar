import css from './HomePage.module.css';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <p className={css.title}>Find your perfect rental car</p>
      <Button width="wide" color="blue" to="/catalog" marginButtom>
        View Catalog
      </Button>
    </div>
  );
};

export default HomePage;
