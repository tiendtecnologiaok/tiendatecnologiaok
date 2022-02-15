import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, vaciarCarrito } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos, volvé al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
                <>
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <h3>{producto.name}</h3>
                            <button>X</button>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </>
            )}
        </>
    );
};

export default Cart;