/**
 * Created by neha on 4/12/2017.
 */

import React, {Component} from 'react';
import noImg from './images/No_image_available.jpg';
import {Button} from 'react-bootstrap';



export default class Card extends Component {

    passToDayContainer(location) {
       this.props.passLocation(location);
    }

    render() {
        const pointOfInterest = this.props.pointOfInterest;
        const i = this.props.i;
        let photoUrl;
        // console.log(photoUrl);
        if (pointOfInterest.photos) {
            photoUrl = pointOfInterest.photos[0].getUrl({maxWidth: 640});
        }
        else {
            photoUrl = noImg;
        }

        return (
            <div className='card text-center' key={i}>
                <div><b> {pointOfInterest.name}</b></div>
                <br/>
                <div><img src={photoUrl} alt={pointOfInterest.name} className="wideImg"/></div>
                <div><b>Rating:</b> {pointOfInterest.rating}</div>
                <br/>
                <Button type="button" onClick={this.passToDayContainer.bind(this, pointOfInterest)} className="btn btn-info">Add
                    to iternary</Button>
            </div>
        )
    }
}


/**const Card = ({
	pointOfInterest,
	i
}) => {
	//console.log(pointsOfInterest);
	let photoUrl;
     // console.log(photoUrl);
     if(pointOfInterest.photos){
      photoUrl = pointOfInterest.photos[0].getUrl({maxWidth: 640});
     }
     else{
      photoUrl = noImg;
     }
     
    return (
        <div className='card text-center' key={i}>
           <div> <b> {pointOfInterest.name}</b></div><br/>
           <div><img src={photoUrl} alt={pointOfInterest.name} className="wideImg"/></div>
           <div><b>Rating:</b> {pointOfInterest.rating}</div><br/>
            <Button type="button" onClick={addToDayContainer.bind(this, pointOfInterest)} className="btn btn-info">Add to iternary</Button>
        </div>
    )
}
 export default Card;
 */


