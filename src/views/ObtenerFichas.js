import React, { useState, useEffect } from 'react';
import { obtenerFichas } from '../api/apis.ts';

const ObtenerFichas = () => {
    const [fichas, setFichas] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await obtenerFichas();

                // Verificar si la respuesta contiene un estado (status)
                if (response && response.status === 200) {
                    const data = await response.json();
                    setFichas(data);
                } else {
                    setError('Error al obtener las fichas');
                }
            } catch (error) {
                setError('Error al obtener las fichas');
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    const handleMostrarTabla = () => {
        setShowTable(true);
        console.log('showTable:', showTable); // Agrega esta línea para verificar
    };


    return (
        <div>
            <h2>Lista de Fichas</h2>
            <button onClick={handleMostrarTabla}>Mostrar Tabla</button>

            {error && <p>{error}</p>}

            {showTable && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre del Programa</th>
                            <th>Nivel</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha de Fin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fichas.map((ficha) => (
                            <tr key={ficha._id}>
                                <td>{ficha._id}</td>
                                <td>{ficha.codigo}</td>
                                <td>{ficha.programa.nombre}</td>
                                <td>{ficha.programa.nivel.nombre}</td>
                                <td>{new Date(ficha.fecha_inicio).toLocaleDateString()}</td>
                                <td>{new Date(ficha.fecha_fin).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ObtenerFichas;