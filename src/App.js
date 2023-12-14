import React, {useState} from 'react';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes as Switch, Route, Link } from 'react-router-dom';
import ImplementoPorCategoria from './views/ImplementoPorCategoria';
import ObtenerFichas from './views/ObtenerFichas';
import EnviarCorreo from './views/EnviarCorreo';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bienestar App
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/implemento-por-categoria">
              <ListItemText primary="Implemento por Categoría" />
            </ListItem>
            <ListItem button component={Link} to="/obtener-fichas">
              <ListItemText primary="Obtener Fichas" />
            </ListItem>
            <ListItem button component={Link} to="/enviar-correo">
              <ListItemText primary="Enviar Correo" />
            </ListItem>
          </List>
        </Drawer>

        <div style={{ marginLeft: drawerOpen ? 240 : 0, padding: '20px', transition: 'margin 0.5s' }}>
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
