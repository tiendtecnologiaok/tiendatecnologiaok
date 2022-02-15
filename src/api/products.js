export const products = [
    {
        id: 1,
        name: 'Notebook',
        stock: 5,
        price: 70500,
        img: './img/notebook.png',
        category: 'notebooks',
    },
    {
        id: 2,
        name: 'Celular',
        stock: 4,
        price: 50000,
        img: './img/celular.png',
        category: 'celulares',
    },
    {
        id: 3,
        name: 'Auricular',
        stock: 8,
        price: 5300,
        img: './img/auricular.png',
        category: 'auriculares',
    },
    {
        id: 4,
        name: 'Teclado',
        stock: 3,
        price: 3000,
        img: './img/teclado.png',
        category: 'teclados',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 4000);
});