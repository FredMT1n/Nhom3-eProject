import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faCartShopping, faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './SignIn';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <td><Link to='/'>Home</Link></td>
            <td className='dropdown'><Link to="/products">Products</Link></td>
            <td><Link to="/sales">Sales</Link></td>
            <td><Link to="/about">About</Link></td>
            <td><Link to="/contact">Contact</Link></td>
          </tr>
        </table>
      </nav>

      <Routes>
        <Route path='/' />
        <Route path='/products' />
        <Route path='/sales' />
        <Route path='/about' />
        <Route path='/contact' />
        <Route path='/user' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
