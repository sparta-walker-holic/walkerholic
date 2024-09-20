import { Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useUserStore from '../stores/useUserStore.js';

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useUserStore((state) => state.user);
  const { pathname } = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to='/login'
        replace
        state={{ redirectedForm: pathname }}
      />
    );
  }
  return <Outlet />;
};

export default AuthenticatedRoute;
