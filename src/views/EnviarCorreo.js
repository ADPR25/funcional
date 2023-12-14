import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';

const EnviarCorreo = () => {
    const [correo, setCorreos] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [asunto, setAsunto] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://proyecto-backend-sgbienestar.onrender.com/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo,
                    mensaje,
                    asunto,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            const data = await response.json();
            setSnackbarMessage(data.message);
            setOpenSnackbar(true);
        } catch (error) {
            setSnackbarMessage(`Error al enviar el correo: ${error.message}`);
            setOpenSnackbar(true);
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <TextField
                label="Correos (separados por comas)"
                value={correo.join(',')}
                onChange={(e) => setCorreos(e.target.value.split(','))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar Correo
                </Button>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </div>
    );
};

export default EnviarCorreo;
