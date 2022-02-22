import React, { useContext, useState } from 'react';
import { Message } from '../../context/Message.js';
import './Counter.css';

const Counter = ({ stock, initial, onAdd }) => {
    const { handleMessage } = useContext(Message);
    const [number, setNumber] = useState(1);

    const add = () => {
        number < stock
            ? setNumber(number + 1)
            : handleMessage('Máximo stock', 'warning');
    };

    const substract = () => {
        number > initial && setNumber(number - 1);
    };

    const addToCart = () => {
        onAdd(number);
    };

    return (
        <div className="container-buton">
            <div className="container-add-substract">
                <button onClick={add}>+</button>
                <p>{number}</p>
                <button onClick={substract}>-</button>
            </div>
            <div>
                <button
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Counter;