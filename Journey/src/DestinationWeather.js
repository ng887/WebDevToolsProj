import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeekWeatherForecast from './WeekWeatherForecast';

const DestinationWeather = ({	
	destinationWeatherForecast,
	destination,
	tripDates
}) => {
		const todayWeather = destinationWeatherForecast[0];	
		const todayDate = new Date();
		let displayForecast=false;
		let startDate = new Date(tripDates.startDate);
		
		if(startDate.getDate() - todayDate.getDate() <= 7){
			displayForecast=true;
		}

    return (
    <div className='margin margin-left'>
	    <div className='margin'> <h2 className='text-center'> Check The Current Week Forecast</h2> </div>
	    <div className='desktopLayout margin' style={{flexWrap:'nowrap'}}>      		
	        	{todayWeather !== undefined &&  todayWeather.weather!== undefined && <CurrentWeather todayWeather={todayWeather} destination={destination}/>}
	          	{displayForecast && destinationWeatherForecast!==undefined && <WeekWeatherForecast destinationWeatherForecast={destinationWeatherForecast}/>}
	    </div>
    </div>
    )
}
export default DestinationWeather;