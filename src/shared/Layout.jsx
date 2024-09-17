import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='h-full'>
      <header />
      <main className='h-full'>
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default Layout;
