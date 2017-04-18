import React from 'react';
import {getCarrierName} from './Functions/getCarriers'
import {getCarrierPlaces} from './Functions/getCarrierPlaces'

const TripTravelExpense = ({
	tripTravelExpenses
}) => {
	const tripQuotes=tripTravelExpenses.Quotes
	console.log(tripQuotes);
	const carriers = tripTravelExpenses.Carriers
	const places = tripTravelExpenses.Places



	const TripQuotes = [];
  
    if (tripTravelExpenses !== undefined && tripQuotes !== undefined) {
    	 const currency = tripTravelExpenses.Currencies[0].Symbol;
            for (let i = 0; i < tripQuotes.length; i++) {            	
                if (tripQuotes[i].OutboundLeg.CarrierIds !== undefined) {
                    const carrierName = getCarrierName(tripQuotes[i].OutboundLeg.CarrierIds[0], carriers);
                    const origin = getCarrierPlaces(tripQuotes[i].OutboundLeg.OriginId, places);
                    const destination = getCarrierPlaces(tripQuotes[i].OutboundLeg.DestinationId, places);
                    TripQuotes.push(

                   	<tr>
                   		<td> {tripQuotes[i].OutboundLeg.DepartureDate}</td>				
						<td> {origin} </td>
						<td> {destination} </td>
						<td> {currency}{tripQuotes[i].MinPrice} </td>
						<td> {carrierName} </td>
						
					</tr>

                    )
                }

            }
        }
   

    return (
        <div className='desktopLayout' style={{marginTop: 50}}>
        	<h2 className='margin text-center'> Outbound Leg Flight Details </h2>
			<table className="table table-striped">
				<thead>
				<tr>
					<th> Date Time </th>
					<th> Origin Place </th>
					<th> Destination Place </th>
					<th> Min Price </th>
					<th> Carriers </th>
					</tr>
				</thead>
				<tbody>
				{TripQuotes}
				</tbody>
			</table>
        </div>
    )
}
export default TripTravelExpense;



   