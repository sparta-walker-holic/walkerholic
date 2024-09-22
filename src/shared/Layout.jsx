import { Outlet } from 'react-router-dom';
import Navibar from '../components/Navibar';

const Layout = () => {
  return (
    <div className='flex flex-col h-full'>
      <Navibar />
      <main className='mt-[80px] flex-1'>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
