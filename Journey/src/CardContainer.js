import React, {Component} from 'react';
import {getLocationForDays} from './GetLocationsForDays';

class CardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationOnDay: []
        }
    }

    activateDay(e) {
        this.props.getActiveDay(e.target.id);
        this.props.deactivateLocation('deactivated');
    }


    render() {
        const noOfDays = this.props.noOfDays;
        const locationOnDay = this.state.locationOnDay;
        const tempDiv = [];
        for (let i = 1; i <= noOfDays; i++) {
            tempDiv.push(
                <div onClick={(e) => this.activateDay(e)} id={i} className='card' key={i}>
                    <div style={{border: 'solid 1px', backgroundColor: 'lightblue'}}>Day {i}</div>
                </div>
            );
        }
        for (let i = 1; i <= noOfDays; i++) {
            let currentLocations = getLocationForDays(i, this.state.locationOnDay);
            if (document.getElementById(i) !== undefined && currentLocations.length !== 0) {
                let currentDay = document.getElementById(i);
                currentDay.innerHTML = '';
                currentLocations.map((entry) => {
                    console.log(entry);
                    let newDiv = document.createElement('div');
                    let newContent = document.createTextNode(entry.location.name);
                    newDiv.appendChild(newContent);
                    currentDay.appendChild(newDiv);
                })
            }
        }

        return (
            <div className='brand-color2'>
            <h2 className='text-center'> PREPARE YOUR ITINERARY </h2>
            <div className='desktopLayout margin-left'>            
            <br/>
                {tempDiv}
            </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            locationOnDay: nextProps.locationOnDay
        })

    }


}

export default CardContainer;
