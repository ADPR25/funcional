import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ImplementoPorCategoria from './views/ImplementoPorCategoria';
import ObtenerFichas from './views/ObtenerFichas';
import EnviarCorreo from './views/EnviarCorreo';
import Informe from './views/informe';
import Lista_Prestamos from './views/prestamo';
import Lista_sancionados from './views/sancion';
import Fichas from './views/ficha';
import Verifica from './views/verificaion';
import Programa from './views/programa';

const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/implemento-por-categoria" element={<ImplementoPorCategoria />} />
                <Route path="/obtener-fichas" element={<ObtenerFichas />} />
                <Route path="/enviar-correo" element={<EnviarCorreo />} />
                <Route path="/informe" element={<Informe />} />
                <Route path="/prestamos" element={<Lista_Prestamos />} />
                <Route path="/sancion" element={<Lista_sancionados />} />
                <Route path="/fichas" element={<Fichas />} />
                <Route path="/verifica" element={<Verifica />} />
                <Route path="/programa" element={<Programa />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
};

export default MainRoutes;
