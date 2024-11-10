
import React from 'react';
import Header from './shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';

const App = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;