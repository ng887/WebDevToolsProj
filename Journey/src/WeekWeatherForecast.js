/**
 * Created by neha on 4/14/2017.
 */
import React from 'react';


const WeekWeatherForecast = ({
    destinationWeatherForecast
}) => {
   // const todayWeather = destinationWeatherForecast[0];
    let today = new Date();
    console.log(destinationWeatherForecast);
    
    const WeekWeatherForecast = [];
    
    
            destinationWeatherForecast.map((day) => {
                const date = (new Date(day.dt * 1000));
                //console.log(date);
                const dateTxt = date.toString().substring(4, 10);
                let i = 0;
                if (date.getHours() === 5) {
                    WeekWeatherForecast.push(
                    <div key={i++} className='text-center colLayout border marging padding brand-color3'>
		 			<span> {dateTxt} 5AM</span>
	                <img src={"http://openweathermap.org/img/w/"+day.weather[0].icon+".png"}  alt="weather_icon" />  <br/>
	                <b> {day.weather[0].description} </b> <br/>
	                <span>&nbsp;    {parseInt(day.main.temp - 273.15)}˚C</span>  <br/>
	                
	                </div>

                    )
                }
            })
      		
    return (
    	<div className='desktopLayout'>
    	{WeekWeatherForecast}
    	</div> 
    	)
}

export default WeekWeatherForecast;
