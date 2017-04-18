import React from 'react';

const WeekWeatherForecast = ({
    destinationWeatherForecast
}) => {       
    const WeekWeatherForecast = [];  
    
            destinationWeatherForecast.map((day) => {
                const date = (new Date(day.dt * 1000));               
                const dateTxt = date.toString().substring(4, 10);
        
                if (date.getHours() === 5) {
                    WeekWeatherForecast.push(
                        <div className='text-center colLayout border marging padding brand-color3'>                            
        		 			<span>{dateTxt} 5AM</span>
        	                <img src={"http://openweathermap.org/img/w/"+day.weather[0].icon+".png"}  alt="weather_icon" />  <br/>
        	                <b>{day.weather[0].description} </b> <br/>
        	                <span>&nbsp;{parseInt(day.main.temp - 273.15,10)}˚C</span>  <br/>	               
    	                </div>
                    )
                }
            });
      		
    return (
    	<div className='desktopLayout' style={{flexWrap:'nowrap'}}>        
    	   {WeekWeatherForecast}
    	</div> 
    	)
}
export default WeekWeatherForecast;
