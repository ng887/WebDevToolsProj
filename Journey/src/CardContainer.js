import React, {Component} from 'react';
import Card from './AddedCard';
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
        console.log(locationOnDay);
        const tempDiv = [];
        for (let i = 1; i <= noOfDays; i++) {
            tempDiv.push(
                <div onClick={(e) => this.activateDay(e)} id={i} className='card' key={i}>
                    <div style={{border: 'solid 1px', backgroundColor: 'lightblue'}}>Day {i}</div>
                </div>
            );
        }

        for (let i = 1; i <= noOfDays; i++) {
            let currentLocations =  getLocationForDays(i, this.state.locationOnDay);
            let newDiv = document.createElement('div');
           // let emptyDiv = document.createElement('div');
           // let emptyContent = document.createTextNode(' ');
          //  emptyDiv.appendChild(emptyContent);
            let currentDay = document.getElementById(i);
            currentDay.innerHTML = '';
           // currentDay.appendChild(emptyDiv);
            currentLocations.map( (entry) => {
                let newContent = document.createTextNode(entry.name);
                newDiv.appendChild(newContent);
                currentDay.appendChild(newDiv);
            })

        }
            return (
                <div>
                    {tempDiv}
                </div>
            )
        }

        componentWillReceiveProps(nextProps)
        {
            //  console.log(nextProps.locationOnDay);
            this.setState({
                locationOnDay: nextProps.locationOnDay
            })
        }

    }

export default CardContainer;
