/**
 * Created by neha on 4/13/2017.
 */

import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeekWeatherForecast from './WeekWeatherForecast';

const DestinationWeather = ({	
	destinationWeatherForecast,
	destination
}) => {
	//console.log(destinationWeatherForecast)
	//console.log(destinationWeatherForecast.weather)
	//console.log(destination)

	const todayWeather = destinationWeatherForecast[0];
	//console.log(todayWeather);

	
    return (
      <div>
        	{todayWeather !== undefined &&  todayWeather.weather!== undefined && <CurrentWeather todayWeather ={todayWeather} destination={destination}/>}
        	
        	{destinationWeatherForecast !== undefined && <WeekWeatherForecast destinationWeatherForecast = {destinationWeatherForecast}/>}
     </div>
    )
}
export default DestinationWeather;