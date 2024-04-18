import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
    return (
        <main className='about-page'>
            <div>About</div>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="
                /baba">yoo</NavLink>
            <NavLink className="nav-link" to="/">active</NavLink>
        </main>
    )
}
