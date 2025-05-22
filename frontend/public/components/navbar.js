import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>InfoApp</h1>
            <ul className="navbar-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#informacion">Información</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
