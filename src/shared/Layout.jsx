import { Outlet } from 'react-router-dom';
import Navibar from '../components/Navibar';

const Layout = () => {
  return (
    <div>
      <Navibar />
      <main className='mt-[100px]'>
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default Layout;
