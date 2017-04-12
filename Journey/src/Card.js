import React from 'react';
import noImg from './images/No_image_available.jpg';


const Card = ({
	noOfDays,
    pointsOfInterest
}) => {
    console.log(pointsOfInterest);
    console.log('hello');
    console.log(pointsOfInterest[1]);

	const tempDiv=[];

    for(let i = 0; i < pointsOfInterest.length; i++) {
     let photoUrl;
     // console.log(photoUrl);
     if(pointsOfInterest[i].photos){
      photoUrl = pointsOfInterest[i].photos[0].getUrl({maxWidth: 640});
     }
     else{
      photoUrl = noImg;
     }
      tempDiv.push( 
       <div  className='card' key={i}>
           <span> <b>Name:</b> {pointsOfInterest[i].name}</span><br/>
           <img src={photoUrl} alt='No Image'/>
           <span> <b>Rating:</b> {pointsOfInterest[i].rating}</span><br/>
        </div>
      );
    }   

    return (
        <div id="test">
      {tempDiv}
      </div>
    )
}

export default Card;