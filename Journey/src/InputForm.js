/**
 * Created by khutaijashariff on 4/10/17.
 */
import React, {Component} from 'react';
import Search from './Search';
import DateRange from './DateRange';
import {Button} from 'react-bootstrap';

export default class InputForm extends Component{
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
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("you searched" );
        console.log(this.state.destination);
        console.log(localStorage.getItem('startDate'));
        console.log(localStorage.getItem('endDate'));
    }
    render() {
        return (
            <form  className={'top-margin text-center'}>
            <div className={'col-md-3 col-md-offset-2'}><Search /></div>
             <div className={'col-md-3'}><DateRange /></div>
                <Button className={'col-md-2 btn-primary'} onClick={this.onSubmit}>Search</Button>
            </form>
        );
    }
}

