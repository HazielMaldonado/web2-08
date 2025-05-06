const serverCreadoHTTP = require('http');

//Definimos el puerto donde va ha tener salida nuestro servidor
const puertoSalida = 3008;

//Crear el servidor
 const servidorCreado = serverCreadoHTTP.createServer((req,res)=>{
    //Estabelcer el encabezado de respuesta

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo desde Node.js con el modulo http bandera 1');

 });


 servidorCreado.listen(puertoSalida,()=>{
    console.log(`Servidor en escucha desde: http://127.0.0.1:${puertoSalida}`);
 });