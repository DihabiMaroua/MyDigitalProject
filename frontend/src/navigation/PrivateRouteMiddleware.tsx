import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const auth = window.localStorage.getItem('AUTH');

  let authObject: { jwt: string } | null = null;
  if (auth) {
    authObject = JSON.parse(auth);
  }

  const token = authObject?.jwt;

  return token ? <Outlet /> : <Navigate to='/authentication' replace />;
};

export default PrivateRoute;
