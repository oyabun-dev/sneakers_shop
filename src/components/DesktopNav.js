// import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/icons/logo.svg';
import cart from '../assets/images/icons/icon-cart.svg';
import $ from 'jquery';

export default function DesktopNav() {
    // const [isMenuActive, setIsMenuActive] = useState(false);
    // const toggleMenu = () => {
    //     setIsMenuActive(!isMenuActive);
    // }
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: data => {
            // console.log(data);
        }
    });

    return (
        <nav className="navbar">

            <div className='mobile-assets'>
                {/* <img className='menu' src={isMenuActive ? close : menu} alt="menu" onClick={toggleMenu} /> */}
                <Link to="/">
                    <img className='logo' src={logo} alt="logo" />
                </Link>
                <div className='navbar-links-desk'>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/baba">yoo</NavLink>
                    <NavLink className="nav-link" to="/">active</NavLink>
                </div>
            </div>
            <div className='cart-profile'>
                <div className='cart'>
                    <img src={cart} alt="cart" />
                    <span className='cart-count'>0</span>
                </div>
                <div className='profile'>
                    <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="profile" />
                </div>
            </div>
        </nav>
    )
}
