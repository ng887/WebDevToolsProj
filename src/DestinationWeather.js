/**
 * Created by neha on 4/13/2017.
 */

import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeekWeatherForecast from './WeekWeatherForecast';

const DestinationWeather = ({	
	destinationWeatherForecast,
	destination,
	tripDates
}) => {
	//console.log(destinationWeatherForecast)
	//console.log(destinationWeatherForecast.weather)
	//console.log(destination)
	//console.log(todayWeather);	
		const todayWeather = destinationWeatherForecast[0];	
		const todayDate = new Date();
		let displayForecast=false;
		let startDate = new Date(tripDates.startDate);
		if(startDate.getDate() - todayDate.getDate() <= 7){
			displayForecast=true;
		}

		//console.log(displayForecast);		
    return (
      <div className='desktopLayout margin margin-left'>
        	{todayWeather !== undefined &&  todayWeather.weather!== undefined && <CurrentWeather todayWeather ={todayWeather} destination={destination}/>}
          	{displayForecast && destinationWeatherForecast !== undefined && <WeekWeatherForecast destinationWeatherForecast = {destinationWeatherForecast}/>}
     </div>
    )
}
export default DestinationWeather;