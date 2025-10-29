require('dotenv').config();
const express = require('express');
const { corsMiddleware } = require('./shared/middleware/cors');
const { timeStamp } = require('console');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(corsMiddleware);

app.get('/', (req, res) =>{
    res.json({
        message: 'HOLA, EXPRESS FUNCIONANDO CON MYSQL',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

app.use('/api/v1', require('./routes/auth'));

const startServer = async () => {
    try{
        app.listen(PORT, () =>{
            console.log('SERVIDOR EN http://localhost:${PORT}');
        });
    } catch (error){
        console.log('ERROR AL INICIALIZAR EL SERVIDOR', error);
    }
};

startServer();