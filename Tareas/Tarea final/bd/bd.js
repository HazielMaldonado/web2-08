// bd/bd.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {

    // Mostrar todos los usuarios
    router.get('/', (req, res) => {
        db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                console.error(err);
                res.send('Error al obtener los usuarios');
            } else {
                res.render('index', { users: results });
            }
        });
    });

    // Agregar usuario
    router.post('/add', (req, res) => {
        const { name, email } = req.body;
        const insertarUsuario = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.query(insertarUsuario, [name, email], (err) => {
            if (err) {
                console.error('No se pudo insertar el usuario', err);
                res.send('Error al agregar usuario');
            } else {
                res.redirect('/');
            }
        });
    });

    // Mostrar formulario de edición
    router.get('/edit/:id', (req, res) => {
        const { id } = req.params;
        const buscarUsuario = 'SELECT * FROM users WHERE id = ?';
        db.query(buscarUsuario, [id], (err, results) => {
            if (err) {
                console.error('Error al obtener usuario', err);
                res.send('Error al cargar edición');
            } else {
                res.render('edit', { user: results[0] });
            }
        });
    });

    // Actualizar usuario
    router.post('/update/:id', (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        const actualizarUsuario = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.query(actualizarUsuario, [name, email, id], (err) => {
            if (err) {
                console.error('No se pudo actualizar el usuario', err);
                res.send('Error al actualizar');
            } else {
                res.redirect('/');
            }
        });
    });

    // Eliminar usuario
    router.get('/delete/:id', (req, res) => {
        const { id } = req.params;
        const eliminarUsuario = 'DELETE FROM users WHERE id = ?';
        db.query(eliminarUsuario, [id], (err) => {
            if (err) {
                console.error('Error al eliminar usuario', err);
                res.send('Error al eliminar');
            } else {
                res.redirect('/');
            }
        });
    });

    return router;
};
