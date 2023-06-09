/* eslint-disable */
import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="Logo" />
            <div className='navigation-links'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;