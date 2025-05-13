const express = require('express');
const mySql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//configuraion de plantilla

app.set('view engine', 'ejs');

//conexion a la BD
const db = mySql.createConnection({
  host: 'localhost', //host de la base de datos
  user:'root', //usuario de la base de datos
  password:'1234', //contraseña de la base de datos
  database:'node_crud', //Nombre de la base de datos
  port:3306 //puerto 

});

//validación de la conexión
db.connect((err) => {
  if (err) {
    console.error('Sin conexion a la DB', err);
  } else {
    console.log('Base de datos conectada');
  }
});
