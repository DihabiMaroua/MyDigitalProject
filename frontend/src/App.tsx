import React from 'react';
import Header from './components/header/Header';
import Router from './navigation/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
