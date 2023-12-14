import React, { useState, useEffect } from 'react';
import {
    Button,
    Table,  
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Grid,
    Typography,
    Container,
    styled,
} from '@mui/material';
import { buscar_prestamos,} from '../api/apis.ts';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
}));

const ActionButton = styled(Button)({
    marginTop: '16px',
    marginRight: '8px',
});

const TableContainer = styled(Paper)({
    marginTop: '16px',
});

const Lista_Prestamos = () => {
    const [buscarPrestamosData, setBuscarPrestamosData] = useState([]);

    useEffect(() => {
        buscar_prestamos()
            .then((data) => {
                setBuscarPrestamosData(data);
            })
            .catch((error) => console.error(error));
    }, []);

  



    return (
        <RootContainer>
            <Grid container spacing={2}>
                {buscarPrestamosData.map((item) => (
                    <Grid item key={item._id} xs={12} md={6} lg={4}>
                        <Paper>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="h6">
                                                {item.implementos[0]
                                                    ? item.implementos[0].nombre
                                                    : 'N/A'}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <strong>Fecha de inicio:</strong>{' '}
                                            {new Date(item.fecha_inicio).toLocaleDateString()}{' '}
                                            {new Date(item.fecha_inicio).toLocaleTimeString()}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <strong>Fecha final:</strong>{' '}
                                            {new Date(item.fecha_fin).toLocaleDateString()}{' '}
                                            {new Date(item.fecha_fin).toLocaleTimeString()}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <strong>Estado del préstamo:</strong>{' '}
                                            {item.estado && item.estado.nombre ? item.estado.nombre : 'N/A'}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </RootContainer>
    );
};

export default Lista_Prestamos;
