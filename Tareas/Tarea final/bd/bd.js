// bd/bd.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {


    

    // Añadir usuario
    router.post('/add', (req, res) => {
        const { name, email } = req.body;
        const insertar = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.query(insertar, [name, email], (err) => {
            if (err) {
                console.error('No se insertó el registro', err);
            }
            res.redirect('/');
        });
    });

    // Editar usuario
    router.get('/edit/:id', (req, res) => {
        const { id } = req.params;
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if (err) {
                console.error('Error al obtener usuario', err);
            }
            res.render('edit', { user: results[0] });
        });
    });

    // Actualizar usuario
    router.post('/update/:id', (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.query(sql, [name, email, id], (err) => {
            if (err) {
                console.error('Error al actualizar usuario', err);
                res.send('Error de Update');
            } else {
                res.redirect('/');
            }
        });
    });

    // Eliminar usuario
    router.get('/delete/:id', (req, res) => {
        const { id } = req.params;
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], (err) => {
            if (err) {
                console.error('Error al eliminar usuario', err);
                res.send('Error en eliminar usuario');
            } else {
                res.redirect('/');
            }
        });
    });

    return router;
};
