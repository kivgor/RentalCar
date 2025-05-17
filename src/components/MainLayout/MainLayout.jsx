import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './MainLayout.module.css';
const MainLayout = () => {
  return (
    <div className={css.mainLayout}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
