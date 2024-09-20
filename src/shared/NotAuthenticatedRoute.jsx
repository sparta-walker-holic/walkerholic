import useUserStore from '../stores/useUserStore.js';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const NotAuthenticatedRoute = () => {
  const { isAuthenticated } = useUserStore((state) => state.user);
  const pathname = useLocation();
  console.log('not authenticated only page visited');
  console.log('NotAuthenticatedRoute ~ isAuth', isAuthenticated);
  if (isAuthenticated) {
    return (
      <Navigate
        to='/mypage'
        replace
        state={{ redirectedForm: pathname }}
      />
    );
  }

  return <Outlet />;
};

export default NotAuthenticatedRoute;
