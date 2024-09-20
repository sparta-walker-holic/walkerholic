import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './../pages/Login';
import Main from './../pages/Main';
import Map from './../pages/Map';
import Mypage from './../pages/Mypage';
import Register from './../pages/Register';
import Form from './../pages/Form';
import Detail from './../pages/Detail';
import NotAuthenticatedRoute from './NotAuthenticatedRoute.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path='/map'
            element={<Map />}
          />

          <Route element={<NotAuthenticatedRoute />}>
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/register'
              element={<Register />}
            />
          </Route>

          <Route element={<AuthenticatedRoute />}>
            <Route
              path='/mypage'
              element={<Mypage />}
            />
            <Route
              path='/form'
              element={<Form />}
            />
            <Route
              path='/detail/:postId'
              element={<Detail />}
            />
          </Route>
          <Route
            path='*'
            element={
              <Navigate
                to='/'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
