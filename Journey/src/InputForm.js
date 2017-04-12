/**
 * Created by khutaijashariff on 4/10/17.
 */
import React, { Component } from 'react';
import Search from './Search';
import DateRange from './DateRange';
import { Button } from 'react-bootstrap';
import {calculateDays} from './CalculateDays';
import CardContainer from './CardContainer';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: { city: '', state: '', country: '', longitude: '', latitude: '' },
            noOfDays: '',
            pointsOfInterest: ''
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
        const noOfDays = calculateDays(localStorage.getItem('startDate'), localStorage.getItem('endDate'));
        this.setState({noOfDays: noOfDays});
        let request = {
            location: new google.maps.LatLng(this.state.destination.latitude, this.state.destination.longitude),
            radius: '5000',
            types: ['amusement_park', 'aquarium', 'art_gallery', 'casino', 'hindu_temple', 'mosque', 'museum',
                'park', 'zoo'
            ]
        };

        let searchResults = document.getElementById('placeHolder');
        let service = new google.maps.places.PlacesService(searchResults);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /**for (var i = 0; i < results.length; i++) {
                    searchResults.innerHTML += results[i].name + '<br />';
                }*/
                this.setState({pointsOfInterest: results});
            }
        });
        /**
        callback((results, status)  =>  {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /**for (var i = 0; i < results.length; i++) {
                    searchResults.innerHTML += results[i].name + '<br />';
                }
                this.setState({pointsOfInterest: results})
            }
        });*/

    }


    render() {
        return (
            <div>
                <form  className={'top-margin text-center'}>
                <div className={'col-md-3 col-md-offset-2'}><Search /></div>
                 <div className={'col-md-3'}><DateRange /></div>
                    <Button className={'col-md-2 btn-primary'} onClick={this.onSubmit}>Search</Button>
                </form>
                <div id="placeHolder"></div>
                <CardContainer pointsOfInterest={this.state.pointsOfInterest} noOfDays={this.state.noOfDays}/>
            </div>
        );
    }
}
