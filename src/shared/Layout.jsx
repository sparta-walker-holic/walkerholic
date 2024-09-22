import { Outlet } from 'react-router-dom';
import Navibar from '../components/Navibar';

const Layout = () => {
  return (
    <div className='h-full'>
      <Navibar />
      <main className='h-full mt-[80px]'>
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default Layout;
