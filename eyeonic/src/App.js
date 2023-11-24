import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './SignIn';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from './Footer';
import './ProductInfo.json'

library.add(faFacebook, faInstagram, faGooglePlusG, faTwitter, faMagnifyingGlass, faBell, faCartShopping, faUser, faBars)

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav className='nav-link'>
        <div className="menu">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <table className='navbar'>
          <tr>
            <td><Link to='/Nhom3-eProject' className='nav-link-to'>Home</Link></td>
            <td className='dropdown'><Link to="/Nhom3-eProject/products" className='nav-link-to'>Products</Link></td>
            <td><Link to="/Nhom3-eProject/sales" className='nav-link-to'>Sales</Link></td>
            <td><Link to="/Nhom3-eProject/about" className='nav-link-to'>About</Link></td>
            <td><Link to="/Nhom3-eProject/contact" className='nav-link-to'>Contact</Link></td>
            <td><Link to="/Nhom3-eProject/productdetails" className='nav-link-to'>ProductDetail</Link></td>

          </tr>
        </table>
      </nav>

      <Routes>
        <Route path='/Nhom3-eProject' />
        <Route path='/Nhom3-eProject/products' />
        <Route path='/Nhom3-eProject/sales' />
        <Route path='/Nhom3-eProject/about' />
        <Route path='/Nhom3-eProject/contact' />
        <Route path='/Nhom3-eProject/productdetails'/>
        <Route path='/Nhom3-eProject/user' element={<SignIn />} />
      </Routes>
      <footer>
      </footer>
    </div>
  );
}

export default App;
