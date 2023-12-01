import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <NavbarAll />
        <Routes>
          <Route path='/Nhom3-eProject/home' element={<Home />} />
          <Route path='/' element={<Navigate replace to='/Nhom3-eProject/home' />} />
          <Route path='/Nhom3-eProject/product' element={<Products />} />
          <Route path='/Nhom3-eProject/sale' element={<Sales />} />
          <Route path='/Nhom3-eProject/about' element={<About />} />
          <Route path='/Nhom3-eProject/contact' element={<Contact />} />
          <Route path='/Nhom3-eProject/productdetails' element={<ProductInfo />} />
          <Route path='/Nhom3-eProject/user' element={<SignIn />} />
          <Route path='/Nhom3-eProject/products/:id' element={<ProductDesign />} />
          <Route path='/Nhom3-eProject/cart' element={<Cart />} />
        </Routes>
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;
