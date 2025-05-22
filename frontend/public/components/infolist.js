import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InfoList.css';

const InfoList = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/info')
            .then(response => setInfo(response.data))
            .catch(error => console.error('Error al obtener la información:', error));
    }, []);

    return (
        <section className="info-list" id="informacion">
            <h2>Temas informativos</h2>
            <ul>
                {info.map((item) => (
                    <li key={item.id} className="info-item">
                        <h3>{item.titulo}</h3>
                        <p>{item.descripcion}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default InfoList;
