import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ img, price, id }) => {
    return (
        <div style={{ margin: '10px 20px', border: '2px solid black' }}>
            <Link to={`/item/${id}`}>
                <img width="200px" src={img} alt="producto" />
            </Link>
            <p>$ {price}</p>
            <button type="button" class="btn btn-warning">detalle del producto</button>

        </div>
    )
};

export default Item;