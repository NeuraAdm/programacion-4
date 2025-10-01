const {products} = require ('./data/products.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello!",
        timestamp: new Date().toISOString(),
        status: "success",
    })
});

app.get('/products', (req, res) => {
    res.json({
        message: "Products",
        timestamp: new Date().toISOString(),
        status: "success",
        products: products
    })
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return res.status(404).json({
            message: "Producto No Encontrado",
            timestamp: new Date().toISOString(),
            status: "error"
        });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
