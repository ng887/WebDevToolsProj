import React, {Component} from 'react';
import Card from './AddedCard';

class CardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: [],
            activeDay: 1,
        }
        //  this.activateDay = this.activateDay.bind(this);
    }

    activateDay(e) {
       this.props.getActiveDay(e.target.id);
    }

    render() {
        const noOfDays = this.props.noOfDays;
        const bismillah = this.props.locationOnDay;
        bismillah.map((e) => {
            console.log(e);
        })
        const tempDiv = [];

        for (let i = 1; i <= noOfDays; i++) {
                tempDiv.push(
                    <div onClick={(e) => this.activateDay(e)} id={i} className='card' key={i}>
                      
                    </div>
                );
        }

        return (
            <div>
                {tempDiv}
            </div>
        )
    }

}

export default CardContainer;
