-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS mi_aplicacion;

-- Usar la base de datos
USE mi_aplicacion;

-- Crear la tabla 'informacion' si no existe
CREATE TABLE IF NOT EXISTS informacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL
);

-- Insertar datos de ejemplo
INSERT INTO informacion (titulo, descripcion) VALUES
  ('Medio Ambiente', 'Cuidar el planeta es responsabilidad de todos.'),
  ('Tecnología', 'La innovación impulsa el futuro.'),
  ('Salud', 'Una vida sana comienza con buenos hábitos.');
