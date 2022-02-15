import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Tecnologia-OK</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/category/notebooks">Notebooks</Link>
                <Link to="/category/celulares">Celulares</Link>
                <Link to="/category/auriculres">Auriculres</Link>
                <Link to="/category/teclados">Teclados</Link>
            </ul>
            <div>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;