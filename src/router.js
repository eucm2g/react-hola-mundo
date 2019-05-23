// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// paginas
import App from './paginas/App';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Pag404 from './paginas/Pag404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/contacto" component={Contacto} />
      <Route component={Pag404} />
    </Switch>
  </App>;

export default AppRoutes;