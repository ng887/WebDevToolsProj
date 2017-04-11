import React from 'react';

const Card = ({
	noOfDays
}) => {

	const tempDiv=[];
    for(let i = 0; i < noOfDays; i++) {
      tempDiv.push( 
       <div className='card' key={i}>
                   <span>{i}</span>                  
        </div>
      );
    }   

    return (
    	<div>
      {tempDiv}
      </div>
    )
}

export default Card;