const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Usa tu contraseña si tu MySQL tiene una
  database: 'mi_aplicacion'
});

// Conexión
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('✅ Conexión a MySQL exitosa.');
});

module.exports = connection;