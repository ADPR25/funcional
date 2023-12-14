import React, { useState } from 'react';
import {
    Button,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    TextField,
} from '@mui/material';

const Fichas = () => {
    const [codigo, setCodigo] = useState('');
    const [fichas, setFichas] = useState([]);

    const obtenerFichas = async () => {
        try {
            const response = await fetch(
                `https://proyecto-backend-sgbienestar.onrender.com/ficha/codigo/${codigo}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log('Data:', data);

            if (Array.isArray(data)) {
                setFichas(data);
            } else if (typeof data === 'object') {
                // If the response is a single object, convert it to an array
                setFichas([data]);
            } else {
                console.error('La respuesta del servidor no es válida:', data);
                setFichas([]);
            }
        } catch (error) {
            console.error('Error al obtener las fichas:', error.message);
            setFichas([]);
        }
    };

    const handleCodigoChange = (event) => {
        setCodigo(event.target.value);
    };

    return (
        <div>
            <br />
            <center>
                <TextField
                    label="Código de Ficha"
                    variant="outlined"
                    value={codigo}
                    onChange={handleCodigoChange}
                />
                <Button variant="contained" color="primary" onClick={obtenerFichas}>
                    Obtener Fichas
                </Button>
            </center>
            <br />
            {fichas.length > 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Programa</TableCell>
                                <TableCell>Fecha de Inicio</TableCell>
                                <TableCell>Fecha de Fin</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fichas.map((ficha) => (
                                <TableRow key={ficha._id}>
                                    <TableCell>{ficha.codigo}</TableCell>
                                    <TableCell>{ficha.programa.nombre}</TableCell>
                                    <TableCell>{ficha.fecha_inicio}</TableCell>
                                    <TableCell>{ficha.fecha_fin}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default Fichas;
