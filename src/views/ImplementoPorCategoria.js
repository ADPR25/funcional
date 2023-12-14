import React, { useState, useEffect } from 'react';
import { obtener_inplemeto_id, categoria } from '../api/apis.ts';
import {
    Select,
    MenuItem,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Container,
    Typography,
    FormControl,
    InputLabel,
    styled
} from '@mui/material';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
}));

const FormContainer = styled(FormControl)({
    minWidth: 200,
    marginBottom: '16px',
});

const ActionButton = styled(Button)({
    marginTop: '16px',
});

const TableContainer = styled(Paper)({
    marginTop: '16px',
});

const ImplementoPorCategoria = () => {
    const [implementoData, setImplementoData] = useState([]);
    const [categoriaData, setCategoriaData] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('');

    useEffect(() => {
        async function fetchImplementos() {
            try {
                const implementos = await obtener_inplemeto_id();
                setImplementoData(implementos);
            } catch (error) {
                console.error('Error al obtener los implementos', error);
            }
        }
        fetchImplementos();
    }, []);

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const categorias = await categoria();
                setCategoriaData(categorias);
            } catch (error) {
                console.error('Error al obtener las categorías', error);
            }
        }
        fetchCategorias();
    }, []);

    const handleFetchImplementos = async () => {
        try {
            if (selectedCategoria) {
                const implementos = await obtener_inplemeto_id(selectedCategoria);
                setImplementoData(implementos);
            } else {
                console.error('No category selected');
            }
        } catch (error) {
            console.error('Error al obtener los implementos por categoría', error);
        }
    };

    return (
        <RootContainer>
            <center>
                <Typography variant="h4">Implementos por Categoría</Typography>
                <br /><br />
                <FormContainer>
                    <InputLabel htmlFor="categoria">Selecciona una categoría:</InputLabel>
                    <Select
                        label="Selecciona una categoría"
                        id="categoria"
                        value={selectedCategoria}
                        onChange={(e) => setSelectedCategoria(e.target.value)}
                    >
                        <MenuItem value="" disabled>Selecciona una categoría</MenuItem>
                        {categoriaData.map((cat) => (
                            <MenuItem key={cat._id} value={cat._id}>{cat.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormContainer>
                <br />
                <ActionButton
                    variant="contained"
                    color="primary"
                    onClick={handleFetchImplementos}
                >
                    Obtener Implementos
                </ActionButton>
            </center>
            <br /> <br />
            {implementoData.length > 0 && (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre del Implemento</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {implementoData.map((implemento) => (
                                <TableRow key={implemento._id}>
                                    <TableCell>{implemento._id}</TableCell>
                                    <TableCell>{implemento.nombre}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </RootContainer>
    );
};

export default ImplementoPorCategoria;
