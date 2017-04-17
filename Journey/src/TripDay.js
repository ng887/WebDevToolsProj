/**
 * Created by khutaijashariff on 4/15/17.
 */
import React, {Component} from 'react';

export default class TripDay extends Component {

    activateDay(e) {
        this.props.getActiveDay(e.target.id);
    }

    removeLocation(locationName, day) {
        this.props.removeLocation(locationName, day);

    }

    render() {
        const dayLocations = this.props.dayLocations;
        let classNameForDayHeader = "daycard-header";
        if (this.props.activeDay == this.props.day) {
            classNameForDayHeader = "daycard-header-highlight";
        }
        if (!dayLocations.length) {
            return (
                <div>
                    <div className='margin padding'>
                        <div onClick={(e) => this.activateDay(e)} id={this.props.day} className={classNameForDayHeader}>
                            Day {this.props.day}</div>
                        <div className="daycard-body-placeholder">Add places to visit!</div>
                    </div>
                </div>
            );
        }
        let dayEvents = dayLocations.map((entry) => {
            return (<div key={entry.place_id} id={entry.place_id} className="daycard-location">
                <div>{entry.name}
                    <a onClick={this.removeLocation.bind(this, entry.name, this.props.day)} style={{ float: 'right'}}>Remove</a>
                </div>
            </div>);
        })
        return (
            <div>
                <div className='margin padding'>
                    <div onClick={(e) => this.activateDay(e)} id={this.props.day} className={classNameForDayHeader}>
                        Day {this.props.day}</div>
                    <div className="daycard-body">
                        {dayEvents}
                    </div>
                </div>
            </div>
        );
    }
}