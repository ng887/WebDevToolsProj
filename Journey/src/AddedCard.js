/**
 * Created by khutaijashariff on 4/12/17.
 */

import React from 'react';
import noImg from './images/No_image_available.jpg';
import {Button} from 'react-bootstrap';


export default class AddedCard {
    //get day from passed location when passed
    removeLocation(location) {

    }

    render() {
        //will be passed object with location and day
        let pointOfInterest = this.props.pointOfInterest;
        let photoUrl;
        if (pointOfInterest) {
            if (pointOfInterest.photos) {
                photoUrl = pointOfInterest.photos[0].getUrl({maxWidth: 640});
            }
            else {
                photoUrl = noImg;
            }
            return (
                <div className='card text-center' key={pointOfInterest.placeId}>
                    <div><b> {pointOfInterest.name}</b></div>
                    <br/>
                    <div><img src={photoUrl} alt={pointOfInterest.name} className="wideImg"/></div>
                    <Button type="button" onClick={this.removeLocation.bind(this, pointOfInterest)}
                            className="btn btn-info">Remove</Button>
                </div>
            )
        } else {
            return (<div></div>);
        }
    }
}

/**
 const Card = ({
    pointsOfInterest
}) => {
    let photoUrl;
    if(pointsOfInterest) {
        if(pointsOfInterest.photos){
            photoUrl = pointsOfInterest.photos[0].getUrl({maxWidth: 640});
        }
        else{
            photoUrl = noImg;
        }
        return (
            <div className='card text-center' key={pointsOfInterest.placeId}>
                <div> <b> {pointsOfInterest.name}</b></div><br/>
                <div><img src={photoUrl} alt={pointsOfInterest.name} className="wideImg"/></div>
                <Button type="button"  className="btn btn-info">Remove</Button>
            </div>
        )
    }else {
        return (<div></div>);
    }
}
 export default Card;
 */