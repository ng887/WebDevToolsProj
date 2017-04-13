/**
 * Created by khutaijashariff on 4/12/17.
 */

import React from 'react';
import noImg from './images/No_image_available.jpg';
import { Button } from 'react-bootstrap';


const Card = ({
    pointsOfInterest,
    i
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
            <div className='card text-center' key={i}>
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