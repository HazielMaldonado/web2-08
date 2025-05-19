// backend/app.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Vistas
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

// backend/app.js
app.use(express.static(path.join(__dirname, '..', 'styles')));

// Conexión MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Base de datos conectada');
    }
});

// Ruta principal que muestra usuarios
app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            res.send('Error al obtener los usuarios');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Rutas adicionales (importadas desde bd/bd.js)
const userRoutes = require('../bd/bd')(db);
app.use('/', userRoutes);

// Puerto
const port = 3005;
app.listen(port, () => {
    console.log(`Servidor corriendo en: http://127.0.0.1:${port}`);
});


