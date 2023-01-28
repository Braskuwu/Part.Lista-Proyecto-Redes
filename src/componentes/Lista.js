import React from 'react';
import '../stylesheets/Lista.css';

class Lista extends React.Component {
  render () {
    return(
      <div className='contenedor-lista'>
        <img className='imagen-lista' src={require(`../imagenes/lista-${this.props.imagen}.jpg`)} alt={`imagen de ${this.props.imagen}`} />
        <div className='contenedor-texto-lista'>
          <p className='nombre-lista'>
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className='cargo-lista'>
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className='texto-lista'>
            "{this.props.texto}"
          </p>
        </div>
      </div>
    );
  }
}

export default Lista;