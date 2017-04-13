import React, {Component} from 'react';
import Card from './AddedCard';

class CardContainer extends Component {

    constructor(props) {
        super(props);
    }

    activateDay(e) {
       this.props.getActiveDay(e.target.id);
    }

    render() {
        const noOfDays = this.props.noOfDays;
        const locationOnDay = this.props.locationOnDay;
        const tempDiv = [];
        for (let i = 1; i <= noOfDays; i++) {
                tempDiv.push(
                    <div onClick={(e) => this.activateDay(e)} id={i} className='card' key={i}>
                      
                    </div>
                );
        }
        if(locationOnDay.length) {
            for(let i=0; i<locationOnDay.length; i++) {
                document.getElementById(locationOnDay[i].day).innerHTML = locationOnDay[i].location.name;
                //<Card pointOfInterest={locationOnDay[i].location} i={i}/>
            }
        }
        return (
            <div>
                {tempDiv}
            </div>
        )
    }
}

export default CardContainer;
