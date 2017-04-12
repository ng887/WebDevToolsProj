import React from 'react';

const CardContainer = ({
	noOfDays,
    pointsOfInterest
}) => {

	const tempDiv=[];
  //  if(pointsOfInterest) {
     console.log(pointsOfInterest.length);
    console.log(noOfDays);
    //}
    let j = 0;
    for(let i = 0; i < noOfDays; i++) {
          tempDiv.push(
              <div  className='card' key={i}>
                <span>{pointsOfInterest[j].name}</span>
                  <span>{pointsOfInterest[j+1].name}</span>
                  <span>{pointsOfInterest[j+2].name}</span>
              </div>
          );
        j += 3;
    }   

    return (
    	<div>
      {tempDiv}
      </div>
    )
}

export default CardContainer;