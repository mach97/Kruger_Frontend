//Creado por: Mauro Clavijo
//Fecha: 19/07/2021

//Aqui se está creando la tabla que ocuparemos como template para pasarle los datos obtenidos de la api

import React from 'react';

const Table = ({ details }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Num</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      { (details.length > 0) ? details.map( (droplet, index) => {
        return (
          <tr key={ index }>
            <td>{ index+1 }</td>
            <td>{ droplet.detail }</td>
            <td>{ droplet.cantidad}</td>
            <td>{ droplet.precioUnitario }</td>
            <td>{ droplet.totalDetail }</td>
          </tr>
        )
      }) : <tr><td colSpan="5">Inserte un valor</td></tr> }
      </tbody>
    </table>
  );
}

export default Table
