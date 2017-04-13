/**
 * Created by neha on 4/12/2017.
 */

import React from 'react';
import noImg from './images/No_image_available.jpg';

const Card = ({
	pointsOfInterest,
	i
}) => {
	console.log(pointsOfInterest);
	let photoUrl;
     // console.log(photoUrl);
     if(pointsOfInterest.photos){
      photoUrl = pointsOfInterest.photos[0].getUrl({maxWidth: 640});
     }
     else{
      photoUrl = noImg;
     }
     
    return (
        <div className='card text-center' key={i}>
           <div> <b> {pointsOfInterest.name}</b></div><br/>
           <div><img src={photoUrl} alt='No Image' className="wideImg"/></div>
           <div> <b>Rating:</b> {pointsOfInterest.rating}</div><br/>
        </div>
    )
}
export default Card;