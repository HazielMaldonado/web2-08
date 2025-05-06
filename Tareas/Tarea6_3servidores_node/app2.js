//importar express
const express = require("express");

//generar instancia
const app = express();

//definicion de puerto
const port = 2000;

app.get('/',(req,res)=>{
    res.send(`Hola mundo desde otro puerto: ${port}`);
});

app.listen(port);