import React, { useEffect , useState } from 'react';

const ItemListContainer = () => {
    const [traerProductos] = useState([]);
    // const { id } = useParams();

    // console.log(id);
    
    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("hola");
            }, 2000);
        })
    },[]
)};
export default ItemListContainer;