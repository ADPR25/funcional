import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes as Switch } from 'react-router-dom';
import App from './App';
import ImplementoPorCategoria from './views/ImplementoPorCategoria';
import ObtenerFichas from './views/ObtenerFichas';
import EnviarCorreo from './views/EnviarCorreo';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/implemento-por-categoria">
                    <ImplementoPorCategoria />
                </Route>
                <Route path="/obtener-fichas">
                    <ObtenerFichas />
                </Route>
                <Route path="/enviar-correo">
                    <EnviarCorreo />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
