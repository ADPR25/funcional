import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const EmailValidationForm = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(null); // Reset validation status when email changes
    };

    const validateEmail = async () => {
        try {
            const response = await axios.get('https://proyecto-backend-sgbienestar.onrender.com/dominio-sena');
            const allowedDomains = response.data.map((domain) => domain.nombre);

            const isEmailValid = allowedDomains.some((domain) => email.endsWith(domain));
            setIsValid(isEmailValid);
        } catch (error) {
            console.error('Error fetching domain data:', error);
        }
    };

    return (
        <div>
            <TextField
                label="Correo electrónico"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
            />
            <Button variant="contained" color="primary" onClick={validateEmail}>
                Validar Correo
            </Button>
            {isValid !== null && (
                <p>{isValid ? 'El correo es válido.' : 'El correo no es válido para el dominio permitido.'}</p>
            )}
        </div>
    );
};

export default EmailValidationForm;
