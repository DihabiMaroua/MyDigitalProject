import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Filtre from '../pages/Filtre';
import Suggestion from '../pages/Suggestion';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Account from '../pages/protected/Account';
import PrivateRoute from './PrivateRouteMiddleware';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='artisans'>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Suggestion />} />
        <Route path='services' element={<Filtre />} />
        <Route path='authentication' element={<Login />} />
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
