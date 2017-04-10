/**
 * Created by neha on 4/6/2017.
 */

import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Intro from './Intro';
import Header from './Header';
import DateRange from './DateRange';

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

       // const dateInput = document.getElementById('daterange');
       // $(dateInput).daterangepicker();
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("you searched" );
        console.log(this.state.destination);
        let request = {
        location: new google.maps.LatLng(this.state.destination.latitude, this.state.destination.longitude),
        radius: '500',
        types: ['amusement_park','aquarium','art_gallery','casino','hindu_temple','mosque','museum',
        'night_club','park','zoo']
        };

        let searchResults = document.getElementById('placesOfInterest');
        let service = new google.maps.places.PlacesService(searchResults);
        service.nearbySearch(request, callback);

        function callback (results,status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {

              for (var i = 0; i < results.length; i++) {
                  searchResults.innerHTML += results[i].name + '<br />';
              }
            }
        }
     }

    render() {
        return (
            <div>
            <div>
            <Header/>
            <Intro/>
            <Search  className={'top-margin text-center'} onSubmit={this.onSubmit}/>
            <DateRange className={'top-margin text-center'} />
            <h3>Places of Interests</h3>
            <div id="placesOfInterest"></div>
            </div>
            </div>
    );
    }
}
export default App;
