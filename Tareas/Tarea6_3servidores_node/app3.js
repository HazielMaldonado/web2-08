//importar express
const express = require("express");

//generar instancia
const app = express();

//definicion de puerto
const port = 3000;

app.get('/',(req,res)=>{
    res.send(`Hola mundo desde un tercer y ultimo puerto: ${port}`);
});

app.listen(port);