import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import CarDetailsPage from '../pages/CarDetailsPage/CarDetailsPage.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../redux/cars/operations.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
