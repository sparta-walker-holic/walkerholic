import { Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useUserStore from '../stores/useUserStore.js';

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useUserStore((state) => state.user);
  const { pathname } = useLocation();

  // 로그인이 안돼있으면
  if (!isAuthenticated) {
    return (
      // 로그인 페이지로 보냄
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
