const express = require('express');
const rutas = require("./routes");

//instanciamos express
const app = express();

//configuracion del server uso de rutas
app.use("/",routes);

//puerto
const port= 3089;

//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});
