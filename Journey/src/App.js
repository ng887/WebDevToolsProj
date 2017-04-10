/**
 * Created by neha on 4/6/2017.
 */

import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Intro from './Intro';
import Header from './Header';
import DateRange from './DateRange';
import $ from "jquery";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            destination:{city:'',state:'',country:'',longitude:'',latitude:''}
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        /* global google b:true */
        const placeInput = document.getElementById('autocomplete')
        let autocomplete = new google.maps.places.Autocomplete(placeInput, { types: ['geocode'] })

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            let place = autocomplete.getPlace();

        this.setState({
            destination:{
                city:place.address_components[0].long_name,
                state: place.address_components[2].long_name,
                country: place.address_components[3].long_name,
                longitude:place.geometry.location.lng(),
                latitude:place.geometry.location.lat()
            }
        })


    });

       const dateInput = document.getElementById('daterange');
       $(dateInput).daterangepicker();
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("you searched" );
        console.log(this.state.destination);
    }


    render() {
        return (
            <div>
            <div>
            <Header/>
            <Intro/>
            <Search  className={'top-margin text-center'} onSubmit={this.onSubmit}/>
            <DateRange  className={'top-margin text-center'} />
            </div>
            </div>
    );
    }
}
export default App;
