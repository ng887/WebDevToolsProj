import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    componentDidMount() {
      /* global google b:true */
        const input = document.getElementById('autocomplete')
        this.autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] })
    }

    render() {
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">

                <input id="autocomplete"/>
              </p>
            </div>
        )
    }
}
export default App;
