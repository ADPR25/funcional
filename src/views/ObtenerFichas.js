import React, { useState, useEffect } from 'react';
import { obtenerFichas } from '../api/apis.ts';

const ObtenerFichas = () => {
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerFichas();
                setFichas(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista de Fichas</h2>
            <ul>
                {fichas.map((ficha) => (
                    <li key={ficha.id}>{ficha.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ObtenerFichas;
