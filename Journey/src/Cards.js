import React from 'react';
import Card from './Card';

const Cards = ({
    noOfDays,
    pointsOfInterest
}) => {
    console.log(pointsOfInterest);
    // console.log('hello');
    //console.log(pointsOfInterest[1]);

    const tempDiv = [];

    for (let i = 0; i < pointsOfInterest.length; i++) {
        /* let photoUrl;
         // console.log(photoUrl);
         if(pointsOfInterest[i].photos){
          photoUrl = pointsOfInterest[i].photos[0].getUrl({maxWidth: 640});
         }
         else{
          photoUrl = noImg;
         }*/
        tempDiv.push(
            /*  <div className='card text-center' key={i}>
                  <div> <b> {pointsOfInterest[i].name}</b></div><br/>
                  <div><img src={photoUrl} alt='No Image' className="wideImg"/></div>
                  <div> <b>Rating:</b> {pointsOfInterest[i].rating}</div><br/>

               </div>*/
            <Card pointsOfInterest={pointsOfInterest[i]} i={i}/>

        );
    }

    return (
      <div id="test" key ="test">
          {tempDiv}
      </div>
    )
}

export default Cards;
