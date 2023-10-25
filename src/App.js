import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer'
import Header from './components/Header'



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
      <Route path='/Wishlist' element={<Wishlist />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
