import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css'
// import ItemListContainer from './../ItemListContainer/ItemListContainer';
import Counter from '../Counter/Counter';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemDetail from '../ItemDetail/ItemDetail';

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
            <Counter />
            </div>
            <div>
            <ItemDetail />
            </div>
        </nav>
    );
};

export default Navbar;