const express = require('express');
const cors = require('cors');
const connection = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para obtener información desde la base de datos
app.get('/api/info', (req, res) => {
    connection.query('SELECT * FROM informacion', (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error al obtener los datos' });
        } else {
            res.json(results);
        }
    });
});

// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});