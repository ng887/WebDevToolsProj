/**
 * Created by khutaijashariff on 4/10/17.
 */
import React, { Component } from 'react';
import Search from './Search';
import DateRange from './DateRange';
import { Button } from 'react-bootstrap';
import {calculateDays} from './CalculateDays';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: { city: '', state: '', country: '', longitude: '', latitude: '' },
            noOfDays: ''
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
                destination: {
                    city: place.address_components[0].long_name,
                    state: place.address_components[2].long_name,
                    country: place.address_components[3].long_name,
                    longitude: place.geometry.location.lng(),
                    latitude: place.geometry.location.lat()
                }
            })


        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("you searched");
        console.log(this.state.destination);
        console.log(localStorage.getItem('startDate'));
        console.log(localStorage.getItem('endDate'));
        const noOfDays = calculateDays(localStorage.getItem('startDate'), localStorage.getItem('endDate'));
        this.setState({noOfDays: noOfDays})
        let request = {
            location: new google.maps.LatLng(this.state.destination.latitude, this.state.destination.longitude),
            radius: '500',
            types: ['amusement_park', 'aquarium', 'art_gallery', 'casino', 'hindu_temple', 'mosque', 'museum',
                'night_club', 'park', 'zoo'
            ]
        };

        let searchResults = document.getElementById('placesOfInterest');
        let service = new google.maps.places.PlacesService(searchResults);
        service.nearbySearch(request, callback);

        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {

                for (var i = 0; i < results.length; i++) {
                    searchResults.innerHTML += results[i].opening_hours + '<br />';
                }
            }
        }
    }


    render() {
        return (
            <div>
                <form  className={'top-margin text-center'}>
                <div className={'col-md-3 col-md-offset-2'}><Search /></div>
                 <div className={'col-md-3'}><DateRange /></div>
                    <Button className={'col-md-2 btn-primary'} onClick={this.onSubmit}>Search</Button>

                </form>
                 <h3 style={{marginLeft:600}}>Places of Interests</h3>
                <div id="placesOfInterest" style={{marginLeft:600}}></div>
            </div>
        );
    }
}
