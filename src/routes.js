import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Modificado: Quité 'as Switch'
import App from './App';
import ImplementoPorCategoria from './views/ImplementoPorCategoria';
import ObtenerFichas from './views/ObtenerFichas';
import EnviarCorreo from './views/EnviarCorreo';

const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/implemento-por-categoria" element={<ImplementoPorCategoria />} />
                <Route path="/obtener-fichas" element={<ObtenerFichas />} />
                <Route path="/enviar-correo" element={<EnviarCorreo />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
};

export default MainRoutes;
