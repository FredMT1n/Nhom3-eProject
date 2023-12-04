import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import './data/ProductInfo.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDesign from './components/ProductDesign';
import ProductInfo from './components/ProductInfo';
import SignIn from './pages/SignIn';
import Sales from './pages/Sales';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NavbarAll from './components/NavbarAll';
import Home from './pages/Home'
import Products from './pages/Products';
import Footer1 from './components/Footer1'

library.add(faFacebook, faInstagram, faGooglePlusG, faTwitter, faMagnifyingGlass, faBell, faCartShopping, faUser, faBars)

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarAll />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Products />} />
          <Route path='/sale' element={<Sales />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetails' element={<ProductInfo />} />
          <Route path='/user' element={<SignIn />} />
          <Route path='/products/:id' element={<ProductDesign />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer1 />
      </div>
    </HashRouter>
  );
}

export default App;
