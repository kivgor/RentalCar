import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import CarDetailsPage from '../pages/CarDetailsPage/CarDetailsPage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Route>

        <Route path="*" element={<MainLayout />}>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
