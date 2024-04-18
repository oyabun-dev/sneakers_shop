import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    let theme = document.body.classList.contains('darkMode') ? 'Light Mode' : 'Dark Mode';
    const [mode, setMode] = useState(theme);
    const toggleMode = () => {
        document.body.classList.toggle('darkMode');
        document.body.classList.contains('darkMode') ? setMode('Light Mode') : setMode('Dark Mode')
    }
    return (
        <main className='landing'>
            <div className='heading'>Limited HomePage</div>
            <div className='subheading'>Limited HomePage</div>
            <p className="paragraph">This is a paragraph</p>
            <p className="card-price">$ 125.00</p>
            <p className="card-discount">$ 250.00</p>
            <p className="card-discount-rate">50%</p>
            <p className="item-counter">3</p>
            <p className='cart-title'>Cart</p>
            <p className='cart-paragraph'>lorem ipsum dolor <span className='cart-price'>$ 125.00</span></p>
            <button className='btn-orange'>Click here</button>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/baba">yoo</NavLink>
            <NavLink className="nav-link" to="/">active</NavLink>
            <button className='btn-orange' onClick={toggleMode}>{mode}</button>
        </main>
    )
}
