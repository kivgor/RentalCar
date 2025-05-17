import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function fetchCars() {
      const response = await axios.get(
        'https://car-rental-api.goit.global/cars'
      );
      setCars(response.data.cars);
    }
    fetchCars();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage cars={cars} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
