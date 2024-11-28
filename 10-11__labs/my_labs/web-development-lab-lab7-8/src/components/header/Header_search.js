import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from '../buttons/SearchBar';

function Header_search({ searchTerm, onSearchChange }) {
    return (
        <header className="header">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" className="logo" />
                <h1 className="site-name">Elite Places</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><a href="/carts">Cart</a></li>
                    <li>
                        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header_search;