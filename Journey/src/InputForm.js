/**
 * Created by khutaijashariff on 4/7/17.
 */
import React, { Component } from 'react';
import Search from './Search';
import DateRange from './DateRange';
import { Button } from 'react-bootstrap';
import {calculateDays} from './CalculateDays';
import Cards from './Cards';
import CardContainer from './CardContainer';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: {city: '', state: '', country: '', longitude: '', latitude: ''},
            noOfDays: '',
            pointsOfInterest: '',
            renderCardContainer: false,
            currentAddedLocation: '',
            currentActiveDay: "1",
            locationOnDay: []
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

        let searchResults = document.getElementById('test');
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
        this.setState({
            renderCardContainer: true
        })

    }

    getCurrentClickedLocation(location) {
       this.setState({
           currentAddedLocation: location,
           //locationOnDay: [...this.state.locationOnDay, {day: this.state.currentActiveDay, location: location}]
           locationOnDay: [...this.state.locationOnDay, {location: location, day: this.state.currentActiveDay}]
       })
    }

    getActiveDay(dayId) {
        this.setState({
            currentActiveDay: dayId
        })
    }

    render() {
        return (
           <div> 
            <div>
                <form className={'top-margin text-center'}>
                <div className={'col-md-3 col-md-offset-2'}><Search /></div>
                 <div className={'col-md-3'}><DateRange /></div>
                    <Button className={'col-md-2 btn-info'} onClick={this.onSubmit}>Search</Button>
                </form>
                <br/>                
            </div>
            <div>
                <Cards getPassedLocation={this.getCurrentClickedLocation.bind(this)} pointsOfInterest={this.state.pointsOfInterest}/>
                {this.state.renderCardContainer && <CardContainer getActiveDay={this.getActiveDay.bind(this)} deactivateLocation={this.getCurrentClickedLocation.bind(this)} locationOnDay={this.state.locationOnDay} pointsOfInterest={this.state.pointsOfInterest} noOfDays={this.state.noOfDays}/>}
            </div> 
           </div>    
        );
    }
}
