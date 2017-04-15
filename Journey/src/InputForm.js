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
import DestinationWeather from './DestinationWeather';

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
            locationOnDay: [],
            destinationWeather:[]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.fetchWeatherDetails = this.fetchWeatherDetails.bind(this);
        
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
        this.fetchWeatherDetails(this.state.destination.city);
        this.fetchFlightDetails();
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
                this.setState({pointsOfInterest: results});
            }
        });
        this.setState({
            renderCardContainer: true
        })
      
    }


    fetchWeatherDetails(city) {
        const api_key = '6ab73f3655f1a0db55237e9f5b00bff9';
        const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

        const url = `${root_url}&q=${city},us`;
        console.log(url);
        fetch(url)
            .then((res) => {
                console.log(res);
                return res.json();
                // const data = this.state.weather;
                // this.setState({ weather: data.concat([res.data])});
            })
            .then((json) => {
                //console.log(json);
                //console.log('City Name: '+ json.city.name);
                //console.log(json.list[0]);
                //console.log('Current Temp: '+ parseInt(json.list[0].main.temp - 273.15) + ' degree C');
                //const currentTemp = parseInt(json.list[0].main.temp - 273.15);
                this.setState({
                      destinationWeather:json.list
                });

            });
    }

    fetchFlightDetails() {
        const api_key = 'no883655154989405407520801242418';
        const params = 'FR/eur/en-us/uk/us/anytime/anytime';
        const currency='usd';
        const locale = 'en-us';
        const originPlace = 'RDM';
        const destinationPlace = `${this.state.destination.latitude},${this.state.destination.longitude}-latlong`;
        console.log(destinationPlace);

        const root_url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${params}?apikey=${api_key}`;
       // const root_url = `http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/{this.destination.state.country}/{currency}/{locale}/{originPlace}/{this.destination.city}/{outboundPartialDate}/{inboundPartialDate}?apikey=${api_key}`;
        //browsedates/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}


        fetch(root_url)
            .then((res) => {
                //console.log(res);
                return res.json();
            })
            .then((json) => {
                //console.log(json);
            })

            .catch(function(error) {
               // console.log('Request failure: ', error);
            });

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
           {this.state.renderCardContainer ||   <div>
                <form className={'top-margin text-center'}>
                <div className={'col-md-3 col-md-offset-2'}><Search /></div>
                 <div className={'col-md-3'}><DateRange /></div>
                  <Button className={'col-md-2 btn-info'} onClick={this.onSubmit}>Search</Button>
                </form>
                <br/>                
            </div>}
            <div>
                <DestinationWeather destination={this.state.destination} destinationWeatherForecast ={this.state.destinationWeather} />
                <Cards getPassedLocation={this.getCurrentClickedLocation.bind(this)} pointsOfInterest={this.state.pointsOfInterest}/>
                {this.state.renderCardContainer && <CardContainer getActiveDay={this.getActiveDay.bind(this)} 
                deactivateLocation={this.getCurrentClickedLocation.bind(this)} 
                locationOnDay={this.state.locationOnDay}
                pointsOfInterest={this.state.pointsOfInterest} 
                noOfDays={this.state.noOfDays}/>}

            </div>
           </div>    
        );
    }
}
