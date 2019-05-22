import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MiApp from './MiApp/MiApp';
import MiClase from './MiClase/MiClase';
import * as serviceWorker from './serviceWorker';
import array from './modelo/datos'
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MiApp variable="texto" array={array} />, document.getElementById('MiElemento'));
ReactDOM.render(<MiClase />, document.getElementById('MiClase'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
