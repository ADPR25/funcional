import React, { useState } from 'react';
import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const ObtenerFichas = () => {
    const [fichas, setFichas] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    const obtenerFichas = async () => {
        try {
            const response = await fetch('https://proyecto-backend-sgbienestar.onrender.com/ficha');
            const data = await response.json();
            setFichas(data);
            setMostrarTabla(true);
        } catch (error) {
            console.error('Error al obtener las fichas:', error.message);
        }
    };

    return (
        <div>
            <br />
            <center>
                <Button variant="contained" color="primary" onClick={obtenerFichas}>
                    Obtener Fichas
                </Button>
            </center>
            <br />
            {mostrarTabla && (
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

export default ObtenerFichas;
