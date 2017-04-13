import React, {Component} from 'react';
import Card from './AddedCard';

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
        const tempDiv = [];
        for (let i = 1; i <= noOfDays; i++) {
                tempDiv.push(
                    <div onClick={(e) => this.activateDay(e)} id={i} className='card' key={i}>

                    </div>
                );
        }
        const locationOnDay = this.state.locationOnDay;
        console.log(locationOnDay.location);
        if(Object.keys(locationOnDay).length && locationOnDay.location!='deactivated') {
         //   for(let i=0; i<locationOnDay.length; i++) {
                var newDiv = document.createElement("div");
                var newContent = document.createTextNode(locationOnDay.location.name);
                let currentDay = document.getElementById(locationOnDay.day);
                newDiv.appendChild(newContent);
                currentDay.appendChild(newDiv);
            //}
        }
        return (
            <div>
                {tempDiv}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      //  console.log(nextProps.locationOnDay);
        this.setState({
            locationOnDay: nextProps.locationOnDay
        })
    }

    componentDidMount() {

    }
}

export default CardContainer;
