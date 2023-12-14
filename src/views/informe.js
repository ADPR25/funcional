import React, { useState } from 'react';
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Container,
    styled
} from '@mui/material';
import { informes } from '../api/apis.ts';

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

const Informe = () => {
    const [informesData, setInformesData] = useState([]);

    const handleFetchInforme = async () => {
        try {
            const response = await informes();

            if (response.error) {
                console.error('Error al obtener el informe', response.error);
            } else {
                console.log('Respuesta de la API:', response);
                setInformesData(response);
            }
        } catch (error) {
            console.error('Error al obtener el informe', error);
        }
    };

    return (
        <RootContainer>
            <center>
                <ActionButton
                    variant="contained"
                    color="primary"
                    onClick={handleFetchInforme}
                >
                    Obtener Informes
                </ActionButton>
            </center>
            <br /> <br />
            {informesData.length > 0 && (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre del Informe</TableCell>
                                <TableCell>Número del Informe</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {informesData.map((informe) => (
                                <TableRow key={informe._id}>
                                    <TableCell>{informe._id}</TableCell>
                                    <TableCell>{informe.nombre}</TableCell>
                                    <TableCell>{informe.numero}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </RootContainer>
    );
};

export default Informe;
