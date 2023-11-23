import React from 'react'
import logo from './image/EyeonicLogo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

function Header() {
    return (
        <div>
            <div className='logo-container'>
                <div className="site-logo">
                    <Link to='/'>
                        <img src={logo} alt="Website Logo" />
                    </Link>
                </div>
                <span>Eyeonic</span>
            </div>
            <div className="search-bar-container">
                <input type="text" placeholder='Searching for something?' />
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search-icon' />
            </div>
            <div className="user-icons">
                <a href="/">
                    <FontAwesomeIcon icon="fa-solid fa-bell" className='fa-xl' />
                </a>
                <a href="/user">
                    <FontAwesomeIcon icon="fa-solid fa-user" className='fa-xl' />
                </a>
                <a href='/cart'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='fa-xl' />
                </a>
            </div>
        </div>
    );
}

export default Header;