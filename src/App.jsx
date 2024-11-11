
import Header from './shared/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './shared/Footer';

const App = () => {
  const location = useLocation();
  const path = location.pathname.includes('register') || location.pathname.includes('login') 
  return (
    <div className=''>
     { path || <Header />}
      <Outlet />
      {path || <Footer />}
   </div>
  );
};

export default App;