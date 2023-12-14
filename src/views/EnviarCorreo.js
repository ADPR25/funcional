import React, { useState } from 'react';
import { enviarCorreo } from '../api/apis.ts';

const EnviarCorreo = () => {
    const [destinatarios, setDestinatarios] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [asunto, setAsunto] = useState('');

    const handleEnviarCorreo = async () => {
        try {
            await enviarCorreo({
                destinatarios: destinatarios.split(','),
                mensaje,
                asunto,
            });
            alert('Correo enviado correctamente');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Enviar Correo</h2>
            <label>Destinatarios:</label>
            <input type="text" value={destinatarios} onChange={(e) => setDestinatarios(e.target.value)} />
            <label>Mensaje:</label>
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            <label>Asunto:</label>
            <input type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
            <button onClick={handleEnviarCorreo}>Enviar Correo</button>
        </div>
    );
};

export default EnviarCorreo;
