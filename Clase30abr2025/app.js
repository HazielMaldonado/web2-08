//importar express
const express = require("express");

//generar instancia
const app = express();

//definicion de puerto
const port = 5023;

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

app.listen(port);
