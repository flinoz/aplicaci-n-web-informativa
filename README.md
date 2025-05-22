# InfoApp – Aplicación Web Informativa

**Tema:** Medio Ambiente • Tecnología • Salud  
**Full-stack:** HTML, CSS, JavaScript (Vanilla & React.js) + Node.js/Express + MySQL  

---

## 📋 Descripción

InfoApp es una aplicación web responsiva que muestra información sobre medio ambiente, tecnología y salud.  
- **Frontend**  
  - **HTML**: Estructura de páginas (`public/index.html`)  
  - **CSS**: Estilos globales y específicos de componentes (`src/styles/`)  
  - **JavaScript**: Interactividad básica y consumo de API con `fetch` o `axios`  
  - **React.js**: Componentes, estado y renderizado dinámico  

- **Backend**: API REST con Node.js y Express  
- **Base de datos**: MySQL  

Los usuarios pueden consultar temas pre-cargados en la tabla `informacion` y agregar nuevos ítems mediante peticiones POST.

---

## 📂 Estructura del proyecto


mi-aplicacion/
├── backend/
│ ├── database/
│ │ ├── database.js ← Conexión MySQL
│ │ └── script.sql ← Script de creación e inserción
│ ├── routes/
│ │ └── info.js ← Rutas GET/POST para /api/info
│ ├── index.js ← Servidor Express
│ └── package.json
├── frontend/
│ ├── public/
│ │ └── index.html ← Punto de montaje React
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.js
│ │ │ ├── InfoList.js
│ │ │ └── Footer.js
│ │ ├── styles/ ← CSS: App.css, Navbar.css, InfoList.css, Footer.css
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
├── README.md ← Este archivo
└── LICENSE ← Licencia del proyecto


---

## 🚀 Instalación y ejecución

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/tuusuario/infoapp.git
   cd infoapp

2. Crea la base de datos
   cd backend/database
mysql -u root -p < script.sql

3. Arranca el backend
   cd ../..
cd backend
npm install
npm start

4. Arranca el frontend
   cd ../frontend
npm install
npm start

5.-Abre en el navegador
-Frontend: http://localhost:3000
-Backend API: http://localhost:3001/api/info


🔧 Tecnologías

Frontend
HTML5
CSS3
JavaScript (Vanilla)
React.js

Backend
Node.js
Express
CORS
Base de datos: MySQL (mysql2)
Desarrollo concurrente: concurrently (opcional)



🤝 Contribuciones
¡Contribuciones bienvenidas!

Haz un fork.
Crea tu branch (git checkout -b feature/nueva-funcionalidad).
haz commit de tus cambios (git commit -m 'Añade funcionalidad X').
Envía un pull request.


¡Gracias por usar InfoApp!

