import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProdDetaill from './pages/prodDetaill';
import Error404 from './pages/error404';
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  const isLogin = true;
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/prod/:id' element={ isLogin ? <ProdDetaill /> : <Error404 /> } />
        </Routes>
      <Footer />
    </>
  );
};
