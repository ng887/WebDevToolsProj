/**
 * Created by neha on 4/9/2017.
 */

import React from 'react';

const DestinationWeather = ({
	destinationCurTemp,
	destinationWeatherForecast,
	destination
}) => {
	console.log(destinationWeatherForecast)
	console.log(destinationWeatherForecast.weather)
	console.log(destination)

	const CurWeatherDetails=[];
	if(destinationWeatherForecast.weather !== undefined){
		 CurWeatherDetails.push(
                <div className='card text-center'>
	                 <b>{destination.city}</b>
	                <img src={"http://openweathermap.org/img/w/"+destinationWeatherForecast.weather[0].icon+".png"}  alt="weather_icon" /> 
	                <b> {destinationWeatherForecast.weather[0].description} </b>
	                <span>{destinationCurTemp}˚C</span>  <br/>
	             	<span><b>Wind Direction: </b>{destinationWeatherForecast.wind.deg}</span>
	                <span><b>  Wind Speed: </b>{destinationWeatherForecast.wind.speed}</span> 
	                
                </div>
             )
	}
    return (
      <div>
        	{CurWeatherDetails}
     </div>
	)
}
export default DestinationWeather;