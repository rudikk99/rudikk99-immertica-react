import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Personall from '../components/Personall';

class App extends Component {
    constructor(){
        super();
    
        this.state = {};
        //this.handleClick = handleClick.bind(this);
      }
    render() {
      return (
          <div className="App">
              <Navbar light color="secondary">
              <div className="container">
                  <NavbarBrand href="/">Immetrica</NavbarBrand>
              </div>
              </Navbar>
            <div>
              </div>
          </div>
      );
  }
}

export default App;

