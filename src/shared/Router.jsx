import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Login from './../pages/Login';
import Main from './../pages/Main';
import Map from './../pages/Map';
import Mypage from './../pages/Mypage';
import Register from './../pages/Register';
import Form from './../pages/Form';
import Detail from './../pages/Detail';

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
            path='/login'
            element={<Login />}
          />
          <Route
            path='/map'
            element={<Map />}
          />
          <Route
            path='/mypage'
            element={<Mypage />}
          />
          <Route
            path='/register'
            element={<Register />}
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
