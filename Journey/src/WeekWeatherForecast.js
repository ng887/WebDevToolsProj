/**
 * Created by neha on 4/14/2017.
 */
import React from 'react';


const WeekWeatherForecast = ({
    destinationWeatherForecast
}) => {
    const todayWeather = destinationWeatherForecast[0];
    let today = new Date();
   // console.log(destinationWeatherForecast);
    
    const WeekWeatherForecast = [];
    
    
            destinationWeatherForecast.map((day) => {
                const date = (new Date(day.dt * 1000));
                //console.log(date);
                const dateTxt = date.toString().substring(4, 10);
                if (date.getHours() === 5) {
                    WeekWeatherForecast.push(
                    <div>
                    <table className='text-center'>
		 			<td><span> {dateTxt} 5AM</span> </td>
	                <td><img src={"http://openweathermap.org/img/w/"+day.weather[0].icon+".png"}  alt="weather_icon" /> </td>
	                <td><b> {day.weather[0].description} </b></td>
	                <td><span>&nbsp;    {parseInt(day.main.temp - 273.15)}˚C</span>  <br/></td>
	                </table>
	                </div>

                    )
                }
            })
      		
    return (
    	<div className='card text-center'>
    	{WeekWeatherForecast}
    	</div> 
    	)
}

export default WeekWeatherForecast;
