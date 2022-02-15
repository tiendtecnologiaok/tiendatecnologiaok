import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div style={{ border: '1px solid black' }}>
            <img src={item.img} alt={item.name} width="200px" />
            <div>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`detail/${item.id}`}>Ver Detalle</Link>
            </div>
        </div>
    );
};

export default Item;