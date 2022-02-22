import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { traerProductos } from '../../api/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    //tarea pesada
    useEffect(() => {
        traerProductos
            .then((res) => {
                categoryId
                    ? setItems(
                          res.filter((prod) => prod.category === categoryId)
                      )
                    : setItems(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                //otra accion
                setLoading(false);
            });
    }, [categoryId]);

    //console.log(items);

    return (
        <>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
                    <ItemList items={items} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;