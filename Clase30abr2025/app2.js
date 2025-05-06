//importar express
const express = require("express");

//generar instancia
const app = express();

//definicion de puerto
const port = 5029;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde otro puerto');
});

app.listen(port);
