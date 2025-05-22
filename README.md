# Proyecto Full Stack: Aplicación Informativa

## Requisitos
- Node.js
- MySQL

## Instalación

### 1. Crear la base de datos
Importa el archivo `crear_base_datos.sql` en tu servidor MySQL.

### 2. Instalar dependencias
```bash
cd mi-aplicacion
npm install
cd frontend
npm install
cd ../backend
npm install
```

### 3. Ejecutar el proyecto (frontend + backend)
Desde la raíz del proyecto:

```bash
npm run dev
```

Esto iniciará:
- Backend en: http://localhost:3001
- Frontend en: http://localhost:3000

## Nota
Si usas contraseña de MySQL, modifícala en `backend/db/database.js`