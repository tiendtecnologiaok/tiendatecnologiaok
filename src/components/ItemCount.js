import react , { useState } from 'react';


function ItemCount () => {
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    Contador () {
        return(
            <div>
                <h2>Contador</h2>
                <div>
                    <button onClick={sumar}>+</button>
                    <button onClick={restar}>-</button>
                </div>
                <div>{ contador }</div>
            </div>
        );
    }
};

export default ItemCount;