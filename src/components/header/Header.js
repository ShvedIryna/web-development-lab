import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1 className="site-name">Elite Places</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><a href="#Cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;