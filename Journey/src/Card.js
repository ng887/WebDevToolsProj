/**
 * Created by neha on 4/12/2017.
 */

import React, {Component} from 'react';
import noImg from './images/No_image_available.jpg';

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
            photoUrl = pointOfInterest.photos[0].getUrl({maxWidth: 240});
        }
        else {
            photoUrl = noImg;
        }

        return (
            <div className='card text-center' key={i}>
                <div   style={{background:'url(' + photoUrl + ')no-repeat center', backgroundSize:'cover', height: 180, width:'100%'}}></div>
                <div><b> {pointOfInterest.name}</b></div>
                <div><b>Rating:</b> {pointOfInterest.rating}</div>
                <a onClick={this.passToDayContainer.bind(this, pointOfInterest)} className="card-button">Add to Iternary</a>
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


