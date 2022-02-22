import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Message } from '../../context/Message.js';
import Counter from '../Counter/Counter';

import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [showButton, setShowButton] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { handleMessage } = useContext(Message);

    const onAdd = (cantidad) => {
        setShowButton(true);
        addToCart(cantidad, item);
        handleMessage('Productos cargados con éxito', 'succes');
    };

    return (
        <div className="container-detail">
            <div className="container-img">
                <img src={item.img} alt={item.name} />
            </div>
            <div style={{ width: '150px' }}>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                {showButton ? (
                    <>
                        <Link to="/cart">Ir al carrito</Link>
                    </>
                ) : (
                    <Counter stock={item.stock} initial={0} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;