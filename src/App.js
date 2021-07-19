//Creado por: Mauro Clavijo
//Fecha: 19/07/2021

import React, { Component } from 'react';
import Table from './Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id_order : "",
          details: [],
          order:[]
      }
  }

  //Aqui vamos a actualizar el valor del id_order de acuerdo a lo que sea input del usuario

  handleChange = (e) => {
  this.setState({ id_order: e.target.value });  // This will update the input value in state
  }

  //Esta funcion realiza la petición cada que se haga un submit al boton de buscar

  doingASearch=(event)=>{
    event.preventDefault();
  	fetch('http://localhost:8080/orders/'+this.state.id_order+'/details')
  	.then(res => res.json())
  	.then(details => this.setState({ 'details': details }))

    fetch('http://localhost:8080/orders/'+this.state.id_order)
  	.then(res => res.json())
  	.then(order => this.setState({ 'order': order }))
    }



  //Aqui se renderiza la pagina

  render() {
    return (
        <div className="App">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="./">
               Detalles de Orden
            </a>
          </nav>
          <form style={{ marginTop: "1em" }} onSubmit={this.doingASearch}>
            <label htmlFor="searchTerm">
              <strong>Id de Orden </strong>
              <input type="text" name="id_order" onChange={this.handleChange}/>
              <button style={{ margin: "1em" }} type="submit" class="btn btn-light">Buscar</button>
            </label>
          </form>
          <Container style={{ margin: "1em" }}>
            <Row>
              <Col sm>Cliente:{this.state.order.client}</Col>
              <Col sm>N Orden:{this.state.order.number}</Col>
              <Col sm>Total:${this.state.order.total}</Col>
            </Row>
          </Container>
          <Table details={ this.state.details } />
        </div>
      );
    }
}

export default App;
