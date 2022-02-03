import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css'
import ItemListContainer from './../ItemListContainer/ItemListContainer';
import Contador from '../Counter/Counter';

const Navbar = () => {
    return (
        <nav>
            <h1>Tecnologia-OK</h1>
            <ul>
                <li>Computadoras</li>
                <li>Celulares</li>
                <li>Contacto</li>
            </ul>
            <div>
            <CartWidget />
            </div>
            <div>
            <ItemListContainer />
            </div>
            <div>
            <Contador />
            </div>
        </nav>
    );
};

export default Navbar;