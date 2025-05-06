//Importacion de express
const express = require ('express');

//instanciar express
const app = express();

const path = require('path');


//Puerto
const port = 3059;
app.get("/",(req,res)=> {
    //res.send("Hola mundo");
    //res.sendFile("D:/8vo semestre/Programacion web 2/Repositorio/web2-08/Clase5may2025/index.html")
    res.sendFile( path.join(__dirname+"/index.html"));
    

});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
});

