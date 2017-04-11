import React from 'react';

const Card = ({
	noOfDays,
    pointsOfInterest
}) => {

	const tempDiv=[];
    console.log(pointsOfInterest);
    for(let i = 0; i < noOfDays; i++) {
      tempDiv.push( 
       <div  className='card' key={i}>
                   <span>{i}</span>                  
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