import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div
            style={{
                border: '2px solid #181818',
                backgroundColor: 'aquamarine',
                borderRadius: '10px',
            }}
        >
            <img
                src={item.img}
                alt={item.name}
                width="200px"
                style={{ borderRadius: '10px' }}
            />
            <div
                style={{
                    padding: '10px 10px 15px 10px',
                }}
            >
                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
                <Link
                    style={{
                        textDecoration: 'none',
                        backgroundColor: 'aquamarine',
                        padding: '7px',
                        color: 'black',
                        borderRadius: '10px',
                        border: '2px solid black',
                    }}
                    to={`/detail/${item.id}`}
                >
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;