import React, { useState } from 'react';
import { obtenerImplementoPorCategoria } from '../api/apis.ts';

const ImplementoPorCategoria = () => {
    const [categoryId, setCategoryId] = useState('');
    const [implementos, setImplementos] = useState([]);

    const handleFetchImplementos = async () => {
        try {
            const data = await obtenerImplementoPorCategoria(categoryId);
            setImplementos(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Implementos por Categoría</h2>
            <label>Categoría ID:</label>
            <input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
            <button onClick={handleFetchImplementos}>Obtener Implementos</button>
            <ul>
                {implementos.map((implemento) => (
                    <li key={implemento.id}>{implemento.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ImplementoPorCategoria;
