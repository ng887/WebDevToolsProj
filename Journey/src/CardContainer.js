import React from 'react';
import Card from './Card';

const CardContainer = ({
    noOfDays,
    pointsOfInterest
}) => {

    console.log(pointsOfInterest);
    const tempDiv = [];
    /*if(pointsOfInterest) {
     //  console.log(pointsOfInterest.length);
     // console.log(noOfDays);
      //}*/
    let j = 0;
    for (let i = 0; i < noOfDays; i++) {
        if (!pointsOfInterest[j]) {
            tempDiv.push(
                <div className='card' key={i+1}>
            <p> Sorry there are no other prominent places suggestions for the day. </p>
            </div>
            )
        } else {
            tempDiv.push(
                <div className='card' key={i}>
                  <Card pointsOfInterest={pointsOfInterest[j]} i={j}/>
                  <Card pointsOfInterest={pointsOfInterest[j+1]} i={j+1}/>
                  <Card pointsOfInterest={pointsOfInterest[j+2]} i={j+2}/>          
              </div>
            );
        }
        j += 3;
    }

    return (
      <div>
          {tempDiv}
      </div>
    )
}
export default CardContainer;
