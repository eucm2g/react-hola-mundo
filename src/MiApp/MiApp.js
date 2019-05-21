import React from 'react';
import logo from './../logo.svg';
import './MiApp.css';

function MiApp(props) {
  const variable=props.variable;
  const array=props.array;
  console.log(props);
  return (
    <div className="MiApp">
      <header className="MiApp-header">
        <img src={logo} className="MiApp-logo" alt="logo" />
        <p>
          {variable}
        </p>
        <ul className="menu">
          {
            array && array.map(
              (item,key)=> <li key={key}>{item.nombre}</li>
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default MiApp;
