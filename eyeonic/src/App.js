import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import './data/ProductInfo.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDesign from './components/ProductDesign';
import ProductInfo from './components/ProductInfo';
import Review from './components/Review';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Products from './pages/Products';
import Sales from './pages/Sales';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

library.add(faFacebook, faInstagram, faGooglePlusG, faTwitter, faMagnifyingGlass, faBell, faCartShopping, faUser, faBars)

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav className='nav-link'>
        <div class="row">
          <div class="col" align="center"><Link to='/Nhom3-eProject' className='nav-link-to'>HOME</Link></div>
          <div class="col" align="center"><Link to="/Nhom3-eProject/products" className='nav-link-to'>PRODUCTS</Link></div>
          <div class="col" align="center"><Link to="/Nhom3-eProject/sales" className='nav-link-to'>SALES</Link></div>
          <div class="col" align="center"><Link to="/Nhom3-eProject/about" className='nav-link-to'>ABOUT</Link></div>
          <div class="col" align="center"><Link to="/Nhom3-eProject/contact" className='nav-link-to'>CONTACT</Link></div>
        </div>
      </nav>

      <Routes>
        <Route path='/Nhom3-eProject' element={<Home />} />
        <Route path='/Nhom3-eProject/products' element={<Products />} />
        <Route path='/Nhom3-eProject/sales' element={<Sales />} />
        <Route path='/Nhom3-eProject/about' element={<About />} />
        <Route path='/Nhom3-eProject/contact' element={<Contact />} />
        <Route path='/Nhom3-eProject/productdetails' element={<ProductInfo />} />
        <Route path='/Nhom3-eProject/user' element={<SignIn />} />
        <Route path='/Nhom3-eProject/products/:id' element={<ProductDesign />} />
        <Route path='/Nhom3-eProject/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
