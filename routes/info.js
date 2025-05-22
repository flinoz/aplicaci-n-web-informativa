const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// Ruta GET: obtener toda la información
router.get('/', (req, res) => {
    connection.query('SELECT * FROM informacion', (err, results) => {
        if (err) {
            console.error('❌ Error al obtener datos:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        res.json(results);
    });
});

// Ruta POST: agregar nueva información
router.post('/', (req, res) => {
    const { titulo, descripcion, fecha } = req.body;
    const sql = 'INSERT INTO informacion (titulo, descripcion, fecha) VALUES (?, ?, ?)';
    connection.query(sql, [titulo, descripcion, fecha], (err, result) => {
        if (err) {
            console.error('❌ Error al insertar datos:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        res.status(201).json({ message: 'Información agregada correctamente' });
    });
});

// Ruta DELETE: eliminar una entrada por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM informacion WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('❌ Error al eliminar datos:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        res.json({ message: 'Información eliminada correctamente' });
    });
});

module.exports = router;
