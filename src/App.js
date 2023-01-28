import React from 'react';
import './App.css';
import Lista from './componentes/Lista';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que puedo aprender usando React: </h1>
          <Lista 
          nombre='Gatito'
          pais='Minecraft'
          imagen='gatominecraft'
          cargo='gatito'
          empresa='Minecraft'
          texto='Un gato en minecraft, no hay mas contexto' />
          <Lista
          nombre='A.E. Wiggin'
          pais='La batalla formica'
          imagen='wiggin'
          cargo='general de guerra'
          empresa='La batalla formica'
          texto='Cuando comprendo a mi enemigo lo suficiente como para derrotarlo, entonces tambien lo amo' />
          <Lista
          nombre='Lucho chikito'
          pais='una calle tercermundista'
          imagen='luchochikito'
          cargo='Joder, lucho cachaco'
          empresa='vivo'
          texto='Joa lucho, tkm jhagsdjhasgj' />
        </div>
      </div>
    );
  }
}

export default App;