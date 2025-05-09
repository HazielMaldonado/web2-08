const express = require('express');
const path = require('path');
const rutas = require('./routes/routes');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', rutas);

const port = 5000;

app.listen(port, () => {
    console.log(`Servidor en: http://127.0.0.1:${port}`);
});
