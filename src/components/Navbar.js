import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/icons/logo.svg';
// import cart from '../assets/images/icons/icon-cart.svg';
// import close from '../assets/images/icons/icon-close.svg';
import menu from '../assets/images/icons/icon-menu.svg';

export default function Navbar() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }
    return (
        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
            <div>
                <img className='menu' src={menu} alt="menu" onClick={toggleMenu} />
                <Link to="/">
                    <img className='logo' src={logo} alt="logo" />
                </Link>
            </div>
            <div className='navbar-links'>

                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/baba">yoo</NavLink>
                <NavLink className="nav-link" to="/">active</NavLink>
            </div>
        </nav>
    )
}
