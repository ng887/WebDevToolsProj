import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Search from './Search';
import DateRange from './DateRange';
import Cards from './Cards';
import DestinationWeather from './DestinationWeather';
import TripDay from './TripDay';
import TripTravelExpense from './TripTravelExpense';

import {getLocationForDays} from './Functions/GetLocationsForDays';
import {removeLocation} from './Functions/RemoveLocation';
import {calculateDays} from './Functions/CalculateDays';


export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'InputForm',
            destination: {city: '', state: '', country: '', longitude: '', latitude: ''},
            tripDates: {startDate: localStorage.getItem('startDate'), endDate: localStorage.getItem('endDate')},
            noOfDays: '',
            pointsOfInterest: '',
            currentAddedLocation: '',
            currentActiveDay: 1,
            locationOnDay: [],
            destinationWeather: [],
            tripTravelExpenses: [],
            showIternary: true,
            showFlight: false,
            showWeather: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.fetchWeatherDetails = this.fetchWeatherDetails.bind(this);
        this.activateIternary = this.activateIternary.bind(this);
        this.activateFlight = this.activateFlight.bind(this);
        this.activateWeather = this.activateWeather.bind(this);
       
    }

    componentDidMount() {

        /* global google b:true */
        const placeInput = document.getElementById('autocomplete');
        let autocomplete = new google.maps.places.Autocomplete(placeInput, {types: ['geocode']})

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            let place = autocomplete.getPlace();

            this.setState({
                destination: {
                    city: place.address_components[0] !== undefined? place.address_components[0].long_name : '',
                    state: place.address_components[2] !== undefined? place.address_components[2].long_name : '', 
                    country: place.address_components[3] !== undefined? place.address_components[3].long_name : '',                   
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

        let searchResults = document.getElementById('autocomplete');
        let service = new google.maps.places.PlacesService(searchResults);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.setState({pointsOfInterest: results});
            }
        });
        this.setState({
            page: 'Results'
        })

    }


    fetchWeatherDetails(city) {
        const api_key = '6ab73f3655f1a0db55237e9f5b00bff9';
        const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

        const url = `${root_url}&q=${city},us`;
        //console.log(url);
        fetch(url)
            .then((res) => {
                return res.json();               
            })
            .then((json) => {               
                this.setState({
                    destinationWeather: json.list
                });
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });

    }

    fetchFlightDetails() {
        const api_key = 'no883655154989405407520801242418';      
        const currency = 'usd';
        const locale = 'en-us';
        const originPlace = 'RDM';
        const destinationPlace = `${this.state.destination.latitude},${this.state.destination.longitude}-latlong`;       
        const root_url = `http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/us/${currency}/${locale}/${originPlace}/${destinationPlace}/anytime/anytime?apikey=${api_key}`;
       
        fetch(root_url)
            .then((res) => {               
                return res.json();
            })
            .then((json) => {                
                this.setState({
                    tripTravelExpenses: json
                });

            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });

    }

    updateRemovedLocation(locationName, day) {
        const locationOnDay = this.state.locationOnDay;
        const locationRemoved = removeLocation(locationOnDay, locationName, day);
        this.setState({
            locationOnDay: locationRemoved
        })
    }

    getCurrentClickedLocation(location) {
        this.setState({
            currentAddedLocation: location,          
            locationOnDay: [...this.state.locationOnDay, {location: location, day: this.state.currentActiveDay}]
        })
    }

    getActiveDay(dayId) {
        this.setState({
            currentActiveDay: dayId
        })
    }

    activateIternary() {
        this.setState({
            showIternary: true,
            showFlight: false,
            showWeather: false
        })
    }

    activateFlight() {
        this.setState({
            showFlight: true,
            showIternary: false,
            showWeather: false
        })
    }

    activateWeather() {
        this.setState({
            showWeather: true,
            showIternary: false,
            showFlight: false
        })
    }
    
    render() {
        const iternaryButtonClass = this.state.showIternary ? "btn btn-lg btn-info j-button-span col-md-2 col-lg-2" : "btn btn-lg btn-default j-button-span col-md-2";
        const flightButtonClass = this.state.showFlight ? "btn btn-lg btn-info col-md-2  j-button-span" : "btn btn-lg btn-default j-button-span col-md-2 col-lg-2";
        const weatherButtonClass = this.state.showWeather ? "btn btn-lg btn-info col-md-2 j-button-span" : "btn btn-lg btn-default j-button-span col-md-2  col-lg-2";
        const noOfDays = this.state.noOfDays;
        const locationOnDay = this.state.locationOnDay;
        let currentLocations = [];

        for (let day = 1; day <= noOfDays; day++) {
            currentLocations.push(getLocationForDays(day, locationOnDay));
        }

        const tripDays = [];
        for (let day = 0; day < noOfDays; day++) {
            let dayMarkup = (<TripDay key={day+1} day={day+1} dayLocations={currentLocations[day]}
                                      getActiveDay={this.getActiveDay.bind(this)}
                                      removeLocation={this.updateRemovedLocation.bind(this)}
                                      activeDay={this.state.currentActiveDay}/>);
            tripDays.push(dayMarkup);
        }

        return (
            <div>
                { this.state.page === 'InputForm' && <div>
                    <form className={'top-margin text-center'}>
                        <div className={'col-md-3 col-md-offset-2'}><Search /></div>
                        <div className={'col-md-3'}><DateRange /></div>
                        <Button className={'col-md-2 btn-info'} onClick={this.onSubmit}>Search</Button>
                    </form>
                    <br/>
                </div> }

                {this.state.page === 'Results' &&
                <div>

                    <Cards getPassedLocation={this.getCurrentClickedLocation.bind(this)}
                           pointsOfInterest={this.state.pointsOfInterest}
                           cityName={this.state.destination.city}/>

                    <div className='colLayout'>

                        <div>
                            <span onClick={this.activateIternary} className={iternaryButtonClass}>Iternary</span>
                            <span onClick={this.activateFlight} className={flightButtonClass}>Flights</span>
                            <span onClick={this.activateWeather} className={weatherButtonClass}>Weather</span>
                        </div>

                        { this.state.showIternary && <div className='margin'>
                            <h2 className='text-center'>Prepare Your Itinerary</h2>
                            <div className='desktopLayout'>{tripDays}</div>
                        </div> }

                        {  this.state.showFlight && <TripTravelExpense
                            tripTravelExpenses={this.state.tripTravelExpenses}/>}

                        {this.state.showWeather && <DestinationWeather
                            destination={this.state.destination}
                            destinationWeatherForecast={this.state.destinationWeather}
                            tripDates={this.state.tripDates}/> }
                    </div>
                </div>
                }
            </div>
        );
    }
}
