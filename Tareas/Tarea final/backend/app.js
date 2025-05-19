// backend/app.js
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Configurar middleware
app.use(express.urlencoded({ extended: false }));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, '..', 'styles')));

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node_crud'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

// Importar y usar las rutas
const userRoutes = require('../bd/bd')(db);
app.use('/', userRoutes);

// Iniciar servidor
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
