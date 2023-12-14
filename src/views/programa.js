import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Programa = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [programs, setPrograms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Cargar datos desde la URL
        const fetchData = async () => {
            try {
                const response = await fetch('https://proyecto-backend-sgbienestar.onrender.com/programa/programa');
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const data = await response.json();
                setPrograms(data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []); // Se ejecutará solo una vez al montar el componente

    const handleProgramSelection = (event, value) => {
        setSelectedProgram(value);
    };

    const handleInputChange = (event, newInputValue) => {
        setSearchTerm(newInputValue);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Proyecto React con Autocompletado</h1>
            <Autocomplete
                options={programs}
                getOptionLabel={(option) => option.nombre}
                renderInput={(params) => (
                    <TextField {...params} label="Programa de Formación" variant="outlined" />
                )}
                onChange={handleProgramSelection}
                inputValue={searchTerm}
                onInputChange={handleInputChange}
            />
            {selectedProgram && (
                <div>
                    <h2>Programa Seleccionado: {selectedProgram.nombre}</h2>
                    {/* Puedes mostrar más detalles del programa seleccionado aquí */}
                </div>
            )}
        </div>
    );
};

export default Programa;
